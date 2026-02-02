/**
 * Scroll Reveal Animation Module
 * Uses IntersectionObserver for performant scroll-triggered animations
 * Respects prefers-reduced-motion accessibility preference
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If reduced motion is preferred, skip initialization
    if (prefersReducedMotion) {
        return;
    }

    // Animation configuration
    const config = {
        root: null, // viewport
        rootMargin: '0px 0px -80px 0px', // trigger when element is 80px from bottom of viewport
        threshold: 0.1 // trigger when 10% of element is visible
    };

    // Stagger delay configuration (in milliseconds)
    const staggerDelay = {
        min: 80,
        max: 140
    };

    /**
     * Initialize group reveals (containers where all children animate simultaneously)
     */
    function initGroupReveals() {
        // Find all containers with .reveal-group class
        const groupContainers = document.querySelectorAll('.reveal-group');

        if (groupContainers.length === 0) {
            return;
        }

        // Create IntersectionObserver for group containers
        const groupObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Find all .reveal children and reveal them simultaneously
                    const revealChildren = entry.target.querySelectorAll('.reveal');
                    revealChildren.forEach((child) => {
                        child.classList.add('reveal--visible');
                    });
                    
                    // Once animated, stop observing this container
                    groupObserver.unobserve(entry.target);
                }
            });
        }, config);

        // Observe all group containers
        groupContainers.forEach((container) => {
            groupObserver.observe(container);
        });
    }

    /**
     * Initialize scroll reveal animations for individual elements
     */
    function initScrollReveal() {
        // Find all elements with .reveal class that are NOT inside a .reveal-group
        const allRevealElements = document.querySelectorAll('.reveal');
        const revealElements = Array.from(allRevealElements).filter(element => {
            // Exclude elements that are inside a .reveal-group container
            return !element.closest('.reveal-group');
        });

        if (revealElements.length === 0) {
            return;
        }

        // Create IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add visible class to trigger animation
                    entry.target.classList.add('reveal--visible');
                    
                    // Once animated, stop observing this element
                    observer.unobserve(entry.target);
                }
            });
        }, config);

        // Observe all reveal elements
        revealElements.forEach((element) => {
            observer.observe(element);
        });
    }

    /**
     * Apply stagger delays to elements in a container
     * Used for grid/row items that should animate sequentially
     */
    function applyStaggerDelays() {
        // Find all containers with .reveal-stagger class
        const staggerContainers = document.querySelectorAll('.reveal-stagger');

        staggerContainers.forEach((container) => {
            const children = Array.from(container.children).filter(child => 
                child.classList.contains('reveal')
            );

            children.forEach((child, index) => {
                // Calculate delay: linear progression from min to max
                const delay = staggerDelay.min + 
                    (index * (staggerDelay.max - staggerDelay.min) / Math.max(1, children.length - 1));
                
                // Apply delay as CSS custom property
                child.style.setProperty('--reveal-delay', `${delay}ms`);
            });
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyStaggerDelays();
            initGroupReveals();
            initScrollReveal();
        });
    } else {
        // DOM already loaded
        applyStaggerDelays();
        initGroupReveals();
        initScrollReveal();
    }
})();

