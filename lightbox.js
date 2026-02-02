/**
 * Global Lightbox Manager
 * Premium lightbox modal for all images in proyectos.html
 * Supports groups, thumbnails, keyboard navigation, and background-image cards
 */

(function() {
    'use strict';

    // Estado del lightbox
    let currentIndex = 0;
    let currentGroup = [];
    let isTransitioning = false;

    // Referencias a elementos del DOM
    const modal = document.getElementById('lightbox-modal');
    const modalImage = modal?.querySelector('.lightbox-image');
    const modalTitle = modal?.querySelector('.lightbox-title');
    const closeBtn = modal?.querySelector('.lightbox-close');
    const prevBtn = modal?.querySelector('.lightbox-nav--prev');
    const nextBtn = modal?.querySelector('.lightbox-nav--next');
    const thumbnailsTrack = modal?.querySelector('.lightbox-thumbnails-track');
    const overlay = modal?.querySelector('.lightbox-overlay');
    const container = modal?.querySelector('.lightbox-container');

    /**
     * Extrae información de una imagen (src, alt, caption) desde diferentes fuentes
     */
    function getImageData(element) {
        let src = '';
        let alt = '';
        let caption = '';

        // Si es un <img>
        if (element.tagName === 'IMG') {
            src = element.src || element.getAttribute('src') || '';
            alt = element.alt || '';
            caption = element.getAttribute('data-caption') || 
                     element.alt || 
                     element.getAttribute('title') || '';
        } 
        // Si es un contenedor con background-image o data-src
        else {
            // Buscar data-src primero
            src = element.getAttribute('data-src') || '';
            
            // Si no hay data-src, buscar imagen dentro
            if (!src) {
                const img = element.querySelector('img');
                if (img) {
                    src = img.src || img.getAttribute('src') || '';
                    alt = img.alt || '';
                }
            }

            // Buscar caption desde diferentes fuentes
            const label = element.querySelector('.ea-recursos-label, .sb-evidence-label, .experience-card-title, .project-card-title');
            caption = element.getAttribute('data-caption') || 
                     (label ? label.textContent.trim() : '') ||
                     element.getAttribute('title') ||
                     alt;
        }

        return { src, alt, caption };
    }

    /**
     * Construye el array de imágenes de un grupo
     */
    function buildGroupArray(groupName) {
        const elements = document.querySelectorAll(`[data-lightbox="true"][data-lightbox-group="${groupName}"]`);
        return Array.from(elements).map(el => {
            const data = getImageData(el);
            return {
                element: el,
                ...data
            };
        }).filter(item => item.src && item.src.trim() !== ''); // Filtrar elementos sin src válido
    }

    /**
     * Renderiza los thumbnails del grupo actual
     */
    function renderThumbnails() {
        if (!thumbnailsTrack) return;

        thumbnailsTrack.innerHTML = '';

        currentGroup.forEach((item, index) => {
            const thumb = document.createElement('button');
            thumb.className = 'lightbox-thumbnail';
            thumb.setAttribute('aria-label', `Ver imagen ${index + 1}`);
            thumb.setAttribute('data-index', index);
            
            if (index === currentIndex) {
                thumb.classList.add('is-active');
            }

            const thumbImg = document.createElement('img');
            thumbImg.src = item.src;
            thumbImg.alt = item.caption || item.alt || '';
            thumbImg.loading = 'lazy';
            thumb.appendChild(thumbImg);

            thumb.addEventListener('click', () => {
                if (!isTransitioning) {
                    showImage(index);
                }
            });

            thumbnailsTrack.appendChild(thumb);
        });
    }

    /**
     * Muestra una imagen específica en el lightbox
     */
    function showImage(index) {
        if (!modal || index < 0 || index >= currentGroup.length) return;

        isTransitioning = true;
        currentIndex = index;

        const item = currentGroup[index];

        // Actualizar imagen principal
        if (modalImage) {
            modalImage.style.opacity = '0';
            setTimeout(() => {
                if (modalImage) {
                    modalImage.src = item.src;
                    modalImage.alt = item.alt || item.caption || '';
                    setTimeout(() => {
                        if (modalImage) {
                            modalImage.style.opacity = '1';
                        }
                    }, 50);
                }
            }, 150);
        }

        // Título/caption deshabilitado - oculto para evitar solapamiento con thumbnails
        if (modalTitle) {
            modalTitle.style.display = 'none';
        }

        // Actualizar thumbnails
        renderThumbnails();

        // Actualizar estado de botones de navegación
        if (prevBtn) {
            prevBtn.style.display = currentGroup.length > 1 ? 'flex' : 'none';
        }
        if (nextBtn) {
            nextBtn.style.display = currentGroup.length > 1 ? 'flex' : 'none';
        }

        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }

    /**
     * Abre el lightbox con un grupo de imágenes
     */
    function openLightbox(groupName, index = 0) {
        if (!modal) return;

        // Construir grupo
        currentGroup = buildGroupArray(groupName);
        if (currentGroup.length === 0) return;

        // Asegurar que el índice esté dentro del rango
        currentIndex = Math.max(0, Math.min(index, currentGroup.length - 1));

        // Bloquear scroll del body
        document.body.classList.add('lightbox-open');
        document.body.style.overflow = 'hidden';

        // Mostrar modal
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');

        // Mostrar imagen
        showImage(currentIndex);
    }

    /**
     * Cierra el lightbox
     */
    function closeLightbox() {
        if (!modal) return;

        isTransitioning = true;

        // Ocultar modal
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');

        // Restaurar scroll del body
        document.body.classList.remove('lightbox-open');
        document.body.style.overflow = '';

        // Limpiar thumbnails
        if (thumbnailsTrack) {
            thumbnailsTrack.innerHTML = '';
        }

        setTimeout(() => {
            isTransitioning = false;
            currentGroup = [];
            currentIndex = 0;
        }, 300);
    }

    /**
     * Muestra la imagen siguiente
     */
    function showNext() {
        if (isTransitioning || currentGroup.length === 0) return;
        const nextIndex = (currentIndex + 1) % currentGroup.length;
        showImage(nextIndex);
    }

    /**
     * Muestra la imagen anterior
     */
    function showPrev() {
        if (isTransitioning || currentGroup.length === 0) return;
        const prevIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
        showImage(prevIndex);
    }

    /**
     * Maneja eventos de teclado
     */
    function handleKeyboard(e) {
        if (!modal || !modal.classList.contains('is-open')) return;

        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                showPrev();
                break;
            case 'ArrowRight':
                e.preventDefault();
                showNext();
                break;
            case 'Escape':
                e.preventDefault();
                closeLightbox();
                break;
        }
    }

    /**
     * Inicializa el lightbox
     */
    function initLightbox() {
        if (!modal) return;

        // Event delegation para todos los elementos con data-lightbox
        document.addEventListener('click', (e) => {
            // Buscar el elemento más cercano con data-lightbox
            let target = e.target.closest('[data-lightbox="true"]');
            
            // Si el click fue directamente en una imagen, buscar el contenedor padre con data-lightbox
            if (!target && e.target.tagName === 'IMG') {
                target = e.target.closest('[data-lightbox="true"]');
            }
            
            // Si aún no hay target, verificar si el elemento clickeado tiene data-lightbox
            if (!target && e.target.hasAttribute && e.target.hasAttribute('data-lightbox')) {
                target = e.target;
            }
            
            if (!target) return;

            e.preventDefault();
            e.stopPropagation();

            const groupName = target.getAttribute('data-lightbox-group') || 'default';
            const groupElements = document.querySelectorAll(`[data-lightbox="true"][data-lightbox-group="${groupName}"]`);
            const groupArray = Array.from(groupElements);
            const index = groupArray.indexOf(target);

            if (index >= 0) {
                openLightbox(groupName, index);
            }
        });

        // Event listeners para controles del modal
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeLightbox();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showPrev();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showNext();
            });
        }

        // Cerrar al hacer click en el overlay
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    closeLightbox();
                }
            });
        }

        // Prevenir cierre al hacer click en el contenedor
        if (container) {
            container.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Event listener para teclado
        document.addEventListener('keydown', handleKeyboard);
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
        initLightbox();
    }

})();

