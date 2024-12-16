async function cargarCertificados(language) {
    try {
        const response = await fetch('../../data/certificados.json'); // Cambia a la ruta correcta
        const data = await response.json();

        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }

        const content = data[language];
        const certificatesSection = document.getElementById('certificates');
        certificatesSection.innerHTML = '';
        certificatesSection.classList.add('bg-gradient-to-r', 'from-red-500', 'to-red-700', 'py-8', 'rounded-lg', 'overflow-hidden');

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
            certificateContainer.className = 'certificate-card p-6 text-center bg-white rounded-lg shadow-md cursor-pointer relative flex flex-col justify-center items-center';

            // Imagen del certificado
            const certificateImage = document.createElement('img');
            certificateImage.className = 'rounded-lg w-44 h-44 m-auto';
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
            viewMoreButton.innerHTML = currentLang == 'es' ? 'Ver más' : 'See more';
            viewMoreButton.setAttribute('data-en', 'See more');
            viewMoreButton.setAttribute('data-es', 'Ver más');
            viewMoreButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Evitar que se active el clic en la imagen
                abrirModalBadge(certificate.image, certificate.name, certificate.link, index, data);
            });
            certificateContainer.appendChild(viewMoreButton);

            // Añadir el certificado al contenedor de carrusel
            certificatesCarousel.appendChild(certificateContainer);

            // Agregar evento click para mostrar enlace con ícono
            certificateImage.addEventListener('click', () => {
                abrirModalBadge(certificate.image, certificate.name, certificate.link, index, data);
            });
        });

        // Añadir el carrusel al contenedor principal
        certificatesSection.appendChild(certificatesCarousel);

        // Inicializar el carrusel de Slick
        $(document).ready(function () {
            $('.certificates-carousel').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
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
    const modal = document.getElementById('badge-modal');
    const modalContent = document.getElementById('badge-content');

    console.log(modalContent);

    modalContent.innerHTML = '';

    const botonCerrar = document.createElement('button');
    botonCerrar.className =
        'absolute top-4 right-4 bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition';
    botonCerrar.innerHTML = '<i class="fas fa-times"></i>';
    botonCerrar.addEventListener('click', () => modal.classList.add('hidden'));
    modal.appendChild(botonCerrar);

    // Crear la imagen del certificado
    const certificateModalImage = document.createElement('img');
    certificateModalImage.className = 'w-96 h-auto m-auto';
    certificateModalImage.src = imageSrc;
    certificateModalImage.alt = data[currentLang].certificates[index].name;

    // Título del certificado
    const certificateModalTitle = document.createElement('h3');
    certificateModalTitle.className = 'text-2xl font-semibold mb-4 traducible';
    certificateModalTitle.textContent = data[currentLang].certificates[index].name;
    certificateModalTitle.setAttribute('data-en', data['en'].certificates[index].name);
    certificateModalTitle.setAttribute('data-es', data['es'].certificates[index].name);

    // Crear el botón con el enlace
    const viewCertificateButton = document.createElement('a');
    viewCertificateButton.href = certificateLink;
    viewCertificateButton.target = '_blank'; // Abrir el enlace en una nueva pestaña
    viewCertificateButton.className = 'btn bg-red-600 text-white rounded-lg py-2 px-4 flex items-center justify-center hover:bg-red-700 transition traducible';
    viewCertificateButton.innerHTML = `<i class="fas fa-external-link-alt mr-2"></i>${currentLang == 'es' ? 'Ver Certificado' : 'View Certificate'}`;
    viewCertificateButton.setAttribute('data-en', '<i class="fas fa-external-link-alt mr-2"></i>View Certificate');
    viewCertificateButton.setAttribute('data-es', '<i class="fas fa-external-link-alt mr-2"></i>Ver Certificado');

    // Añadir la imagen, el título, el botón y el enlace al contenido del modal
    modalContent.appendChild(certificateModalTitle);
    modalContent.appendChild(certificateModalImage);
    modalContent.appendChild(viewCertificateButton);

    modal.classList.remove('hidden');
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('badge-modal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});