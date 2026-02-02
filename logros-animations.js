/**
 * Logros Page - Scroll Reveal Animations
 * Premium, subtle animations using IntersectionObserver
 * Respects prefers-reduced-motion
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // If reduced motion is enabled, show all elements immediately
        const allRevealElements = document.querySelectorAll('.logros-page [data-reveal]');
        allRevealElements.forEach(el => {
            el.classList.add('is-visible');
        });
        return; // Exit early
    }

    // IntersectionObserver configuration
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize reveal animations
    function initReveals() {
        // Select all elements with data-reveal attribute
        const revealElements = document.querySelectorAll('.logros-page [data-reveal]');
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Initialize stagger animations for grids
    function initStagger() {
        // Find all containers with data-stagger attribute
        const staggerContainers = document.querySelectorAll('.logros-page [data-stagger]');
        
        staggerContainers.forEach(container => {
            const children = Array.from(container.children);
            const staggerDelay = parseInt(container.getAttribute('data-stagger-delay')) || 70; // Default 70ms
            
            children.forEach((child, index) => {
                // Only apply if child doesn't already have data-reveal
                if (!child.hasAttribute('data-reveal')) {
                    child.setAttribute('data-reveal', 'up');
                }
                // Set delay via CSS variable
                child.style.setProperty('--delay', `${index * staggerDelay}ms`);
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initReveals();
            initStagger();
        });
    } else {
        // DOM already loaded
        initReveals();
        initStagger();
    }

    // Re-initialize stagger and reveals for dynamically added content (e.g., testimonials loaded via JS)
    // This is useful if content is added after page load
    window.reinitLogrosStagger = function() {
        initStagger();
        // Re-observe any new reveal elements that were added
        const newRevealElements = document.querySelectorAll('.logros-page [data-reveal]:not(.is-visible)');
        newRevealElements.forEach(element => {
            observer.observe(element);
        });
    };

})();

