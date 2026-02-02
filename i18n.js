/**
 * FUDAMBIENT - Sistema de Internacionalización (i18n)
 * Maneja la traducción del sitio web ES/EN
 */

const I18n = (function() {
    'use strict';

    // Configuración
    const CONFIG = {
        defaultLang: 'es',
        supportedLangs: ['es', 'en'],
        storageKey: 'fudambient_lang',
        localesPath: './locales/'
    };

    // Cache de traducciones
    let translations = {};
    let currentLang = CONFIG.defaultLang;
    let listenersBound = false;

    /**
     * Inicializa el sistema de traducción
     */
    async function init() {
        // Obtener idioma guardado o usar el predeterminado
        currentLang = getSavedLanguage() || CONFIG.defaultLang;
        
        // Cargar traducciones
        await loadTranslations(currentLang);
        
        // Aplicar traducciones al DOM
        applyTranslations();
        
        // Actualizar botón de idioma
        updateLangButton();
        
        // Configurar event listeners
        setupEventListeners();
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = currentLang;

        // Importante: avisar a módulos dinámicos (slider/timeline) cuando ya hay traducciones cargadas
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang, source: 'init' } }));
    }

    /**
     * Obtiene el idioma guardado en localStorage
     */
    function getSavedLanguage() {
        try {
            const saved = localStorage.getItem(CONFIG.storageKey);
            if (saved && CONFIG.supportedLangs.includes(saved)) {
                return saved;
            }
        } catch (e) {
            console.warn('localStorage no disponible:', e);
        }
        return null;
    }

    /**
     * Guarda el idioma seleccionado
     */
    function saveLanguage(lang) {
        try {
            localStorage.setItem(CONFIG.storageKey, lang);
        } catch (e) {
            console.warn('No se pudo guardar el idioma:', e);
        }
    }

    /**
     * Carga el archivo de traducciones
     */
    async function loadTranslations(lang) {
        const url = `${CONFIG.localesPath}${lang}.json`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            translations = await response.json();
        } catch (error) {
            console.error(`Error cargando traducciones para ${lang}:`, error);
            // Intentar cargar el idioma por defecto si falla
            if (lang !== CONFIG.defaultLang) {
                await loadTranslations(CONFIG.defaultLang);
            }
        }
    }

    /**
     * Obtiene una traducción por su clave
     * Soporta claves anidadas con notación de punto (ej: "header.nav.home")
     */
    function t(key) {
        const keys = key.split('.');
        let value = translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Traducción no encontrada: ${key}`);
                return key; // Retornar la clave si no se encuentra
            }
        }
        
        return value;
    }

    /**
     * Traduce todos los elementos del DOM con data-i18n
     */
    function applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');

        // Traducir contenido de texto
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = t(key);
            
            if (translation && translation !== key) {
                element.textContent = translation;
            }
        });

        // Traducir atributos placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = t(key);
            
            if (translation && translation !== key) {
                element.placeholder = translation;
            }
        });

        // Traducir atributos aria-label
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            const translation = t(key);
            
            if (translation && translation !== key) {
                element.setAttribute('aria-label', translation);
            }
        });

        // Traducir atributos title
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = t(key);
            
            if (translation && translation !== key) {
                element.title = translation;
            }
        });

        // Traducir atributos alt de imágenes
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            const translation = t(key);
            
            if (translation && translation !== key) {
                element.alt = translation;
            }
        });
    }

    /**
     * Actualiza el texto del botón de idioma
     */
    function updateLangButton() {
        const buttons = document.querySelectorAll('.lang-toggle');
        // El botón muestra el idioma AL QUE se puede cambiar
        const nextLang = currentLang === 'es' ? 'EN' : 'ES';
        
        buttons.forEach(btn => {
            btn.textContent = nextLang;
            btn.setAttribute('aria-label', currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español');
        });
    }

    /**
     * Cambia el idioma del sitio
     */
    async function setLanguage(lang) {
        if (!CONFIG.supportedLangs.includes(lang)) {
            console.error(`Idioma no soportado: ${lang}`);
            return;
        }

        if (lang === currentLang) return;

        currentLang = lang;
        saveLanguage(lang);
        await loadTranslations(lang);
        applyTranslations();
        updateLangButton();
        document.documentElement.lang = lang;

        // Disparar evento personalizado para componentes que necesiten reaccionar
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, source: 'toggle' } }));
    }

    /**
     * Alterna entre ES y EN
     */
    async function toggleLanguage() {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        await setLanguage(newLang);
    }

    /**
     * Configura los event listeners para los botones de idioma
     */
    function setupEventListeners() {
        if (listenersBound) return;
        listenersBound = true;

        const buttons = document.querySelectorAll('.lang-toggle');
        buttons.forEach(btn => {
            // Idempotente: no registrar 2 veces por botón
            if (btn.dataset.i18nBound === '1') return;
            btn.dataset.i18nBound = '1';

            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                await toggleLanguage();
            });
        });
    }

    /**
     * Obtiene el idioma actual
     */
    function getCurrentLanguage() {
        return currentLang;
    }

    // API pública
    return {
        init,
        t,
        setLanguage,
        toggleLanguage,
        getCurrentLanguage,
        applyTranslations
    };
})();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    I18n.init();
});

// Exportar para uso en otros scripts si es necesario
if (typeof window !== 'undefined') {
    window.I18n = I18n;
}
