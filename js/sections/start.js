async function cargarHero(language) {
    try {
        // Cargar el JSON
        const response = await fetch('../../data/inicio.json'); // Reemplaza con la ruta correcta
        const data = await response.json();

        // Verificar si el idioma existe
        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }

        const content = data[language];

        // Seleccionar elementos del DOM
        const heroTitle = document.querySelector('.hero h1');
        heroTitle.className = 'text-4xl font-bold mb-4 traducible';

        const heroSubtitle = document.querySelector('.hero p');
        heroSubtitle.className = 'text-xl traducible';

        const heroButton = document.querySelector('.hero button');
        heroButton.className = 'inline-block bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-red-500 hover:to-red-800 transition-transform transform hover:scale-105 traducible';

        const heroSection = document.querySelector('.hero');

        // Actualizar contenido dinámicamente
        heroTitle.textContent = content.title || 'Título por defecto';
        heroTitle.setAttribute('data-en', data['en'].title || 'Default title');
        heroTitle.setAttribute('data-es', data['es'].title || 'Título por defecto');

        heroSubtitle.textContent = content.subtitle || 'Subtítulo por defecto';
        heroSubtitle.setAttribute('data-en', data['en'].subtitle || 'Default subtitle');
        heroSubtitle.setAttribute('data-es', data['es'].subtitle || 'Subtítulo por defecto');

        heroButton.textContent = content.boton || 'Botón por defecto';
        heroButton.setAttribute('data-en', data['en'].boton || 'Default button');
        heroButton.setAttribute('data-es', data['es'].boton || 'Botón por defecto');

        // Si hay imagen definida, actualizar el fondo
        if (content.imagen) {
            heroSection.style.backgroundImage = `url(${content.imagen})`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        } else {
            heroSection.style.backgroundImage = ''; // Limpia cualquier imagen previa
        }
    } catch (error) {
        console.error('Error al cargar el contenido del hero:', error);
    }
}