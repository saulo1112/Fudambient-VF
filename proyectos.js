// Proyectos Page JavaScript

// Projects Data - From Excel "Excel-S-logros.xlsx"
const projects = [
    {
        id: 1,
        category: 'URBANISMO',
        title: 'Convenio N°025 de 2025',
        subtitle: 'Cali, Valle del Cauca',
        description: 'Fortalecimiento del espacio público urbano mediante la implementación de jardines y acciones de conectividad ecológica, orientadas a mejorar la calidad ambiental, conservar la biodiversidad y promover infraestructura verde en el Distrito de Santiago de Cali.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Jardines.jpeg',
        year: '2025',
        type: 'Urbanismo'
    },
    {
        id: 2,
        category: 'URBANISMO',
        title: 'Convenio CVC N° 094 de 2025',
        subtitle: 'Cali, Valle del Cauca',
        description: 'Implementación de acciones de mantenimiento y manejo del arbolado urbano en comunas y corredores viales priorizados, con el fin de mejorar las condiciones ambientales, la seguridad urbana y la funcionalidad del verde urbano en Santiago de Cali.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Arbolado.png',
        year: '2025',
        type: 'Urbanismo',
        tagOverride: 'Arbolado urbano'
    },
    {
        id: 3,
        category: 'SANEAMIENTO BÁSICO',
        title: 'Convenio de asociación N° 198 de 2022',
        subtitle: 'Comunidades rurales del Valle del Cauca',
        description: 'Implementación de estrategias de educación ambiental y alternativas de saneamiento básico en comunidades rurales, orientadas a la protección, descontaminación y uso sostenible del recurso hídrico, fortaleciendo la salud ambiental y comunitaria del territorio.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/SITAR.JPG',
        year: '2022',
        type: 'Saneamiento',
        tagOverride: 'Sistemas Individuales de Tratamiento de Aguas Residuales'
    },
    {
        id: 4,
        category: 'RESTAURACIÓN AMBIENTAL Y RECUPERACIÓN DE ÁREAS DEGRADADAS',
        title: 'Contrato CVC N° 693 2022',
        subtitle: 'Buenaventura, Valle del Cauca',
        description: 'Recuperación de pasivos ambientales generados por la minería ilegal mediante el llenado de fosas y la restauración geomorfológica del cauce del río Dagua, en los sectores Los Perea II y Los Valencia del municipio de Buenaventura, orientado a mejorar la estabilidad fluvial y la recuperación ecológica del territorio.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Fosas.jpeg',
        year: '2022',
        type: 'Infraestructura'
    },
    {
        id: 5,
        category: 'HERRAMIENTAS DE MANEJO DEL PAISAJE',
        title: 'Convenio CVC N° 017 de 2024',
        subtitle: 'Cuencas priorizadas del Valle del Cauca',
        description: 'Implementación de procesos de restauración ecológica mediante el sostenimiento de áreas restauradas en vigencias anteriores, en las cuencas hidrográficas de los ríos Catarina, Micos y RUT, abarcando los municipios de Ansermanuevo, La Victoria, Zarzal, Obando, La Unión, Roldanillo y Toro, bajo la jurisdicción de la CVC.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/HMP.png',
        year: '2022',
        type: 'Infraestructura'
    },
    {
        id: 6,
        category: 'RESTAURACIÓN AMBIENTAL Y RECUPERACIÓN DE ÁREAS DEGRADADAS',
        title: 'Contrato CVC N° 0731 de 2021',
        subtitle: 'Santiago de Cali',
        description: 'Acciones de recuperación geomorfológica y descolmatación en tramos priorizados de los ríos Cali, Aguacatal, Cañaveralejo, Lili, Meléndez y Pance, orientadas a mejorar la capacidad hidráulica, reducir el riesgo de inundación y fortalecer la gestión ambiental del sistema hídrico urbano de Santiago de Cali.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Ríos.JPG',
        year: '2021',
        type: 'Infraestructura',
        tagOverride: 'Recuperación geomorfológica'
    },
    {
        id: 7,
        category: 'RESTAURACIÓN AMBIENTAL Y RECUPERACIÓN DE ÁREAS DEGRADADAS',
        title: 'Contrato CVC N° 0740 de 2021',
        subtitle: 'Municipios priorizados del Valle del Cauca',
        description: 'Recuperación de áreas degradadas por procesos de erosión severa mediante obras civiles, bioingeniería y restauración ecológica, orientadas al control de movimientos en masa y la reducción del aporte de sedimentos en los municipios de Dagua, Restrepo, Bolívar y Roldanillo, en el Valle del Cauca.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Erosión (740).JPG',
        year: '2021',
        type: 'Infraestructura'
    },
    {
        id: 8,
        category: 'SANEAMIENTO BÁSICO',
        title: 'CONTRATO 192892 de 2019',
        subtitle: 'Pasto, Nariño',
        description: 'Construcción, suministro y puesta en marcha de plantas de tratamiento de agua potable y sistemas de desinfección en acueductos rurales y suburbanos del municipio de Pasto, mejorando el acceso a agua segura y fortaleciendo la infraestructura sanitaria del territorio.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/PTAP.jpg',
        year: '2019',
        type: 'Saneamiento',
        tagOverride: 'Infraestructura hidráulica',
        imagePosition: 'center top'
    },
    {
        id: 9,
        category: 'DISEÑO Y CONSULTORÍA',
        title: 'Contrato N° 2000.13.04.001-219',
        subtitle: 'Ginebra y Guacarí',
        description: 'Estudios y diseños para sistemas de captación, aducción, conducción, almacenamiento y tratamiento de agua potable en los municipios de Ginebra y Guacarí, fortaleciendo la planificación y optimización de la infraestructura de acueductos municipales.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Topografía.png',
        year: '2019',
        type: 'Infraestructura',
        tagOverride: 'Sistemas de abastecimiento',
        imagePosition: 'center top'
    },
    {
        id: 10,
        category: 'RESTAURACIÓN AMBIENTAL Y RECUPERACIÓN DE ÁREAS DEGRADADAS',
        title: 'Contrato CVC N°0588 de 2018',
        subtitle: 'Restrepo, Valle del Cauca',
        description: 'Recuperación de áreas degradadas por procesos de laterización mediante actividades biomecánicas y restauración ecológica, orientadas al control de movimientos en masa y la reducción del aporte de sedimentos en el corregimiento San Pablo, vereda Calimita, cuenca del río Dagua.',
        imageUrl: 'Assets/Proyectos - Subpage/Tarjetas/Bioingeniería.JPG',
        year: '2018',
        type: 'Infraestructura'
    }
];

// Set active nav state based on current page
function setActiveNavState() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
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

// Smooth scroll for anchor links
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('.anchor-nav-link, .projects-cta-button[href^=\"#\"], .urbanismo-scroll-link[href^=\"#\"], .ea-scroll-link[href^=\"#\"], .reco-scroll-link[href^=\"#\"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 120;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Restauración ecológica: subtle fade-up + light stagger (scoped)
function initRestauracionEcologicaReveal() {
    const items = document.querySelectorAll('.reco-reveal');
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const staggerEls = document.querySelectorAll('[data-reco-stagger]');
    staggerEls.forEach((el, idx) => {
        el.style.setProperty('--reco-delay', `${Math.min(idx * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
}

// Active anchor nav state with IntersectionObserver
function initAnchorNavObserver() {
    const sections = document.querySelectorAll('.projects-section');
    const navLinks = document.querySelectorAll('.anchor-nav-link');
    
    if (!sections.length || !navLinks.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    const linkSection = link.getAttribute('data-section');
                    if (linkSection === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Saneamiento básico: subtle fade-up reveals (scoped)
function initSaneamientoBasicoReveal() {
    const items = document.querySelectorAll('.sb-reveal');
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
}

// Educación ambiental: subtle fade-up + light stagger (scoped)
function initEducacionAmbientalReveal() {
    const items = document.querySelectorAll('.ea-reveal');
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    // Prepare staggered elements
    const staggerEls = document.querySelectorAll('[data-ea-stagger]');
    staggerEls.forEach((el, idx) => {
        el.style.setProperty('--ea-delay', `${Math.min(idx * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
}

// Helper to get translated text with fallback
function t(key, fallback) {
    if (typeof I18n !== 'undefined' && typeof I18n.t === 'function') {
        const translated = I18n.t(key);
        // If I18n.t returns the key itself, use fallback
        return (translated && translated !== key) ? translated : fallback;
    }
    return fallback;
}

// Render Projects in relevante section
function renderProjects() {
    const grid = document.getElementById('projectsListGrid');
    if (!grid) return;
    
    grid.innerHTML = projects.map(project => {
        // Get translated content using i18n key (e.g., projects.items.1.title)
        const i18nKey = `projects.items.${project.id}`;
        const category = t(`${i18nKey}.category`, project.category);
        const title = t(`${i18nKey}.title`, project.title);
        const subtitle = t(`${i18nKey}.subtitle`, project.subtitle);
        const description = t(`${i18nKey}.description`, project.description);
        const tag = t(`${i18nKey}.tag`, project.tagOverride ?? project.type);
        
        // Use imagePosition if available, otherwise default to 'center center'
        const imgPosition = project.imagePosition ?? 'center center';
        return `
        <div class="project-card">
            <div class="project-card-content">
                <div class="project-card-category">${category}</div>
                <h2 class="project-card-title">${title}</h2>
                <p class="project-card-subtitle">${subtitle}</p>
                <p class="project-card-description">${description}</p>
                <span class="project-card-tag">${tag}</span>
            </div>
            <div class="project-card-image" data-lightbox="true" data-lightbox-group="experiencia-relevante" data-src="${project.imageUrl}" data-caption="${title}">
                <div class="project-card-image-overlay"></div>
                <img src="${project.imageUrl}" alt="${title}" class="project-card-img" style="object-position: ${imgPosition};">
            </div>
        </div>
        `;
    }).join('');
}

// =========================================================
// Experiencia Completa - Nueva implementación premium
// =========================================================

let filteredExperience = [];
let currentCategory = 'Todos';
let currentSearch = '';

function getExperienceCategories(project) {
    if (Array.isArray(project?.categories)) return project.categories;
    return project?.category ? [project.category] : [];
}

function matchesCategory(project, category) {
    if (category === 'Todos') return true;
    return getExperienceCategories(project).includes(category);
}

// Category translation map for experience cards
function translateCategory(category) {
    const categoryMap = {
        'Educación ambiental': t('projects.sections.complete.categoryLabels.education', 'Educación ambiental'),
        'Urbanismo': t('projects.sections.complete.categoryLabels.urbanism', 'Urbanismo'),
        'Saneamiento básico': t('projects.sections.complete.categoryLabels.sanitation', 'Saneamiento básico'),
        'Restauración ecológica': t('projects.sections.complete.categoryLabels.restoration', 'Restauración ecológica'),
        'Urbanismo y espacio público': t('projects.sections.complete.categoryLabels.urbanPublic', 'Urbanismo y espacio público'),
        'Hidráulica': t('projects.sections.complete.categoryLabels.hydraulics', 'Hidráulica'),
        'Bioingeniería': t('projects.sections.complete.categoryLabels.bioengineering', 'Bioingeniería')
    };
    return categoryMap[category] || category;
}

// Render experience cards
function renderExperienceCards(projectsToRender) {
    const grid = document.getElementById('experienceCompletaGrid');
    const emptyState = document.getElementById('experienceEmptyState');
    
    if (!grid) return;
    
    if (projectsToRender.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    
    // Get translated labels
    const seeMoreLabel = t('projects.sections.complete.seeMore', 'Ver más');
    const categoriesAriaLabel = t('projects.sections.complete.categoriesAriaLabel', 'Categorías');
    
    grid.innerHTML = projectsToRender.map((project, index) => {
        // Create a safe key from project id (e.g., "Convenio 98" -> "convenio98")
        const safeKey = (project.id || `proj${index}`).toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Try to get translated content, fallback to original
        const id = project.id || '';
        const title = t(`projects.experience.${safeKey}.title`, project.title || '');
        const year = project.year ? project.year.toString() : '';
        const description = t(`projects.experience.${safeKey}.description`, project.description || '');
        const categories = getExperienceCategories(project);

        return `
            <div class="experience-card">
                <div class="experience-card-header">
                    <div class="experience-card-title">${title}</div>
                    <div class="experience-card-meta">
                        ${id ? `<span class="experience-card-id">${id}</span>` : ''}
                        ${year ? `<span class="experience-card-year">${year}</span>` : ''}
                    </div>
                </div>
                <div class="experience-card-body">
                    <p class="experience-card-description" id="desc-${index}">${description}</p>
                    <div class="experience-card-cta">
                        <button class="experience-card-toggle" data-index="${index}" aria-label="${seeMoreLabel}">
                            ${seeMoreLabel}
                        </button>
                    </div>
                    ${categories.length ? `
                        <div class="experience-card-tags" aria-label="${categoriesAriaLabel}">
                            ${categories.map(c => `<span class="experience-tag">${translateCategory(c)}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Attach expand/collapse handlers
    attachCardToggleHandlers();
}

// Filter and search projects
function filterExperience() {
    if (typeof experienceFull === 'undefined' || !Array.isArray(experienceFull)) {
        console.warn('experienceFull data not loaded');
        return;
    }
    
    let filtered = [...experienceFull];
    
    // Filter by category
    filtered = filtered.filter(p => matchesCategory(p, currentCategory));
    
    // Filter by search
    if (currentSearch.trim()) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(p => {
            const searchable = [
                p.id,
                p.title,
                p.description,
                p.location,
                p.year?.toString() || ''
            ].join(' ').toLowerCase();
            return searchable.includes(searchLower);
        });
    }
    
    filteredExperience = filtered;
    renderExperienceCards(filteredExperience);
}

// Attach toggle handlers to cards
function attachCardToggleHandlers() {
    const toggles = document.querySelectorAll('.experience-card-toggle');
    const seeMoreLabel = t('projects.sections.complete.seeMore', 'Ver más');
    const seeLessLabel = t('projects.sections.complete.seeLess', 'Ver menos');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const index = toggle.getAttribute('data-index');
            const desc = document.getElementById(`desc-${index}`);
            if (!desc) return;
            
            const isExpanded = desc.classList.contains('expanded');
            if (isExpanded) {
                desc.classList.remove('expanded');
                toggle.textContent = seeMoreLabel;
            } else {
                desc.classList.add('expanded');
                toggle.textContent = seeLessLabel;
            }
        });
    });
}

// Initialize experience completa section
function initExperienceCompleta() {
    const grid = document.getElementById('experienceCompletaGrid');
    if (!grid) return;
    
    // Check if experienceFull is available
    if (typeof experienceFull === 'undefined' || !Array.isArray(experienceFull)) {
        console.warn('experienceFull data not loaded, using empty array');
        filteredExperience = [];
        renderExperienceCards([]);
        return;
    }
    
    // Initialize with all projects
    filteredExperience = [...experienceFull];
    renderExperienceCards(filteredExperience);
    
    // Search input with debounce
    const searchInput = document.getElementById('experienceSearch');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentSearch = e.target.value;
                filterExperience();
            }, 200);
        });
    }
    
    // Filter chips
    const filterChips = document.querySelectorAll('.experience-filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update active state
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            // Update filter
            currentCategory = chip.getAttribute('data-category') || 'Todos';
            filterExperience();
        });
    });
}

// Legacy function (mantener por compatibilidad)
function renderCompletaList() {
    // Esta función ya no se usa, pero la mantenemos por compatibilidad
    // La nueva implementación usa initExperienceCompleta()
    initExperienceCompleta();
}

// Contextual Pill Navigation (Projects Mode)
function initContextualPill() {
    const navPill = document.getElementById('navPillGlass');
    if (!navPill) return;
    
    const scrollThreshold = 180; // Activate projects mode after 180px scroll
    const topThreshold = 80; // Return to global mode when < 80px from top
    let isProjectsMode = false;
    let ticking = false;
    
    // Scroll handler with throttle
    function handleScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                
                // Activate projects mode
                if (scrollY > scrollThreshold && !isProjectsMode) {
                    isProjectsMode = true;
                    navPill.classList.add('projects-mode');
                }
                // Return to global mode
                else if (scrollY <= topThreshold && isProjectsMode) {
                    isProjectsMode = false;
                    navPill.classList.remove('projects-mode');
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Scroll to top button handler
    const scrollTopBtn = navPill.querySelector('.pill-scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Initial check
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Enhanced scroll spy for projects navigation (robust, no initial active)
function initProjectsScrollSpy() {
    const navLinks = document.querySelectorAll('.pill-projects .projects-pill__link');
    const sections = document.querySelectorAll('.projects-section');
    
    if (navLinks.length === 0 || sections.length === 0) return;
    
    // FIX: Remove any initial active state
    navLinks.forEach(link => {
        link.classList.remove('is-active');
    });
    
    // Robust observer: only activate when section is really visible
    const observerOptions = {
        root: null,
        rootMargin: '-35% 0px -55% 0px', // Only activate when section is in middle-upper viewport
        threshold: [0, 0.25, 0.5, 0.75, 1]
    };
    
    let activeSectionId = null;
    
    const observer = new IntersectionObserver((entries) => {
        // Find the most visible section
        let mostVisible = null;
        let maxRatio = 0;
        
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                mostVisible = entry.target;
            }
        });
        
        // Only update if we have a clearly visible section
        if (mostVisible && maxRatio > 0.1) {
            const sectionId = mostVisible.id;
            
            // Only update if different from current
            if (sectionId !== activeSectionId) {
                activeSectionId = sectionId;
                
                navLinks.forEach(link => {
                    const linkSection = link.getAttribute('data-section');
                    if (linkSection === sectionId) {
                        link.classList.add('is-active');
                    } else {
                        link.classList.remove('is-active');
                    }
                });
            }
        } else if (maxRatio === 0 && activeSectionId) {
            // If no section is visible enough, clear active state
            activeSectionId = null;
            navLinks.forEach(link => {
                link.classList.remove('is-active');
            });
        }
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enhanced smooth scroll for projects navigation
function initProjectsSmoothScroll() {
    const navLinks = document.querySelectorAll('.pill-projects .projects-pill__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Calculate offset: pill height (60px) + spacing (16px) + visual offset (20px)
                    const headerOffset = 120;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Initialize page
function initProyectosPage() {
    renderProjects();
    initExperienceCompleta(); // Nueva implementación
    setActiveNavState();
    initSmoothScroll();
    initAnchorNavObserver();
    initSaneamientoBasicoReveal();
    initEducacionAmbientalReveal();
    initRestauracionEcologicaReveal();
    initContextualPill();
    initProjectsScrollSpy();
    initProjectsSmoothScroll();
}

// Listen for language changes and re-render dynamic content
window.addEventListener('languageChanged', (e) => {
    // Re-render dynamic content with new language
    renderProjects();
    filterExperience(); // Re-renders experience cards
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProyectosPage);
} else {
    initProyectosPage();
}

// ============================================
// Lightbox Modal para Instrumentos y evidencias
// ============================================

// Array de imágenes en el orden exacto especificado
const eaLightboxImages = [
    {
        src: 'Assets/Proyectos - Subpage/Educación Ambiental/Recursos/Evaluación de la jornada.jpg',
        title: 'Evaluación de la jornada'
    },
    {
        src: 'Assets/Proyectos - Subpage/Educación Ambiental/Recursos/Conecta el SITAR.jpg',
        title: 'Conecta el SITAR'
    },
    {
        src: 'Assets/Proyectos - Subpage/Educación Ambiental/Recursos/Mandalas.jpg',
        title: 'Mandalas'
    },
    {
        src: 'Assets/Proyectos - Subpage/Educación Ambiental/Recursos/Guía de observación.jpg',
        title: 'Guía de observación'
    },
    {
        src: 'Assets/Proyectos - Subpage/Educación Ambiental/Recursos/Árbol de los recuerdos.jpg',
        title: 'Árbol de los recuerdos'
    }
];

// Estado del lightbox
let eaCurrentIndex = 0;
let eaIsTransitioning = false;

// Referencias a elementos del DOM
const eaModal = document.getElementById('ea-lightbox-modal');
const eaModalImage = eaModal?.querySelector('.ea-lightbox-image');
const eaModalTitle = eaModal?.querySelector('.ea-lightbox-title');
const eaCloseBtn = eaModal?.querySelector('.ea-lightbox-close');
const eaPrevBtn = eaModal?.querySelector('.ea-lightbox-nav--prev');
const eaNextBtn = eaModal?.querySelector('.ea-lightbox-nav--next');

/**
 * Abre el modal y muestra la imagen en el índice especificado
 */
function openEaLightbox(index) {
    if (!eaModal || index < 0 || index >= eaLightboxImages.length) return;
    
    eaCurrentIndex = index;
    eaIsTransitioning = true;
    
    // Bloquear scroll del body
    document.body.classList.add('ea-lightbox-open');
    
    // Cargar imagen y título
    if (eaModalImage) {
        eaModalImage.src = eaLightboxImages[index].src;
        eaModalImage.alt = eaLightboxImages[index].title;
    }
    if (eaModalTitle) {
        eaModalTitle.textContent = eaLightboxImages[index].title;
    }
    
    // Mostrar modal
    eaModal.classList.add('is-open');
    eaModal.setAttribute('aria-hidden', 'false');
    
    // Permitir transiciones después de un breve delay
    setTimeout(() => {
        eaIsTransitioning = false;
    }, 300);
}

/**
 * Cierra el modal
 */
function closeEaLightbox() {
    if (!eaModal) return;
    
    eaIsTransitioning = true;
    
    // Ocultar modal
    eaModal.classList.remove('is-open');
    eaModal.setAttribute('aria-hidden', 'true');
    
    // Restaurar scroll del body
    document.body.classList.remove('ea-lightbox-open');
    
    // Resetear después de la transición
    setTimeout(() => {
        eaIsTransitioning = false;
    }, 300);
}

/**
 * Muestra la imagen siguiente (con loop infinito)
 */
function showEaNext() {
    if (eaIsTransitioning) return;
    
    eaCurrentIndex = (eaCurrentIndex + 1) % eaLightboxImages.length;
    
    // Fade out
    if (eaModalImage) {
        eaModalImage.style.opacity = '0';
    }
    
    setTimeout(() => {
        if (eaModalImage) {
            eaModalImage.src = eaLightboxImages[eaCurrentIndex].src;
            eaModalImage.alt = eaLightboxImages[eaCurrentIndex].title;
        }
        if (eaModalTitle) {
            eaModalTitle.textContent = eaLightboxImages[eaCurrentIndex].title;
        }
        
        // Fade in
        setTimeout(() => {
            if (eaModalImage) {
                eaModalImage.style.opacity = '1';
            }
        }, 50);
    }, 150);
}

/**
 * Muestra la imagen anterior (con loop infinito)
 */
function showEaPrev() {
    if (eaIsTransitioning) return;
    
    eaCurrentIndex = (eaCurrentIndex - 1 + eaLightboxImages.length) % eaLightboxImages.length;
    
    // Fade out
    if (eaModalImage) {
        eaModalImage.style.opacity = '0';
    }
    
    setTimeout(() => {
        if (eaModalImage) {
            eaModalImage.src = eaLightboxImages[eaCurrentIndex].src;
            eaModalImage.alt = eaLightboxImages[eaCurrentIndex].title;
        }
        if (eaModalTitle) {
            eaModalTitle.textContent = eaLightboxImages[eaCurrentIndex].title;
        }
        
        // Fade in
        setTimeout(() => {
            if (eaModalImage) {
                eaModalImage.style.opacity = '1';
            }
        }, 50);
    }, 150);
}

/**
 * Maneja eventos de teclado (← → ESC)
 */
function handleEaKeyboard(e) {
    if (!eaModal || !eaModal.classList.contains('is-open')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            showEaPrev();
            break;
        case 'ArrowRight':
            e.preventDefault();
            showEaNext();
            break;
        case 'Escape':
            e.preventDefault();
            closeEaLightbox();
            break;
    }
}

/**
 * Inicializa el lightbox cuando el DOM está listo
 */
function initEaLightbox() {
    if (!eaModal) return;
    
    // Agregar event listeners a las tarjetas del grid
    const cards = document.querySelectorAll('.ea-recursos-card[data-lightbox-index]');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Evitar que el click en el label bloquee
            const index = parseInt(card.getAttribute('data-lightbox-index'), 10);
            if (!isNaN(index)) {
                openEaLightbox(index);
            }
        });
    });
    
    // Event listeners para controles del modal
    if (eaCloseBtn) {
        eaCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeEaLightbox();
        });
    }
    
    if (eaPrevBtn) {
        eaPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showEaPrev();
        });
    }
    
    if (eaNextBtn) {
        eaNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showEaNext();
        });
    }
    
    // Cerrar al hacer click en el overlay
    const overlay = eaModal.querySelector('.ea-lightbox-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeEaLightbox();
            }
        });
    }
    
    // Prevenir cierre al hacer click en el contenedor de la imagen
    const container = eaModal.querySelector('.ea-lightbox-container');
    if (container) {
        container.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    // Event listener para teclado
    document.addEventListener('keydown', handleEaKeyboard);
}

// Inicializar lightbox cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEaLightbox);
} else {
    initEaLightbox();
}

