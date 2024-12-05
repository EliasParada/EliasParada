const languageButton = document.getElementById('language-button');
const languageMenu = document.getElementById('language-menu');
let currentLang = "es";

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
}

function toggleLanguageMenu() {
    languageMenu.classList.toggle('hidden');
}

function hideLanguageMenu(event) {
    if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
        languageMenu.classList.add('hidden');
    }
}

// languageButton.onclick = toggleLanguageMenu;
// document.getElementById('select-es').onclick = () => changeLanguage('es');
// document.getElementById('select-en').onclick = () => changeLanguage('en');

// document.addEventListener('click', hideLanguageMenu);