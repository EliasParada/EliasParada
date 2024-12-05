async function cargarCertificados(language) {
    try {
        const response = await fetch('../../data/certificados.json'); // Cambia a la ruta correcta
        const data = await response.json();

        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }

        const content = data[language];
        const certificatesSection = document.getElementById('certificates'); // Asegúrate de tener este ID en tu HTML

        // Limpiar contenido previo
        certificatesSection.innerHTML = '';

        // Contenedor de certificados con fondo gradiente rojo
        certificatesSection.classList.add('bg-gradient-to-r', 'from-red-400', 'to-red-600', 'py-8', 'rounded-lg', 'overflow-hidden');

        // Título de la sección de certificados
        const title = document.createElement('h2');
        title.textContent = content.title;
        title.className = 'text-3xl font-bold text-center text-white mb-8 traducible';
        title.setAttribute('data-en', data['en'].title || 'Certificates');
        title.setAttribute('data-es', data['es'].title || 'Certificados');
        certificatesSection.appendChild(title);

        // Contenedor de certificados en formato de carrusel
        const certificatesCarousel = document.createElement('div');
        certificatesCarousel.className = 'certificates-carousel slick-carousel flex gap-6'; // Contenedor del carrusel

        content.certificates.forEach((certificate, index) => {
            // Contenedor de cada certificado con fondo blanco y bordes redondeados
            const certificateContainer = document.createElement('div');
            certificateContainer.className = 'certificate-card p-6 text-center bg-white rounded-lg shadow-md cursor-pointer relative';

            // Imagen del certificado
            const certificateImage = document.createElement('img');
            certificateImage.className = 'w-full h-auto rounded-lg';
            certificateImage.src = certificate.image;
            certificateImage.alt = certificate.name;
            certificateImage.setAttribute('data-link', certificate.link); // Guardamos el enlace en el atributo de la imagen
            certificateContainer.appendChild(certificateImage);

            // Título del certificado
            const certificateTitle = document.createElement('h3');
            certificateTitle.className = 'certificate-title mt-4 font-semibold text-black traducible';
            certificateTitle.textContent = certificate.name;
            certificateTitle.setAttribute('data-en', data['en'].certificates[index].name || 'Certificates');
            certificateTitle.setAttribute('data-es', data['es'].certificates[index].name || 'Certificados');
            certificateContainer.appendChild(certificateTitle);

            // Botón "Ver más"
            const viewMoreButton = document.createElement('button');
            viewMoreButton.className = 'btn bg-red-600 text-white rounded-lg py-2 px-4 mt-4 hover:bg-red-700 transition';
            viewMoreButton.innerHTML = 'Ver más';
            viewMoreButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Evitar que se active el clic en la imagen
                abrirModalBadge(certificate.image, certificate.name, certificate.link, index, data);
            });
            certificateContainer.appendChild(viewMoreButton);

            // Añadir el certificado al contenedor de carrusel
            certificatesCarousel.appendChild(certificateContainer);

            // Agregar evento click para mostrar enlace con ícono
            certificateImage.addEventListener('click', () => {
                abrirModal(certificate.image, certificate.name, certificate.link);
            });
        });

        // Añadir el carrusel al contenedor principal
        certificatesSection.appendChild(certificatesCarousel);

        // Inicializar el carrusel de Slick
        $(document).ready(function () {
            $('.certificates-carousel').slick({
                dots: true, // Muestra los puntos de navegación
                infinite: true, // Carrusel infinito
                speed: 500, // Velocidad de transición
                slidesToShow: 1, // Muestra 3 certificados a la vez
                slidesToScroll: 1, // Desplaza 1 certificado por vez
                centerMode: true, // Centrar los elementos
                focusOnSelect: true, // Hacer clic en un elemento lo selecciona
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        });

    } catch (error) {
        console.error('Error al cargar los certificados:', error);
    }
}

// Función para abrir el modal con la imagen del certificado
function abrirModalBadge(imageSrc, certificateName, certificateLink, index, data) {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50';

    // Crear el contenedor del contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content bg-white p-6 rounded-lg relative max-w-lg mx-auto';

    // Crear la imagen del certificado
    const certificateModalImage = document.createElement('img');
    certificateModalImage.className = 'w-full h-auto';
    certificateModalImage.src = imageSrc;
    certificateModalImage.alt = certificateName;

    // Título del certificado
    const certificateModalTitle = document.createElement('h3');
    certificateModalTitle.className = 'text-2xl font-semibold mb-4';
    certificateModalTitle.textContent = certificateName;

    // Botón de cerrar modal
    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-2 right-2 text-white bg-red-600 rounded-full p-2';
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', () => {
        modal.remove();
    });

    // Crear el botón con el enlace
    const viewCertificateButton = document.createElement('a');
    viewCertificateButton.href = certificateLink;
    viewCertificateButton.target = '_blank'; // Abrir el enlace en una nueva pestaña
    viewCertificateButton.className = 'btn bg-red-600 text-white rounded-lg py-2 px-4 flex items-center justify-center hover:bg-red-700 transition';
    viewCertificateButton.innerHTML = `<i class="fas fa-external-link-alt mr-2"></i>Ver Certificado`;

    // Añadir la imagen, el título, el botón y el enlace al contenido del modal
    modalContent.appendChild(certificateModalTitle);
    modalContent.appendChild(certificateModalImage);
    modalContent.appendChild(closeButton);
    modalContent.appendChild(viewCertificateButton);

    // Añadir el contenido del modal al modal
    modal.appendChild(modalContent);

    // Añadir el modal al cuerpo del documento
    document.body.appendChild(modal);
}
