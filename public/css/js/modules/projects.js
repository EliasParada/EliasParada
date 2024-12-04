async function cargarProyectos(language) {
    try {
        const response = await fetch('../../../../data/proyectos.json');
        const data = await response.json();

        const content = data[language];
        const sectionProyectos = document.getElementById('projects');

        const tituloElement = document.createElement('h3');
        tituloElement.className = 'text-sm font-bold text-start mb-4 text-blue-500 uppercase translatable animate-fadeIn';
        tituloElement.innerText = content.titulo;
        tituloElement.setAttribute('data-en', data['en'].titulo);
        tituloElement.setAttribute('data-es', data['es'].titulo);

        const subtituloElement = document.createElement('h2');
        subtituloElement.className = 'text-2xl font-bold text-start mb-8 translatable animate-fadeInDelay';
        subtituloElement.innerText = content.subtitulo;
        subtituloElement.setAttribute('data-en', data['en'].subtitulo);
        subtituloElement.setAttribute('data-es', data['es'].subtitulo);

        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'relative container mx-auto';

        const swiperContainer = document.createElement('div');
        swiperContainer.className = 'swiper-container overflow-hidden';
        
        const swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';

        content.proyectos.forEach((proyecto, index) => {
            const swiperSlide = document.createElement('div');
            swiperSlide.className = 'swiper-slide flex-shrink-0 w-full text-center cursor-pointer';
            swiperSlide.setAttribute('data-index', index);

            const imageContainer = document.createElement('div');
            imageContainer.className = 'relative inline-block w-3/5';
        
            const imgElement = document.createElement('img');
            imgElement.src = proyecto.imagenes[0];
            imgElement.alt = proyecto.nombre;
            imgElement.className = 'w-full h-auto shadow-lg aspect-video';

            const openModalButton = document.createElement('button');
            openModalButton.className = 'absolute bottom-4 right-4 bg-blue-800 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 flex justify-center items-center';
            openModalButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            openModalButton.setAttribute('data-index', index);

            const nameElement = document.createElement('p');
            nameElement.className = 'mt-2 font-bold translatable';
            nameElement.innerText = proyecto.nombre;
            nameElement.setAttribute('data-en', data['en'].proyectos[index].nombre);
            nameElement.setAttribute('data-es', data['es'].proyectos[index].nombre);
            
            openModalButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const modalIndex = openModalButton.getAttribute('data-index');
                const modal = document.querySelector(`.modal-project[data-index="${modalIndex}"]`);
                if (modal) {
                    modal.classList.remove('hidden');
                }
            });

            imageContainer.appendChild(imgElement);
            imageContainer.appendChild(openModalButton);
        
            swiperSlide.appendChild(imageContainer); 
            swiperSlide.appendChild(nameElement);
        
            swiperWrapper.appendChild(swiperSlide);

            const modal = document.createElement('div');
            modal.className = 'modal-project fixed inset-0 bg-gray-900 bg-opacity-75 z-50 hidden flex justify-center items-center';
            modal.setAttribute('data-index', index);

            const modalContent = document.createElement('div');
            modalContent.className = 'relative bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/2 lg:w-1/3 max-h-screen-90 overflow-y-scroll';

            const tituloModal = document.createElement('h3');
            tituloModal.className = 'text-xl font-bold mb-4 translatable';
            tituloModal.innerText = proyecto.nombre;
            tituloModal.setAttribute('data-en', data['en'].proyectos[index].nombre);
            tituloModal.setAttribute('data-es', data['es'].proyectos[index].nombre);

            const descripcionModal = document.createElement('p');
            descripcionModal.className = 'text-lg mb-4 translatable';
            descripcionModal.innerText = proyecto.descripcion;
            descripcionModal.setAttribute('data-en', data['en'].proyectos[index].descripcion);
            descripcionModal.setAttribute('data-es', data['es'].proyectos[index].descripcion);

            const equipoModal = document.createElement('p');
            equipoModal.className = 'text-lg mb-4 translatable';
            equipoModal.innerText = proyecto.equipo;
            equipoModal.setAttribute('data-en', data['en'].proyectos[index].equipo);
            equipoModal.setAttribute('data-es', data['es'].proyectos[index].equipo);

            const rolModal = document.createElement('p');
            rolModal.className = 'text-lg mb-4 translatable';
            rolModal.innerText = proyecto.rol;
            rolModal.setAttribute('data-en', data['en'].proyectos[index].rol);
            rolModal.setAttribute('data-es', data['es'].proyectos[index].rol);

            const entornoModal = document.createElement('p');
            entornoModal.className = 'text-lg mb-4 translatable';
            entornoModal.innerText = proyecto.entorno;
            entornoModal.setAttribute('data-en', data['en'].proyectos[index].entorno);
            entornoModal.setAttribute('data-es', data['es'].proyectos[index].entorno);

            const fechaModal = document.createElement('p');
            fechaModal.className = 'text-lg mb-4 translatable';
            fechaModal.innerText = proyecto.fecha;
            fechaModal.setAttribute('data-en', data['en'].proyectos[index].fecha);
            fechaModal.setAttribute('data-es', data['es'].proyectos[index].fecha);

            const imagenesContainer = document.createElement('div');
            imagenesContainer.className = 'swiper-container overflow-hidden';
            const swiperWrapperModal = document.createElement('div');
            swiperWrapperModal.className = 'swiper-wrapper';

            proyecto.imagenes.forEach(imagen => {
                const swiperSlideModal = document.createElement('div');
                swiperSlideModal.className = 'swiper-slide';

                const imgElementModal = document.createElement('img');
                imgElementModal.src = imagen;
                imgElementModal.className = 'w-full h-auto';
                swiperSlideModal.appendChild(imgElementModal);

                swiperWrapperModal.appendChild(swiperSlideModal);
            });

            const nextButton = document.createElement('div');
            nextButton.id = `swiper-button-next-${index}`;            
            const backButton = document.createElement('div');
            backButton.id = `swiper-button-prev-${index}`;            
            const pagination = document.createElement('div');
            pagination.id = `swiper-pagination-${index}`;

            imagenesContainer.appendChild(swiperWrapperModal);

            const closeModalButton = document.createElement('button');
            closeModalButton.id = 'closeModal';
            closeModalButton.className = 'absolute right-0 top-0 mt-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 z-10';
            closeModalButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            modalContent.appendChild(closeModalButton);
            modalContent.appendChild(imagenesContainer);
            modalContent.appendChild(nextButton);
            modalContent.appendChild(backButton);
            modalContent.appendChild(pagination);
            modalContent.appendChild(tituloModal);
            modalContent.appendChild(descripcionModal);
            modalContent.appendChild(equipoModal);
            modalContent.appendChild(rolModal);
            modalContent.appendChild(entornoModal);
            modalContent.appendChild(fechaModal);

            modal.appendChild(modalContent);

            document.body.appendChild(modal);

            new Swiper(imagenesContainer, {
                loop: true,
                navigation: {
                    nextEl: `#swiper-button-next-${index}`,
                    prevEl: `#swiper-button-prev-${index}`,
                },
                pagination: {
                    el: `#swiper-pagination-${index}`,
                    dynamicBullets: true,
                },
            });
        });

        swiperContainer.appendChild(swiperWrapper);
        carouselContainer.appendChild(swiperContainer);

        sectionProyectos.appendChild(tituloElement);
        sectionProyectos.appendChild(subtituloElement);
        sectionProyectos.appendChild(carouselContainer);

        new Swiper(swiperContainer, {
            loop: true,
            navigation: {
                nextEl: '#nextBtn',
                prevEl: '#prevBtn',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        const swiperSlides = document.querySelectorAll('.swiper-slide');
        swiperSlides.forEach(slide => {
            slide.addEventListener('click', () => {
                const index = slide.getAttribute('data-index');
                const modal = document.querySelector(`.modal-project[data-index="${index}"]`);
                if (modal) {
                    modal.classList.remove('hidden');
                }
            });
        });

        document.querySelectorAll('#closeModal').forEach(button => {
            button.addEventListener('click', () => {
                button.closest('.modal-project').classList.add('hidden');
            });
        });

        window.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal-project')) {
                event.target.classList.add('hidden');
            }
        });

    } catch (error) {
        console.error('Error al cargar los datos de los proyectos:', error);
    }
}