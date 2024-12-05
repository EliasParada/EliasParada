async function cargarAboutMe(language) {
    try {
        const response = await fetch('../../data/sobremi.json'); // Cambia a la ruta correcta
        const data = await response.json();

        // Verificar si el idioma existe
        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }

        const content = data[language];

        // Seleccionar la sección
        const aboutMeSection = document.getElementById('about-me');

        // Limpiar contenido previo
        aboutMeSection.innerHTML = '';

        // Crear el contenedor principal
        const container = document.createElement('div');
        container.className = 'flex flex-col lg:flex-row items-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-lg p-8';

        // Imagen de perfil
        const imageContainer = document.createElement('div');
        imageContainer.className = 'w-full lg:w-1/3 mb-6 lg:mb-0';
        const profileImage = document.createElement('img');
        profileImage.src = content.profile_image;
        profileImage.alt = 'Profile Image';
        profileImage.className = 'rounded-full shadow-lg w-48 h-48 mx-auto';
        imageContainer.appendChild(profileImage);

        // Contenido textual
        const textContainer = document.createElement('div');
        textContainer.className = 'w-full lg:w-2/3 text-center lg:text-left';

        const title = document.createElement('h2');
        title.textContent = content.title;
        title.className = 'text-3xl font-bold mb-4 traducible';
        title.setAttribute('data-en', data['en'].title || 'About Me');
        title.setAttribute('data-es', data['es'].title || 'Sobre Mí');

        const description = document.createElement('p');
        description.textContent = content.description;
        description.className = 'mb-6 text-lg leading-relaxed traducible';
        description.setAttribute('data-en', data['en'].description || 'Default description');
        description.setAttribute('data-es', data['es'].description || 'Descripción por defecto');

        const downloadButton = document.createElement('a');
        downloadButton.href = content.download.rute;
        downloadButton.textContent = content.download.title;
        downloadButton.target = '_blank';
        downloadButton.rel = 'noopener noreferrer';
        downloadButton.className =
            'inline-block bg-white text-red-500 font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-100 traducible';
        downloadButton.setAttribute('data-en', data['en'].download.title || 'Download CV');
        downloadButton.setAttribute('data-es', data['es'].download.title || 'Descargar CV');

        // Agregar elementos al contenedor de texto
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        textContainer.appendChild(downloadButton);

        // Agregar imagen y texto al contenedor principal
        container.appendChild(imageContainer);
        container.appendChild(textContainer);

        // Agregar el contenedor principal a la sección
        aboutMeSection.appendChild(container);
    } catch (error) {
        console.error('Error al cargar el contenido de About Me:', error);
    }
}