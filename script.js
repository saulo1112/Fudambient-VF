// Force scroll to top on index.html when arriving from another page (no hash)
// This prevents browser scroll restoration from offsetting the initial view
(function() {
    // Only run on index.html (home page)
    const isIndexPage = window.location.pathname.endsWith('index.html') || 
                        window.location.pathname === '/' || 
                        window.location.pathname.endsWith('/');
    
    if (isIndexPage && !window.location.hash) {
        // Disable browser's automatic scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        // Force scroll to absolute top
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
})();

// Header scroll effect - toggle between initial header and glass nav pill
const headerInitial = document.getElementById('headerInitial');
const navPillGlass = document.getElementById('navPillGlass');
const heroSection = document.getElementById('inicio') || document.querySelector('.about-hero') || document.querySelector('.nosotros-hero') || document.querySelector('.servicios-hero');
let isScrolled = false;
let initialStateSet = false;

// Track observers and listeners for cleanup
let activeScrollObserver = null;
let activeScrollListener = null;
let activeSentinel = null;

// Create a sentinel element at the top of the hero section to detect scroll
function initHeaderScroll() {
    if (!headerInitial || !navPillGlass) return;
    
    // Cleanup previous observers/listeners/sentinels
    if (activeScrollObserver) {
        activeScrollObserver.disconnect();
        activeScrollObserver = null;
    }
    if (activeScrollListener) {
        window.removeEventListener('scroll', activeScrollListener);
        activeScrollListener = null;
    }
    if (activeSentinel && activeSentinel.parentNode) {
        activeSentinel.parentNode.removeChild(activeSentinel);
        activeSentinel = null;
    }
    
    // Reset state variables on new page load
    isScrolled = false;
    initialStateSet = false;
    
    // Add no-transition class initially to prevent jump on first render
    navPillGlass.classList.add('no-transition');
    
    // For pages without a hero section, use the first section or body
    const targetSection = heroSection || document.querySelector('section') || document.body;

    // Create a sentinel element at the absolute top of the document (0px from viewport top)
    // Using position: fixed ensures it's always at the top regardless of header height
    const sentinel = document.createElement('div');
    sentinel.style.position = 'fixed';
    sentinel.style.top = '0';
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    sentinel.style.pointerEvents = 'none';
    sentinel.style.visibility = 'hidden';
    sentinel.style.zIndex = '-1'; // Ensure it doesn't interfere with other elements
    
    // Insert sentinel at the beginning of body
    document.body.insertBefore(sentinel, document.body.firstChild);
    activeSentinel = sentinel;

    // Use IntersectionObserver to detect when sentinel leaves viewport
    // Sentinel is now at absolute top (0px), so rootMargin is just the trigger threshold
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px 0px 0px', // Trigger when sentinel is 100px from top
        threshold: 0
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScrollY = window.scrollY || window.pageYOffset;
            
            // Skip if initial state hasn't been set yet
            if (!initialStateSet) return;
            
            // CRITICAL FIX: If scrollY is 0 or very small, ignore observer and force top state
            // This prevents false positives from IntersectionObserver timing issues
            if (currentScrollY <= 10) {
                if (isScrolled) {
                    isScrolled = false;
                    headerInitial.classList.remove('hidden');
                    navPillGlass.classList.remove('visible');
                }
                return; // Don't process observer result when at top
            }
            
            // When sentinel is NOT intersecting (scrolled past), show glass pill
            if (!entry.isIntersecting && !isScrolled) {
                isScrolled = true;
                headerInitial.classList.add('hidden');
                navPillGlass.classList.add('visible');
            } 
            // When sentinel IS intersecting (at top), show initial header
            else if (entry.isIntersecting && isScrolled) {
                isScrolled = false;
                headerInitial.classList.remove('hidden');
                navPillGlass.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    activeScrollObserver = scrollObserver;

    // Start observing the sentinel (but it won't trigger until initialStateSet is true)
    scrollObserver.observe(sentinel);

    // Fallback scroll listener for immediate response
    let ticking = false;
    const scrollHandler = () => {
        // Skip if initial state hasn't been set yet
        if (!initialStateSet) return;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.pageYOffset || window.scrollY;
                
                // If scrolled more than 100px, show glass pill
                if (scrollY > 100 && !isScrolled) {
                    isScrolled = true;
                    headerInitial.classList.add('hidden');
                    navPillGlass.classList.add('visible');
                } 
                // If scrolled back to top (less than 60px), show initial header
                else if (scrollY < 60 && isScrolled) {
                    isScrolled = false;
                    headerInitial.classList.remove('hidden');
                    navPillGlass.classList.remove('visible');
                }
                
                ticking = false;
            });
            ticking = true;
        }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    activeScrollListener = scrollHandler;
    
    // Set initial state in multiple frames to ensure layout is ready
    // First frame: set state without transitions
    requestAnimationFrame(() => {
        checkInitialScrollState(true); // true = no transitions
    });
    
    // Second frame: enable transitions and force correct initial state
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            // Force correct state based on actual scroll position before enabling observer
            const currentScrollY = window.scrollY || window.pageYOffset;
            if (currentScrollY <= 100) {
                // At top: ensure pill is hidden
                isScrolled = false;
                headerInitial.classList.remove('hidden');
                navPillGlass.classList.remove('visible');
            } else {
                // Scrolled: ensure pill is visible
                isScrolled = true;
                headerInitial.classList.add('hidden');
                navPillGlass.classList.add('visible');
            }
            
            navPillGlass.classList.remove('no-transition');
            initialStateSet = true;
        });
    });
}

// Function to check initial scroll position and apply correct header state
function checkInitialScrollState(noTransitions = false) {
    if (!headerInitial || !navPillGlass) return;
    
    const scrollY = window.pageYOffset || window.scrollY;
    
    // If already scrolled more than 100px, show glass pill
    if (scrollY > 100) {
        isScrolled = true;
        headerInitial.classList.add('hidden');
        navPillGlass.classList.add('visible');
    } 
    // If at top (less than 60px), ensure initial header is shown
    else {
        isScrolled = false;
        headerInitial.classList.remove('hidden');
        navPillGlass.classList.remove('visible');
    }
    
    // If no transitions requested, ensure no-transition class is present
    if (noTransitions) {
        navPillGlass.classList.add('no-transition');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderScroll);
    // Also check on window load to catch hash anchor scrolls that happen after DOMContentLoaded
    window.addEventListener('load', () => {
        // Small delay to ensure browser has finished scrolling from hash anchors
        // Only update if initial state hasn't been set yet
        if (!initialStateSet) {
            setTimeout(() => {
                checkInitialScrollState(true);
                // Enable transitions after a brief delay
                requestAnimationFrame(() => {
                    if (navPillGlass) {
                        navPillGlass.classList.remove('no-transition');
                        initialStateSet = true;
                    }
                });
            }, 100);
        }
    });
} else {
    initHeaderScroll();
    // Check after a small delay to ensure browser has finished any initial scrolling
    // Only update if initial state hasn't been set yet
    if (!initialStateSet) {
        setTimeout(() => {
            checkInitialScrollState(true);
            // Enable transitions after a brief delay
            requestAnimationFrame(() => {
                if (navPillGlass) {
                    navPillGlass.classList.remove('no-transition');
                    initialStateSet = true;
                }
            });
        }, 100);
    }
}

// Project Slider - 4 slides carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderTrack = document.getElementById('sliderTrack');

// Text elements
const slideNumber = document.querySelector('.slide-value');
const slideTitle = document.querySelector('.slide-title');
const slideDescription = document.querySelector('.slide-description');

const totalSlides = slides.length;

function applySliderI18n(lang) {
    const hasI18n = !!(window.I18n && typeof window.I18n.t === 'function');

    if (!hasI18n) return;

    slides.forEach((slide) => {
        const id = slide.getAttribute('data-i18n-slide');
        if (!id) return;
        const titleKey = `home.projects.slides.${id}.title`;
        const descKey = `home.projects.slides.${id}.description`;

        const title = window.I18n.t(titleKey);
        const desc = window.I18n.t(descKey);

        // Only overwrite if translation exists (I18n.t returns key when missing)
        if (title && title !== titleKey) slide.setAttribute('data-title', title);
        if (desc && desc !== descKey) slide.setAttribute('data-description', desc);
    });

    // Refresh visible text for the current slide
    updateSlideText(currentSlide);
}

// Function to update text content with smooth transition
function updateSlideText(index) {
    const activeSlide = slides[index];
    if (!activeSlide) return;
    
    const counter = activeSlide.getAttribute('data-counter') || '';
    const title = activeSlide.getAttribute('data-title') || '';
    const description = activeSlide.getAttribute('data-description') || '';
    
    // Fade out
    if (slideNumber) {
        slideNumber.classList.add('fade-out');
        slideNumber.classList.remove('fade-in');
    }
    if (slideTitle) {
        slideTitle.classList.add('fade-out');
        slideTitle.classList.remove('fade-in');
    }
    if (slideDescription) {
        slideDescription.classList.add('fade-out');
        slideDescription.classList.remove('fade-in');
    }
    
    // Update content after fade out starts
    setTimeout(() => {
        if (slideNumber) slideNumber.textContent = counter;
        if (slideTitle) slideTitle.textContent = title;
        if (slideDescription) slideDescription.textContent = description;
        
        // Fade in
        if (slideNumber) {
            slideNumber.classList.remove('fade-out');
            slideNumber.classList.add('fade-in');
        }
        if (slideTitle) {
            slideTitle.classList.remove('fade-out');
            slideTitle.classList.add('fade-in');
        }
        if (slideDescription) {
            slideDescription.classList.remove('fade-out');
            slideDescription.classList.add('fade-in');
        }
    }, 200); // Half of transition duration
}

function showSlide(index) {
    // Ensure index is within bounds
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    
    // Update track position (25% per slide for 4 slides)
    if (sliderTrack) {
        sliderTrack.style.transform = `translateX(-${index * 25}%)`;
    }
    
    // Update slide active states
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Update dots
    dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
    
    // Update text content with smooth transition
    updateSlideText(index);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        showSlide(index);
    }
}

// Event listeners for slider buttons
if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
    });
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(index);
    });
});

// React to language changes (i18n)
window.addEventListener('languageChanged', (e) => {
    const lang = e && e.detail ? e.detail.lang : undefined;
    applySliderI18n(lang);
});

// Apply i18n once on load (after I18n.init has likely run)
try {
    applySliderI18n(window.I18n && typeof window.I18n.getCurrentLanguage === 'function' ? window.I18n.getCurrentLanguage() : undefined);
} catch (_) {}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const projectsSection = document.getElementById('proyectos');
    if (!projectsSection) return;
    
    // Check if projects section is in viewport
    const rect = projectsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
}
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact button functionality - buttons now link to contacto.html, no JS needed

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (entry.target.classList.contains('contact-card')) {
                entry.target.classList.add('reveal');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.achievement-card, .specialty-card, .territory-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize slider when DOM is ready
function initProjectSlider() {
    if (slides.length > 0 && sliderTrack) {
showSlide(0);
    }
}

// Project Slider Reveal Animation
function initSliderReveal() {
    const slider = document.querySelector('.project-slider[data-slider-reveal]');
    if (!slider) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // If reduced motion is enabled, show all elements immediately
        slider.classList.add('is-visible');
        return;
    }

    // IntersectionObserver configuration for slider
    const sliderObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    };

    const sliderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation to improve performance
                sliderObserver.unobserve(entry.target);
            }
        });
    }, sliderObserverOptions);

    // Observe the slider
    sliderObserver.observe(slider);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initProjectSlider();
        initSliderReveal();
    });
} else {
    initProjectSlider();
    initSliderReveal();
}

// Set active nav state based on current page
function setActiveNavState() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    
    navItems.forEach(item => {
        const page = item.getAttribute('data-page');
        if (page === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize active nav state
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setActiveNavState);
} else {
    setActiveNavState();
}

// Hero Video Background - Handle fallback for unsupported autoplay
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    const heroBackground = document.querySelector('.hero-background');
    
    if (!heroVideo || !heroBackground) return;
    
    // Check if video can play
    const checkVideoPlayback = () => {
        const video = heroVideo;
        
        // If video is playing, hide fallback
        if (!video.paused && !video.ended && video.readyState > 2) {
            heroBackground.classList.add('video-playing');
        } else {
            // Try to play the video
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Video is playing, hide fallback
                        heroBackground.classList.add('video-playing');
                    })
                    .catch(() => {
                        // Autoplay was prevented, show fallback
                        heroBackground.classList.remove('video-playing');
                    });
            } else {
                // Fallback for older browsers
                heroBackground.classList.remove('video-playing');
            }
        }
    };
    
    // Check when video metadata is loaded
    heroVideo.addEventListener('loadedmetadata', checkVideoPlayback);
    
    // Check when video starts playing
    heroVideo.addEventListener('playing', () => {
        heroBackground.classList.add('video-playing');
    });
    
    // Check when video is paused or fails
    heroVideo.addEventListener('pause', () => {
        heroBackground.classList.remove('video-playing');
    });
    
    // Check when video fails to load
    heroVideo.addEventListener('error', () => {
        heroBackground.classList.remove('video-playing');
    });
    
    // Initial check
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkVideoPlayback);
    } else {
        checkVideoPlayback();
    }
}

// Initialize hero video
initHeroVideo();

// Contact Form - Mailto functionality
(function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const submitBtn = contactForm.querySelector('.contact-submit-btn');
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Clear error states
    function clearErrors() {
        nameInput.classList.remove('has-error');
        emailInput.classList.remove('has-error');
        messageInput.classList.remove('has-error');
        if (nameError) nameError.textContent = '';
        if (emailError) emailError.textContent = '';
        if (messageError) messageError.textContent = '';
    }
    
    // Validate form fields
    function validateForm() {
        let isValid = true;
        clearErrors();
        
        // Validate name
        const name = nameInput.value.trim();
        if (!name) {
            isValid = false;
            nameInput.classList.add('has-error');
            if (nameError) nameError.textContent = 'El nombre es requerido';
        }
        
        // Validate email
        const email = emailInput.value.trim();
        if (!email) {
            isValid = false;
            emailInput.classList.add('has-error');
            if (emailError) emailError.textContent = 'El email es requerido';
        } else if (!emailRegex.test(email)) {
            isValid = false;
            emailInput.classList.add('has-error');
            if (emailError) emailError.textContent = 'Por favor ingresa un email válido';
        }
        
        // Validate message
        const message = messageInput.value.trim();
        if (!message) {
            isValid = false;
            messageInput.classList.add('has-error');
            if (messageError) messageError.textContent = 'El mensaje es requerido';
        }
        
        return isValid;
    }
    
    // Set button loading state
    function setButtonLoading(isLoading) {
        if (!submitBtn) return;
        
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Abriendo aplicación de correo...';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar';
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
        }
    }
    
    // Build and open mailto link
    function openMailto(name, email, message) {
        // Format email body with clear structure
        const emailBody = `Nombre: ${name}\n\nEmail: ${email}\n\n---\n\nMensaje:\n${message}`;
        
        // Encode all parameters
        const encodedSubject = encodeURIComponent(`New Project Inquiry – FUDAMBIENT`);
        const encodedBody = encodeURIComponent(emailBody);
        
        // Build mailto URL
        const mailtoUrl = `mailto:fudambient@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
        
        // Use window.open instead of window.location.href to prevent page freeze
        // Try window.open first, fallback to creating a temporary link
        try {
            const mailtoWindow = window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
            
            // If window.open fails (some browsers block it), fallback to link approach
            if (!mailtoWindow || mailtoWindow.closed || typeof mailtoWindow.closed === 'undefined') {
                // Fallback: create temporary link and click it
                const tempLink = document.createElement('a');
                tempLink.href = mailtoUrl;
                tempLink.style.display = 'none';
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
            }
        } catch (error) {
            // Final fallback: use location.href as last resort
            console.warn('Could not open mailto with window.open, using fallback:', error);
            window.location.href = mailtoUrl;
        }
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Set loading state
        setButtonLoading(true);
        
        // Open mailto link
        openMailto(name, email, message);
        
        // Reset button state after 3 seconds
        setTimeout(() => {
            setButtonLoading(false);
        }, 3000);
        
        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
            clearErrors();
        }, 1000);
    });
    
    // Real-time validation on blur
    nameInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            this.classList.remove('has-error');
            if (nameError) nameError.textContent = '';
        }
    });
    
    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && emailRegex.test(email)) {
            this.classList.remove('has-error');
            if (emailError) emailError.textContent = '';
        }
    });
    
    messageInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            this.classList.remove('has-error');
            if (messageError) messageError.textContent = '';
        }
    });
})();

// Soft Gradient Section Particles - Scoped to soft-gradient-section only
(function() {
    // Wait for DOM to be ready
    function initParticles() {
        const particlesContainer = document.getElementById('soft-particles-container');
        if (!particlesContainer) {
            // Retry if DOM not ready yet
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initParticles);
            }
            return;
        }
        
        const section = particlesContainer.closest('.soft-gradient-section');
        if (!section) return;
        
        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            // Still create particles but don't animate
            createStaticParticles(particlesContainer);
            return;
        }
        
        const particleCount = 50; // Increased count for better visibility on white
        const particles = [];
        let animationFrameId = null;
        let isVisible = false;
        
        // Check initial visibility immediately
        function checkInitialVisibility() {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            isVisible = rect.top < viewportHeight && rect.bottom > 0;
        }
        
        // Create particles - only circular dots, no blur
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'soft-particle';
            
            // Size: 2-5px range for visibility
            const size = Math.random() * 3 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Stronger FUDAMBIENT green (#4E8F1F or #3F7A12) with varied opacity
            const greenColors = ['#4E8F1F', '#3F7A12', '#5A9F2A'];
            const selectedColor = greenColors[Math.floor(Math.random() * greenColors.length)];
            const baseOpacity = Math.random() * 0.35 + 0.35; // 0.35-0.7 range for visibility
            particle.style.background = selectedColor;
            particle.style.opacity = `${baseOpacity}`;
            
            // Set initial position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            
            // Random animation delay for varied movement
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${Math.random() * 4 + 6}s`;
            
            particlesContainer.appendChild(particle);
            particles.push({
                element: particle,
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 0.02,
                vy: -Math.random() * 0.03 - 0.01,
                baseOpacity: baseOpacity
            });
        }
        
        // Create static particles for reduced motion
        function createStaticParticles(container) {
            const staticCount = 50;
            const greenColors = ['#4E8F1F', '#3F7A12', '#5A9F2A'];
            for (let i = 0; i < staticCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'soft-particle';
                const size = Math.random() * 3 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                const selectedColor = greenColors[Math.floor(Math.random() * greenColors.length)];
                const baseOpacity = Math.random() * 0.35 + 0.35;
                particle.style.background = selectedColor;
                particle.style.opacity = `${baseOpacity}`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                container.appendChild(particle);
            }
        }
        
        function animateParticles() {
            if (!isVisible) {
                animationFrameId = null;
                return;
            }
            
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < -5) particle.x = 105;
                if (particle.x > 105) particle.x = -5;
                if (particle.y < -5) particle.y = 105;
                if (particle.y > 105) {
                    particle.y = -5;
                    particle.x = Math.random() * 100;
                }
                
                // Apply position
                particle.element.style.left = `${particle.x}%`;
                particle.element.style.top = `${particle.y}%`;
                
                // Subtle opacity variation
                const opacityVariation = Math.sin(Date.now() * 0.0008 + particle.x * 8) * 0.08;
                const finalOpacity = Math.max(0.35, Math.min(0.7, particle.baseOpacity + opacityVariation));
                particle.element.style.opacity = finalOpacity;
            });
            
            animationFrameId = requestAnimationFrame(animateParticles);
        }
        
        // Use IntersectionObserver to only animate when section is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible && !animationFrameId) {
                    animateParticles();
                } else if (!isVisible && animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            });
        }, { threshold: 0.01, rootMargin: '50px' });
        
        observer.observe(section);
        
        // Initialize particles: only sharp circular dots
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
        
        // Check initial visibility and start animation if needed
        checkInitialVisibility();
        if (isVisible) {
            animateParticles();
        }
        
        // Handle resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                checkInitialVisibility();
                if (isVisible && !animationFrameId) {
                    animateParticles();
                }
            }, 250);
        });
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParticles);
    } else {
        initParticles();
    }
})();

// Earth-tone particles for "Pensado para el territorio" section
(function() {
    function initEarthParticles() {
        const particlesContainer = document.getElementById('earth-particles-container');
        if (!particlesContainer) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initEarthParticles);
            }
            return;
        }
        
        const section = particlesContainer.closest('.section-territory');
        if (!section) return;
        
        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Earth-tone colors
        const earthColors = ['#B08D57', '#9C7A52', '#8A6B45', '#C2A074', '#8E8B5A'];
        const particleCount = Math.floor(Math.random() * 31) + 30; // 30-60 range
        
        // Animation variations
        const animations = ['float-earth-particle-a', 'float-earth-particle-b', 'float-earth-particle-c'];
        
        // Create particles with distribution: denser at top, sparse at bottom
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.className = 'earth-particle';
            
            // Size: mostly 4-9px, ~10% large (10-14px)
            let size;
            if (i % 10 === 0) {
                size = Math.random() * 4 + 10; // 10-14px for large particles
            } else {
                size = Math.random() * 5 + 4; // 4-9px for most particles
            }
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random earth-tone color
            const colorIndex = Math.floor(Math.random() * earthColors.length);
            particle.classList.add(`color-${colorIndex + 1}`);
            particle.style.background = earthColors[colorIndex];
            
            // Opacity: 0.22-0.55, most around 0.35-0.45
            let opacity;
            const rand = Math.random();
            if (rand < 0.6) {
                opacity = Math.random() * 0.10 + 0.35; // 0.35-0.45 (most particles)
            } else {
                opacity = Math.random() * 0.33 + 0.22; // 0.22-0.55 (variety)
            }
            particle.style.opacity = opacity;
            
            // Some particles with slight blur (0px-0.9px)
            if (i % 4 === 0) {
                const blurAmount = Math.random() * 0.9;
                if (blurAmount > 0) {
                    particle.style.filter = `blur(${blurAmount}px)`;
                }
            }
            
            // Position: denser near top, avoid center area (safe zone for content)
            let top, left;
            const sectionHeight = section.offsetHeight || 600;
            const sectionWidth = section.offsetWidth || 1200;
            
            // Top 40% gets 60% of particles, bottom 60% gets 40%
            if (i < particleCount * 0.6) {
                top = Math.random() * 40; // Top 40% of section
            } else {
                top = Math.random() * 60 + 40; // Bottom 60% of section
            }
            
            // Avoid center horizontal area (20-80% safe zone for content)
            // Place more near borders and corners
            const leftRand = Math.random();
            if (leftRand < 0.3) {
                left = Math.random() * 15; // Left border (0-15%)
            } else if (leftRand < 0.6) {
                left = Math.random() * 15 + 85; // Right border (85-100%)
            } else if (leftRand < 0.75) {
                left = Math.random() * 5 + 15; // Left edge of safe zone (15-20%)
            } else {
                left = Math.random() * 5 + 80; // Right edge of safe zone (80-85%)
            }
            
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            
            // Animation: faster floating with variation
            if (!prefersReducedMotion) {
                const duration = Math.random() * 6 + 6; // 6-12s (faster)
                const delay = (Math.random() * 8) - 4; // -4 to 4s (negative delays allowed)
                const animationName = animations[Math.floor(Math.random() * animations.length)];
                particle.style.animation = `${animationName} ${duration}s ease-in-out infinite`;
                particle.style.animationDelay = `${delay}s`;
            }
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEarthParticles);
    } else {
        initEarthParticles();
    }
})();

