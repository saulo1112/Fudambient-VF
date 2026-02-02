// Servicios Page JavaScript

// Services Data
const services = [
    {
        id: 1,
        i18nKey: 'education',
        title: 'Educación Ambiental',
        description: 'Desarrollamos e implementamos estrategias educativas para reducir la contaminación del recurso hídrico y promover el cuidado del agua para las generaciones futuras como enfoque fundamental, transversal y filosofico de todo nuestro oficio.',
        imageUrl: 'Assets/Servicios - Subpage/Ed ambiental.png',
    },
    {
        id: 2,
        i18nKey: 'hydraulicUrbanism',
        title: 'Infraestructura hidráulica y urbanismo',
        description: 'Construimos infraestructuras hidráulicas para la gestión eficiente del recurso hídrico, incluyendo acueductos, alcantarillado, estaciones de bombeo y sistemas de riego y drenaje, integradas a soluciones de urbanismo sostenible orientadas al ordenamiento y desarrollo adecuado del territorio.',
        imageUrl: 'Assets/Servicios - Subpage/Hidráulica.png',
    },
    {
        id: 3,
        i18nKey: 'designConstruction',
        title: 'Diseño y construcción de obras',
        description: 'Diseñamos y construimos obras civiles, ambientales y forestales que contribuyen al desarrollo sostenible de los territorios, incorporando herramientas de manejo del paisaje y sistemas de restauración ecológica orientados a promover entornos más saludables y resilientes para la vida.',
        imageUrl: 'Assets/Servicios - Subpage/Diseño y construcción.jpg',
    },
    {
        id: 4,
        i18nKey: 'urbanManagement',
        title: 'Gestión y mantenimiento urbano',
        description: 'Realizamos labores de siembra, mantenimiento y gestión del arbolado urbano para mantener nuestras ciudades verdes y vibrantes, promoviendo la conservación de la biodiversidad, la mejora del paisaje urbano y el bienestar de las comunidades.',
        imageUrl: 'Assets/Servicios - Subpage/Gestión y mantenimiento urbano.jpg',
    },
    {
        id: 5,
        i18nKey: 'basicSanitation',
        title: 'Saneamiento básico',
        description: 'Implementamos proyectos de saneamiento básico orientados a mejorar la calidad de vida de las comunidades, mediante la planificación y ejecución de infraestructuras hidráulicas, sistemas de acueducto, alcantarillado y drenaje, así como la estructuración de planes de saneamiento y manejo de vertimientos. Complementamos estas acciones con planes integrales de gestión de residuos sólidos, promoviendo un manejo adecuado de los recursos y contribuyendo a entornos más saludables, sostenibles y resilientes.',
        imageUrl: 'Assets/Servicios - Subpage/Saneamiento básico.png',
    },
    {
        id: 6,
        i18nKey: 'environmentalRestoration',
        title: 'Restauración ambiental y recuperación de áreas degradadas',
        description: 'Ejecutamos soluciones integrales de bioingeniería orientadas a la restauración ambiental y la recuperación de áreas degradadas, mediante la rehabilitación de ecosistemas afectados por procesos de erosión. Ejecutamos intervenciones geomorfológicas y acciones de descontaminación en ríos y cuerpos de agua, con el propósito de restablecer su equilibrio natural, mitigar la erosión marginal y proteger las orillas, contribuyendo a la conservación del paisaje, los bosques y los sistemas hídricos.',
        imageUrl: 'Assets/Servicios - Subpage/Recuperación.png',
    },
];

function getServiceText(service) {
    const hasI18nT = !!(window.I18n && typeof window.I18n.t === 'function');
    if (!hasI18nT || !service?.i18nKey) return { title: service.title, description: service.description };

    const titleKey = `services.timeline.items.${service.i18nKey}.title`;
    const descKey = `services.timeline.items.${service.i18nKey}.description`;
    const title = window.I18n.t(titleKey);
    const description = window.I18n.t(descKey);

    return {
        title: title && title !== titleKey ? title : service.title,
        description: description && description !== descKey ? description : service.description
    };
}

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

// Render Services Cards
function renderServices() {
    const container = document.getElementById('serviciosCards');
    if (!container) return;
    
    container.innerHTML = services.map((service, index) => {
        const isLeft = index % 2 === 0;
        const text = getServiceText(service);
        return `
            <div class="servicio-card servicio-card-animate ${isLeft ? 'servicio-card-left' : 'servicio-card-right'}">
                <div class="servicio-content ${isLeft ? 'servicio-content-left' : 'servicio-content-right'}">
                    <h3 class="servicio-title servicio-animate-text">${text.title}</h3>
                    <p class="servicio-description servicio-animate-text">${text.description}</p>
                </div>
                <div class="servicio-image servicio-animate-image">
                    <img src="${service.imageUrl}" alt="${text.title}" class="servicio-img">
                </div>
            </div>
        `;
    }).join('');
}

// Scroll-triggered animations for service cards
function initScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If reduced motion is enabled, show all elements immediately
    if (prefersReducedMotion) {
        const animateElements = document.querySelectorAll('.servicio-card-animate');
        animateElements.forEach(el => {
            el.classList.add('in-view');
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
                entry.target.classList.add('in-view');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all service cards
    const serviceCards = document.querySelectorAll('.servicio-card-animate');
    serviceCards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize page
function initServiciosPage() {
    renderServices();
    setActiveNavState();
    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
}

// Observe language changes (for timeline/cards)
window.addEventListener('languageChanged', (e) => {
    const newLang = e && e.detail ? e.detail.lang : undefined;

    // Re-render services with the new language (no duplication: container is replaced)
    renderServices();
    initScrollAnimations();
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiciosPage);
} else {
    initServiciosPage();
}

