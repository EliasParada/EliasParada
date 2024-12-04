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

        // Limpiar el contenido anterior del carrusel
        const carouselContainer = document.querySelector('sr7-carousel');
        carouselContainer.innerHTML = '';

        // Generar slides dinámicos
        SR7.JSON['CAROUSEL-PROJECTS'].slides = {}; // Aseguramos que la propiedad exista

        proyectosPorDiapositiva.forEach((diapositiva, slideIndex) => {
            const grupos = [];
            const proyectos = diapositiva.proyectos;

            // Agrupar proyectos en lotes de cuatro
            for (let i = 0; i < proyectos.length; i += 4) {
                grupos.push(proyectos.slice(i, i + 4));
            }

            // Crear elementos HTML para cada diapositiva
            const slideElement = document.createElement('sr7-slide');
            slideElement.setAttribute('id', `CAROUSEL-PROJECTS-${slideIndex}`);
            slideElement.setAttribute('data-key', slideIndex);

            // Crear nodos para los proyectos dentro de la diapositiva
            grupos.forEach((grupo) => {
                grupo.forEach((proyecto, index) => {
                    const baseId = slideIndex + index * 3;
                    const projectText = document.createElement('sr7-txt');
                    projectText.setAttribute(
                        'id',
                        `CAROUSEL-PROJECTS-${slideIndex}-${baseId + 2}`
                    );
                    projectText.className =
                        'text-xs md:text-xl font-semibold mb-2';
                    projectText.textContent = proyecto.nombre || 'Proyecto';

                    slideElement.appendChild(projectText);
                });
            });

            carouselContainer.appendChild(slideElement);

            // Crear estructura para SR7.JSON
            SR7.JSON['CAROUSEL-PROJECTS'].slides[slideIndex] = getSlides(
                proyectos,
                slideIndex
            );
        });

        console.log(SR7.JSON['CAROUSEL-PROJECTS']);

        initSR7();
    } catch (error) {
        console.error('Error al cargar los datos de los proyectos:', error);
    }
}

function getSlides(proyectos, slideIndex) {
    const slideLayers = {};
    const actions = [];
    proyectos.forEach((proyecto, index) => {
        const baseId = slideIndex + index * 3; // Evitar colisión de IDs entre slides
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
            actions: actions // Incluir las acciones generadas
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