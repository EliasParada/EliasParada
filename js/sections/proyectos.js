async function cargarProyectos(language) {
    try {
        const response = await fetch('../../../../data/proyectos.json');
        const data = await response.json();

        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }

        const content = data[language];
        const proyectosPorDiapositiva = content.diapositivas;

        // Actualizar el título principal
        const tituloProyectos = document.getElementById('tituloProyectos');
        if (tituloProyectos) {
            tituloProyectos.textContent = content.titulo || 'Título no disponible';
        }
        tituloProyectos.setAttribute('data-en', data['en'].titulo || 'Projects');
        tituloProyectos.setAttribute('data-es', data['es'].titulo || 'Proyectos');

        const carouselContainer = document.querySelector('sr7-carousel');
        carouselContainer.innerHTML = '';

        SR7.JSON['CAROUSEL-PROJECTS'].slides = {};

        proyectosPorDiapositiva.forEach((diapositiva, slideIndex) => {
            const grupos = [];
            const proyectos = diapositiva.proyectos;

            for (let i = 0; i < proyectos.length; i += 4) {
                grupos.push(proyectos.slice(i, i + 4));
            }

            const slideElement = document.createElement('sr7-slide');
            slideElement.setAttribute('id', `CAROUSEL-PROJECTS-${slideIndex}`);
            slideElement.setAttribute('data-key', slideIndex);

            grupos.forEach((grupo) => {
                proyectos.forEach((proyecto, index) => {
                    const baseId = slideIndex + index * 3;

                    const projectText = document.createElement('sr7-txt');
                    projectText.setAttribute('id', `CAROUSEL-PROJECTS-${slideIndex}-${baseId + 2}`);

                    // Crear nombre del proyecto
                    const nombreProyecto = document.createElement('p');
                    nombreProyecto.className = 'text-3xl md:text-7xl traducible';
                    nombreProyecto.textContent = proyecto.nombre || 'Proyecto';

                    // Agregar atributos data-en y data-es
                    nombreProyecto.setAttribute('data-en', data['en'].diapositivas[slideIndex].proyectos[index].nombre || 'Project');
                    nombreProyecto.setAttribute('data-es', data['es'].diapositivas[slideIndex].proyectos[index].nombre || 'Proyecto');

                    projectText.appendChild(nombreProyecto);

                    // Crear botón para abrir proyecto
                    const botonAbrir = document.createElement('button');
                    botonAbrir.className = 'bg-red-600 text-white px-3 rounded-lg hover:bg-red-700 transition mt-4 flex items-center gap-2 m-auto h-10 traducible';

                    // Agregar texto del botón
                    botonAbrir.textContent = 'Ver más';
                    botonAbrir.setAttribute('data-en', 'See more');
                    botonAbrir.setAttribute('data-es', 'Ver más');

                    const icono = document.createElement('i');
                    icono.className = 'fas fa-eye';
                    botonAbrir.prepend(icono);

                    botonAbrir.addEventListener('click', () => abrirModal(proyecto, data, slideIndex, index));
                    projectText.appendChild(botonAbrir);

                    // Crear contenedor de etiquetas
                    const etiquetasContainer = document.createElement('div');
                    etiquetasContainer.className = 'text-lg';

                    proyecto.etiquetas.forEach((etiqueta, etiquetaIndex) => {
                        const badge = document.createElement('span');
                        badge.className = etiqueta.clases;
                        badge.textContent = etiqueta.nombre;

                        // Agregar atributos data-en y data-es para etiquetas
                        badge.setAttribute('data-en', data['en'].diapositivas[slideIndex].proyectos[index].etiquetas[etiquetaIndex].nombre || '');
                        badge.setAttribute('data-es', data['es'].diapositivas[slideIndex].proyectos[index].etiquetas[etiquetaIndex].nombre || '');

                        etiquetasContainer.appendChild(badge);
                    });

                    projectText.appendChild(etiquetasContainer);
                    slideElement.appendChild(projectText);
                });
            });

            carouselContainer.appendChild(slideElement);

            SR7.JSON['CAROUSEL-PROJECTS'].slides[slideIndex] = getSlides(proyectos, slideIndex);
        });

        console.log(SR7.JSON['CAROUSEL-PROJECTS']);

        initSR7();
    } catch (error) {
        console.error('Error al cargar los datos de los proyectos:', error);
    }
}



function abrirModal(proyecto, data, slideIndex, projectIndex) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');

    // Limpiar contenido previo
    modalContent.innerHTML = '';

    // Botón de cerrar
    const botonCerrar = document.createElement('button');
    botonCerrar.className =
        'absolute top-4 right-4 bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition';
    botonCerrar.innerHTML = '<i class="fas fa-times"></i>';
    botonCerrar.addEventListener('click', () => modal.classList.add('hidden'));
    modal.appendChild(botonCerrar);

    // Contenedor principal para el contenido con scroll
    const contenidoScrollable = document.createElement('div');
    contenidoScrollable.className = 'max-w-3xl max-h-[80vh] mx-auto overflow-y-auto p-4';

    // Título del proyecto
    const titulo = document.createElement('h3');
    titulo.className = 'text-2xl font-bold mb-4 traducible';
    titulo.textContent = data[currentLang].diapositivas[slideIndex].proyectos[projectIndex].nombre;

    // Agregar atributos data-en y data-es
    titulo.setAttribute('data-en', data['en'].diapositivas[slideIndex].proyectos[projectIndex].nombre || 'Project');
    titulo.setAttribute('data-es', data['es'].diapositivas[slideIndex].proyectos[projectIndex].nombre || 'Proyecto');
    contenidoScrollable.appendChild(titulo);

    // Rol
    const rol = document.createElement('p');
    rol.className = 'mb-4 text-gray-600 traducible';
    rol.textContent = `Rol: ${data[currentLang].diapositivas[slideIndex].proyectos[projectIndex].rol}`;
    rol.setAttribute('data-en', `Role: ${data['en'].diapositivas[slideIndex].proyectos[projectIndex].rol}`);
    rol.setAttribute('data-es', `Rol: ${data['es'].diapositivas[slideIndex].proyectos[projectIndex].rol}`);
    contenidoScrollable.appendChild(rol);

    // Descripción
    const descripcion = document.createElement('p');
    descripcion.className = 'mb-4 traducible';
    descripcion.textContent = data[currentLang].diapositivas[slideIndex].proyectos[projectIndex].descripcion;
    descripcion.setAttribute('data-en', data['en'].diapositivas[slideIndex].proyectos[projectIndex].descripcion);
    descripcion.setAttribute('data-es', data['es'].diapositivas[slideIndex].proyectos[projectIndex].descripcion);
    contenidoScrollable.appendChild(descripcion);

    // Etiquetas
    const etiquetasContainer = document.createElement('div');
    etiquetasContainer.className = 'mb-4 flex flex-wrap gap-2';
    proyecto.etiquetas.forEach((etiqueta, etiquetaIndex) => {
        const badge = document.createElement('span');
        badge.className = `inline-block ${etiqueta.clases} text-xs px-2 rounded-full traducible`;
        badge.textContent = etiqueta.nombre;

        // Agregar atributos data-en y data-es
        badge.setAttribute('data-en', data['en'].diapositivas[slideIndex].proyectos[projectIndex].etiquetas[etiquetaIndex].nombre || '');
        badge.setAttribute('data-es', data['es'].diapositivas[slideIndex].proyectos[projectIndex].etiquetas[etiquetaIndex].nombre || '');

        etiquetasContainer.appendChild(badge);
    });
    contenidoScrollable.appendChild(etiquetasContainer);

    // Carrusel de imágenes
    const imagenContainer = document.createElement('div');
    imagenContainer.id = 'carousel-images';
    imagenContainer.className = 'overflow-hidden rounded-lg'; // TailwindCSS para imágenes
    proyecto.imagenes.forEach((imgSrc) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'rounded-lg w-full object-cover'; // Ajustar imágenes responsivamente
        imagenContainer.appendChild(img);
    });
    contenidoScrollable.appendChild(imagenContainer);

    // Enlace con ícono de Font Awesome
    const enlaceContainer = document.createElement('div');
    enlaceContainer.className = 'flex justify-center mt-4';

    const enlace = document.createElement('a');
    enlace.href = proyecto.enlace || '#';
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.className =
        'bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition';

    const icono = document.createElement('i');
    icono.className = 'fa fa-external-link-alt'; // Font Awesome icon class
    enlace.appendChild(icono);

    const enlaceTexto = document.createTextNode('Ver proyecto');
    enlace.appendChild(enlaceTexto);

    enlaceContainer.appendChild(enlace);
    contenidoScrollable.appendChild(enlaceContainer);

    modalContent.appendChild(contenidoScrollable);

    // Mostrar el modal
    modal.classList.remove('hidden');

    // Inicializar carrusel después de insertar imágenes
    setTimeout(() => {
        $('#carousel-images').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow:
                '<button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-700 transition z-10"><i class="fas fa-chevron-left"></i></button>',
            nextArrow:
                '<button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-700 transition z-10"><i class="fas fa-chevron-right"></i></button>'
        });
    }, 0);
}



document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('project-modal').classList.add('hidden');
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

function getSlides(proyectos, slideIndex) {
    const slideLayers = {};
    const actions = [];
    proyectos.forEach((proyecto, index) => {
        const baseId = slideIndex + index * 3;
        let hPos = proyecto.posicion[1],
            vPos = proyecto.posicion[0];

        // Contenedor principal
        slideLayers[`${baseId}`] = {
            id: baseId,
            listen: ["mouseenter", "mouseleave"],
            alias: `Item-${index + 1}`,
            subtype: "group",
            size: { w: `${proyecto.tamaño[0]}%`, h: `${proyecto.tamaño[1]}%` },
            pos: {
                "h": [hPos, hPos, hPos, hPos, hPos],
                "v": [vPos, vPos, vPos, vPos, vPos],
                "pos": "absolute",
            },
            cursor: "pointer",
            tl: {in: { content: {all: [{}, {}]}}},
            p: {t: [0, 0, 0, 0, 0], b: [0, 0, 0, 0, 0], l: [0, 0, 0, 0, 0], r: [0, 0, 0, 0, 0]},
			m: {t: [0, 0, 0, 0, 0], b: [0, 0, 0, 0, 0], l: [0, 0, 0, 0, 0], r: [0, 0, 0, 0, 0]},
			border: {
				s: "solid",
				c: proyecto.bordeColor,
                w: {
                    t: ["10px", "10px", "10px", "10px", "10px"],
                    r: ["10px", "10px", "10px", "10px", "10px"],
                    b: ["10px", "10px", "10px", "10px", "10px"],
                    l: ["10px", "10px", "10px", "10px", "10px"]
                }
            },
            type: "container"
        };

        // Imagen
        slideLayers[`${baseId + 1}`] = {
            id: baseId + 1,
            pid: `${baseId}`,
            size: { w: "100%", h: "100%" },
            bg: {
                image: {
                    src: proyecto.libImagen.img,
                    lib_id: proyecto.libImagen.id,
                    pos: { x: "50%", y: "50%" },
                    repeat: "no-repeat",
                    size: "cover"
                }
            },
            tl: {
                in: {mask: {all: [{}, {}]}},
                scene_1: {
                    content: {all: [{t: 0, e: "power4.out", sX: "1.05", sY: "1.05"}]},
                    mask: {all: [{t: 0, d: 1000, f: 1000, e: "power4.out", oflow: "hidden", off: 1 }]}
                },
                scene_2: {content: {all: [{t: 0, e: "sine.out", sX: "1", sY: "1"}]}}
            },
            type: "shape"
        };

        // Texto
        slideLayers[`${baseId + 2}`] = {
            id: baseId + 2,
            alias: proyecto.nombre,
            pid: `${baseId}`,
            size: { w: "100%" },
            pos: { v: "bottom", pos: "absolute" },
            zIndex: 7,
            bg: {
                color: {
                    type: "linear",
                    angle: "180",
                    orig: [
                        {rgba: "rgba(0,0,0,0)", p: 0},
                        {rgba: "rgba(0,0,0,0)", p: 0},
                        {rgba: "rgba(0,0,0,0.75)", p: 100},
                        {rgba: "rgba(0,0,0,0.75)", p: 100}
                    ],
                    string: "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
                }
            },
            tl: {
				in: {
					content: {all: [{t: "w0"}, {t: 0}]},
                    clip: {
                        orig: "b",
                        all: [
                            {d: 0, e: "power4.out", c: "0%"}, 
                            {d: "750", e: "power4.out", c: 100}
                        ]
                    }
                },
                scene_1: {
                    clip: {
                        orig: "b",
                        type: "r",
                        all: [{t: 0, e: "sine.out", c: "0%"}]
                    }
                },
            },
            p: 0,
            m: 0,
            tA: "center",
            color: "#ffffff",
            font: { family: "Oswald", weight: "700", ls: 0 },
            lh: "70px",
            type: "text"
        };

        // Definir acciones
        actions.push(
            { a: "playScene", evt: "mouseenter", rec: true, target: [`${baseId + 1}`], sc: "scene_1", src: [baseId] },
            { a: "playScene", evt: "mouseleave", rec: true, target: [`${baseId + 1}`], sc: "scene_2", src: [baseId] },
            { a: "playScene", evt: "mouseenter", rec: true, target: [`${baseId + 2}`], sc: "in", src: [baseId] },
            { a: "playScene", evt: "mouseleave", rec: true, target: [`${baseId + 2}`], sc: "scene_1", src: [baseId] }
        );
    });

    return {
        id: slideIndex,
        slide: {
            id: slideIndex,
            title: `Slide ${slideIndex + 1}`,
            order: slideIndex + 1,
            description: `Diapositiva número ${slideIndex + 1}`,
            actions: actions
        },
        layers: slideLayers
    };
}

function initSR7() {
    if (SR7.F.init) SR7.F.init();
    document.addEventListener('DOMContentLoaded', function () {
    	if (SR7.F.init) SR7.F.init();
    	else SR7.shouldBeInited = true;
    });
    window.addEventListener('load', function () {
    	if (SR7.F.init) SR7.F.init();
    	else SR7.shouldBeInited = true;
    });
}