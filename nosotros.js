// Nosotros Page - Scroll Reveal Animations
// Only runs on the Nosotros page

(function() {
    'use strict';
    
    // Check if we're on the Nosotros page
    if (!document.body.classList.contains('nosotros-page')) {
        return;
    }
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If reduced motion is enabled, show all elements immediately
    if (prefersReducedMotion) {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            el.classList.add('reveal--visible');
        });
        return;
    }
    
    // IntersectionObserver options
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger when element is 10% from bottom of viewport
        threshold: 0.1 // Trigger when 10% of element is visible
    };
    
    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Hero text animation on page load (immediate, no scroll needed)
    const heroText = document.querySelector('.about-hero-text');
    if (heroText) {
        const heroReveals = heroText.querySelectorAll('.reveal');
        // Small delay to ensure smooth initial render
        setTimeout(() => {
            heroReveals.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('reveal--visible');
                }, index * 100);
            });
        }, 100);
    }
    
})();

