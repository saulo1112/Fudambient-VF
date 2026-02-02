// Logros Page JavaScript

// Helper function to get translations with fallback
function t(key, fallback) {
    if (typeof I18n !== 'undefined' && typeof I18n.t === 'function') {
        const translated = I18n.t(key);
        return (translated && translated !== key) ? translated : fallback;
    }
    return fallback;
}

// Projects Data - Only first 4 projects
const projects = [
    {
        id: 1,
        title: 'Sistema de Acueducto Comunitario La Esperanza',
        category: 'agua',
        location: 'Municipio de Caldas, Antioquia',
        year: '2023',
        impact: '450 familias beneficiadas',
        description: 'Diseño y construcción de sistema de acueducto con participación comunitaria, incluyendo planta de tratamiento y red de distribución.',
        color: 'cyan',
    },
    {
        id: 2,
        title: 'Recuperación de Microcuenca Río Verde',
        category: 'ambiental',
        location: 'Municipio de Envigado',
        year: '2022',
        impact: '12 hectáreas restauradas',
        description: 'Proyecto de restauración ecológica con siembra de 5.000 árboles nativos y control de erosión en zonas críticas.',
        color: 'emerald',
    },
    {
        id: 3,
        title: 'Centro de Acopio y Reciclaje Comunitario',
        category: 'ambiental',
        location: 'Municipio de Itagüí',
        year: '2023',
        impact: '3 toneladas/mes recicladas',
        description: 'Infraestructura para manejo de residuos sólidos con capacitación a líderes comunitarios en economía circular.',
        color: 'lime',
    },
    {
        id: 4,
        title: 'Mejoramiento de Vía Rural El Tablón',
        category: 'infraestructura',
        location: 'Municipio de La Ceja',
        year: '2021',
        impact: '8 veredas conectadas',
        description: 'Pavimentación y obras de estabilización de 4.5 km de vía terciaria con participación de la comunidad en gestión.',
        color: 'teal',
    },
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        quote: 'Con el sistema de saneamiento y las capacitaciones por parte del equipo de FUDAMBIENT, aprendimos a operarlo y a hacerle mantenimiento. Ahora hay menos olores, menos enfermedades y la comunidad se organiza para sostenerlo en el tiempo. Además, este proceso nos dio tranquilidad y confianza al saber que contamos con una solución adecuada para nuestra vereda.',
        author: 'Cristopher Serna',
        role: 'Usuario del SITAR',
        community: 'Vereda El Guayabo, Cartago',
        color: 'emerald',
    },
    {
        id: 2,
        quote: 'Antes este espacio se sentía descuidado y uno pasaba rápido. Con los jardines, ahora da gusto caminar; el ambiente es más fresco, seguro y agradable. Se nota que fue pensado para las personas, invitando a quedarse y disfrutar. Como peatones, sentimos que el espacio público mejoró y que el entorno aporta bienestar al barrio.',
        author: 'Natalia Rodríguez',
        role: 'Habitante del sector',
        community: 'Santiago de Cali',
        color: 'cyan',
    },
    {
        id: 3,
        quote: 'Durante la recuperación de la quebrada entendimos que restaurar no es solo hacer obras, sino cuidar el territorio en conjunto. FUDAMBIENT nos acompañó paso a paso, escuchando a la comunidad y enseñándonos cómo proteger este espacio. Hoy sabemos prevenir riesgos y valorar la quebrada como parte de nuestra vida.',
        author: 'Marleny Collazos',
        role: 'Lideresa de la Junta de Acción Comunal',
        community: 'Quebrada El Cogollo, Barrio Esneda, Dagua',
        color: 'teal',
    },
];

// Timeline Icon SVGs
const timelineIcons = {
    users: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    search: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    target: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    wrench: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    sprout: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12l-2-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 12l2-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12l-1 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 12l1 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
};

// Timeline Steps Data
const timelineSteps = [
    {
        id: 1,
        icon: timelineIcons.users,
        title: 'Diálogo comunitario',
        description: 'Nos reunimos con la comunidad para entender sus necesidades, prioridades y saberes locales. El territorio habla, nosotros escuchamos.',
        color: 'emerald',
        details: ['Asambleas participativas', 'Cartografía social', 'Identificación de líderes'],
    },
    {
        id: 2,
        icon: timelineIcons.search,
        title: 'Diagnóstico técnico',
        description: 'Realizamos estudios de suelos, agua, topografía e impacto ambiental con rigor profesional y enfoque territorial.',
        color: 'cyan',
        details: ['Estudios ambientales', 'Análisis de viabilidad', 'Evaluación de riesgos'],
    },
    {
        id: 3,
        icon: timelineIcons.target,
        title: 'Diseño participativo',
        description: 'Co-creamos soluciones que integran ingeniería, conocimiento local y sostenibilidad ambiental.',
        color: 'teal',
        details: ['Talleres de diseño', 'Planos técnicos', 'Presupuesto comunitario'],
    },
    {
        id: 4,
        icon: timelineIcons.wrench,
        title: 'Construcción y acompañamiento',
        description: 'Ejecutamos con mano de obra local cuando es posible, generando empleo y apropiación del proyecto.',
        color: 'lime',
        details: ['Obra con comunidad', 'Capacitación técnica', 'Control de calidad'],
    },
    {
        id: 5,
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6665 33.3335H28.3332" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.6665 33.3332C25.8332 29.1665 17.9998 22.6665 21.6665 16.6665" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.8332 15.667C17.6665 17.0003 18.8332 19.3337 19.6665 21.8337C16.3332 22.5003 13.8332 22.5003 11.6665 21.3337C9.6665 20.3337 7.83317 18.167 6.6665 14.3337C11.3332 13.5003 13.9998 14.3337 15.8332 15.667Z" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.5001 9.99984C22.2294 11.9858 21.5903 14.3101 21.6668 16.6665C24.8335 16.4998 27.1668 15.6665 28.8335 14.3332C30.5001 12.6665 31.5001 10.4998 31.6668 6.6665C27.1668 6.83317 25.0001 8.33317 23.5001 9.99984Z" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: 'Seguimiento y sostenibilidad',
        description: 'Acompañamos el mantenimiento, fortalecemos capacidades locales y medimos el impacto a largo plazo.',
        color: 'emerald',
        details: ['Capacitación en mantenimiento', 'Monitoreo de impacto', 'Fortalecimiento organizativo'],
    },
];

// Strategic Partners Data
const strategicPartners = [
    {
        name: 'CVC',
        fullName: 'Corporación Autónoma Regional del Valle del Cauca',
        logo: 'Assets/Logros - subpage/CVC Logo.png',
        description: 'Autoridad ambiental regional con la que trabajamos en proyectos de gestión y conservación del recurso hídrico.',
    },
    {
        name: 'DAGMA',
        fullName: 'Departamento Administrativo de Gestión del Medio Ambiente',
        logo: 'Assets/Logros - subpage/Dagma Logo.png',
        description: 'Entidad municipal que articula nuestras iniciativas de sostenibilidad y gestión ambiental en el territorio.',
    },
];

// Local Actors Data
const localActors = [
    'Juntas de Acción Comunal',
    'Instituciones educativas',
    'Líderes comunitarios',
    'Organizaciones locales',
];

// Category labels (kept for backward compatibility, not used for filtering)
const categoryLabels = {
    todos: 'Todos',
    agua: 'Agua y Saneamiento',
    ambiental: 'Gestión Ambiental',
    infraestructura: 'Infraestructura',
    comunidad: 'Desarrollo Comunitario',
};

// Color mapping
// Unified timeline colors (2 colors only)
const timelineBrandGreen = {
    text: 'var(--timeline-green)',
    bg: 'rgba(0, 153, 102, 0.1)',
};

// Keep colorClasses for other sections (projects, testimonials)
const colorClasses = {
    cyan: {
        text: 'var(--green-light)',
        bg: 'rgba(0, 188, 125, 0.1)',
    },
    emerald: {
        text: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
    },
    lime: {
        text: '#84cc16',
        bg: 'rgba(132, 204, 22, 0.1)',
    },
    teal: {
        text: '#14b8a6',
        bg: 'rgba(20, 184, 166, 0.1)',
    },
};

// Initialize page
function initLogrosPage() {
    renderProjects();
    renderTestimonials();
    renderTimeline();
    renderStrategicPartners();
    renderLocalActors();
    setActiveNavState();
}

// Render Projects - Show only first 4 projects
function renderProjects() {
    const grid = document.getElementById('proyectosGrid');
    if (!grid) return;
    
    // Show only first 4 projects
    const projectsToShow = projects.slice(0, 4);
    
    grid.innerHTML = projectsToShow.map(project => {
        const colors = colorClasses[project.color] || colorClasses.emerald;
        return `
            <div class="logros-proyecto-card">
                <div class="logros-proyecto-image">
                    <div class="logros-proyecto-year">${project.year}</div>
                </div>
                <div class="logros-proyecto-content">
                    <div class="logros-proyecto-category" style="color: ${colors.text};">
                        ${categoryLabels[project.category]}
                    </div>
                    <h3 class="logros-proyecto-title">${project.title}</h3>
                    <p class="logros-proyecto-description">${project.description}</p>
                    <div class="logros-proyecto-meta">
                        <div class="logros-proyecto-location">
                            <span>📍</span>
                            <span>${project.location}</span>
                        </div>
                        <div class="logros-proyecto-impact" style="color: ${colors.text};">
                            <span>✓</span>
                            <span>${project.impact}</span>
                        </div>
                    </div>
                    <button class="logros-proyecto-cta" style="border-color: ${colors.text}; color: ${colors.text};">
                        Ver detalles →
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Render Testimonials
function renderTestimonials() {
    const grid = document.querySelector('.logros-testimonios-grid');
    if (!grid) return;
    
    grid.innerHTML = testimonials.map((testimonial, index) => {
        const colors = colorClasses[testimonial.color] || colorClasses.emerald;
        const i18nKey = `achievements.testimonials.items.${index + 1}`;
        
        const quote = t(`${i18nKey}.quote`, testimonial.quote);
        const author = t(`${i18nKey}.author`, testimonial.author);
        const role = t(`${i18nKey}.role`, testimonial.role);
        const community = t(`${i18nKey}.community`, testimonial.community);
        
        const initials = author.split(' ').map(n => n[0]).join('');
        return `
            <div class="logros-testimonio-card">
                <blockquote class="logros-testimonio-quote">"${quote}"</blockquote>
                <div class="logros-testimonio-author">
                    <div class="logros-testimonio-avatar" style="background: ${colors.text};">
                        ${initials}
                    </div>
                    <div class="logros-testimonio-info">
                        <div class="logros-testimonio-name">${author}</div>
                        <div class="logros-testimonio-role">${role}</div>
                        <div class="logros-testimonio-community" style="color: ${colors.text};">
                            <span>📍</span>
                            <span>${community}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Render Timeline
function renderTimeline() {
    const container = document.querySelector('.logros-timeline-steps');
    if (!container) return;
    
    container.innerHTML = timelineSteps.map((step, index) => {
        // Use unified brand green for all timeline elements
        const colors = timelineBrandGreen;
        const i18nKey = `achievements.methodology.steps.${index + 1}`;
        
        const title = t(`${i18nKey}.title`, step.title);
        const description = t(`${i18nKey}.description`, step.description);
        
        // Get translated details
        const translatedDetails = step.details.map((detail, detailIndex) => {
            return t(`${i18nKey}.details.${detailIndex + 1}`, detail);
        });
        
        return `
            <div class="logros-timeline-step">
                <div class="logros-timeline-content">
                    <div class="logros-timeline-card">
                        <div class="logros-timeline-number" style="background: ${colors.bg}; color: ${colors.text};">
                            ${step.id}
                        </div>
                        <h3 class="logros-timeline-step-title">${title}</h3>
                        <p class="logros-timeline-step-description">${description}</p>
                        <ul class="logros-timeline-details">
                            ${translatedDetails.map(detail => `
                                <li class="logros-timeline-detail">
                                    <span>${detail}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="logros-timeline-accent" style="background: ${colors.text};"></div>
                    </div>
                </div>
                <div class="logros-timeline-icon" style="background: ${colors.text};">
                    ${typeof step.icon === 'string' && !step.icon.includes('<svg') 
                        ? `<span class="logros-timeline-emoji">${step.icon}</span>` 
                        : step.icon}
                </div>
            </div>
        `;
    }).join('');
}

// Render Strategic Partners
function renderStrategicPartners() {
    const grid = document.getElementById('aliadosEstrategicosGrid');
    if (!grid) return;
    
    grid.innerHTML = strategicPartners.map((partner, index) => {
        const i18nKey = `achievements.allies.strategic.partners.${index + 1}`;
        const fullName = t(`${i18nKey}.fullName`, partner.fullName);
        const description = t(`${i18nKey}.description`, partner.description);
        
        return `
            <div class="logros-aliado-estrategico-card">
                <div class="logros-aliado-estrategico-logo">
                    <img src="${partner.logo}" alt="${partner.name}" class="logros-aliado-estrategico-logo-img">
                </div>
                <div class="logros-aliado-estrategico-content">
                    <h4 class="logros-aliado-estrategico-name">${partner.name}</h4>
                    <p class="logros-aliado-estrategico-fullname">${fullName}</p>
                    <p class="logros-aliado-estrategico-description">${description}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Render Local Actors
function renderLocalActors() {
    const list = document.getElementById('actoresLocalesList');
    if (!list) return;
    
    list.innerHTML = localActors.map((actor, index) => {
        const translatedActor = t(`achievements.allies.local.actors.${index + 1}`, actor);
        return `<li class="logros-aliado-local-item">${translatedActor}</li>`;
    }).join('');
}

// Filter functionality removed - no longer needed

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

// Initialize when DOM is ready
function initLogrosPage() {
    renderProjects();
    renderTestimonials();
    renderTimeline();
    renderStrategicPartners();
    renderLocalActors();
    setActiveNavState();
    
    // Re-initialize stagger animations for dynamically loaded content
    if (window.reinitLogrosStagger) {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            window.reinitLogrosStagger();
        }, 50);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogrosPage);
} else {
    initLogrosPage();
}

// Listen for language changes and re-render dynamic content
window.addEventListener('languageChanged', (e) => {
    // Re-render all dynamic content with new language
    renderTestimonials();
    renderTimeline();
    renderStrategicPartners();
    renderLocalActors();
    
    // Re-initialize stagger animations for dynamically loaded content
    if (window.reinitLogrosStagger) {
        setTimeout(() => {
            window.reinitLogrosStagger();
        }, 50);
    }
});

