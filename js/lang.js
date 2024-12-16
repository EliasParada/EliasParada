const languageButton = document.getElementById('language-button');
const languageMenu = document.getElementById('language-menu');
let currentLang = "es";

// Recuperar idioma guardado en localStorage
const savedLanguage = localStorage.getItem('selectedLanguage');
if (savedLanguage) {
    currentLang = savedLanguage;
}

document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('languageButton');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('#languageOptions button');

    highlightSelectedLanguage(currentLang);

    // Mostrar/ocultar el menú al hacer clic en el botón
    languageButton.addEventListener('click', () => {
        languageMenu.classList.toggle('hidden');
    });

    // Manejar selección de idioma
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            highlightSelectedLanguage(selectedLang);

            changeLanguage(selectedLang);
            languageMenu.classList.add('hidden');
        });
    });

    document.addEventListener('click', (e) => {
        if (!languageButton.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.add('hidden');
        }
    });

    // Función para resaltar idioma seleccionado
    function highlightSelectedLanguage(lang) {
        languageOptions.forEach(option => {
            const langValue = option.getAttribute('data-lang');
            if (langValue === lang) {
                option.classList.add('bg-red-100', 'font-bold', 'text-red-600');
            } else {
                option.classList.remove('bg-red-100', 'font-bold', 'text-red-600');
            }
        });
    }

    changeLanguage(currentLang);
});

function changeLanguage(language) {
    currentLang = language;
    const translatableElements = document.querySelectorAll('.traducible');

    translatableElements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const placeholder = el.getAttribute(`data-${language}-placeholder`);
            if (placeholder) {
                el.placeholder = placeholder;
            }
        } else {
            const text = el.getAttribute(`data-${language}`);
            if (text) {
                el.innerHTML = text;
            }
        }
    });

    const downloaderElements = document.querySelectorAll('.downloader');
    downloaderElements.forEach(el => {
        const downloadLink = el.getAttribute(`data-${language}-file`);
        if (downloadLink) {
            el.setAttribute('href', downloadLink);
        }
    });
}

function toggleLanguageMenu() {
    languageMenu.classList.toggle('hidden');
}

function hideLanguageMenu(event) {
    if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
        languageMenu.classList.add('hidden');
    }
}