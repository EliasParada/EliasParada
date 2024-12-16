async function cargarHabilidades(language) {
    try {
        const response = await fetch('../../data/habilidades.json'); // Cambia a la ruta correcta
        const data = await response.json();

        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }

        const content = data[language];
        const skillsSection = document.getElementById('skills'); // Asegúrate de tener este ID en tu HTML

        // Limpiar contenido previo
        skillsSection.innerHTML = '';

        // Título de la sección de habilidades
        const title = document.createElement('h2');
        title.textContent = content.title;
        title.className = 'text-3xl font-bold text-center text-red-600 mb-8 traducible';
        title.setAttribute('data-en', data['en'].title || 'Skills');
        title.setAttribute('data-es', data['es'].title || 'Habilidades');
        skillsSection.appendChild(title);

        // Contenedor de habilidades en formato de cuadrícula responsiva
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'; // Adaptable a pantallas pequeñas y grandes

        content.skills.forEach((skill, index) => {
            // Contenedor de cada habilidad
            const skillContainer = document.createElement('div');
            skillContainer.className = 'skill-card p-6 text-center bg-white rounded-lg shadow-md';
            skillContainer.setAttribute('data-index', index); // Añadir índice para cada habilidad

            // Título de la habilidad con icono
            const skillTitle = document.createElement('h3');
            skillTitle.className = 'skill-title traducible';
            skillTitle.innerHTML = `${skill.icono} ${skill.name}`;
            skillTitle.setAttribute('data-en', `${skill.icono} ${data['en'].skills[index].name}` || 'Skill');
            skillTitle.setAttribute('data-es', `${skill.icono} ${data['es'].skills[index].name}` || 'Habilidad');
            skillContainer.appendChild(skillTitle);

            // Crear contenedor de la barra de habilidad
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-bar-container mb-6';
            skillContainer.appendChild(progressContainer);

            // Calcular cuántos cuadros deben llenarse según el porcentaje
            const totalSquares = 20; // Total de cuadros en la barra
            const filledSquares = Math.round(skill.percent * totalSquares); // Multiplicar por totalSquares

            // Guardar la cantidad de cuadros llenos en el atributo 'data-squares'
            skillContainer.setAttribute('data-squares', filledSquares);

            // Crear los cuadros con color rojo opaco inicialmente
            for (let i = 0; i < totalSquares; i++) {
                const square = document.createElement('div');
                square.className = 'progress-square';
                progressContainer.appendChild(square);
            }

            // Añadir el porcentaje como texto
            const percentageText = document.createElement('div');
            percentageText.className = 'percentage-text text-lg font-bold mt-4';
            percentageText.textContent = `${Math.round(skill.percent * 100)}%`; // Mostrar el porcentaje
            skillContainer.appendChild(percentageText);

            // Añadir la habilidad al contenedor de habilidades
            skillsGrid.appendChild(skillContainer);
        });

        // Añadir las habilidades al contenedor principal
        skillsSection.appendChild(skillsGrid);

        // Inicializar AOS para la animación de entrada
        AOS.init();

        // Variable para detectar si es la primera vez que se hace scroll
        let isFirstScroll = true;

        // Crear el IntersectionObserver para detectar cuando la sección entra en el viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Solo entra cuando se detecta el scroll en la sección
                    console.log('A');
                    // Detectar si es la primera vez que se hace scroll
                    const skillContainers = skillsSection.querySelectorAll('.skill-card');

                    skillContainers.forEach((skillContainer, index) => {
                        const squares = skillContainer.querySelectorAll('.progress-square');
                        const filledSquares = parseInt(skillContainer.getAttribute('data-squares')); // Obtener la cantidad de recuadros llenos

                        // Primero, quitamos la clase 'pulsing' de todos los cuadros para reiniciar la animación
                        squares.forEach(square => {
                            square.classList.remove('pulsing');
                        });

                        // Aquí aplicamos la animación a todos los recuadros de todas las habilidades
                        if (isFirstScroll) {
                            // Si es la primera vez, cambiamos el color de los cuadros de uno en uno
                            for (let i = 0; i < filledSquares; i++) {
                                setTimeout(() => {
                                    const square = squares[i];
                                    square.style.backgroundColor = '#EF4444'; // Rojo cuando está lleno
                                    square.classList.add('pulsing'); // Añadir animación de pulso
                                }, i * 100); // Retraso de 100ms para cada cuadro
                            }

                            // Una vez que el scroll se ha realizado, cambiamos isFirstScroll a false
                        } else {
                            // Si no es la primera vez, solo aplicamos la animación de pulso
                            for (let i = 0; i < filledSquares; i++) {
                                setTimeout(() => {
                                    const square = squares[i];
                                    square.classList.add('pulsing'); // Solo la animación de pulso
                                }, i * 100); // Retraso de 100ms para cada cuadro
                            }
                        }
                    });
                    isFirstScroll = false;
                }
            });
        }, { threshold: 0.1 }); // Activar cuando el 50% de la sección sea visible

        observer.observe(skillsSection); // Observar la sección de habilidades

        // Repetir la animación al pasar el cursor sobre una habilidad
        skillsSection.addEventListener('mouseenter', (event) => {
            const skillContainer = event.target.closest('.skill-card');
            if (skillContainer) {
                const squares = skillContainer.querySelectorAll('.progress-square');
                const filledSquares = parseInt(skillContainer.getAttribute('data-squares')); // Obtener la cantidad de recuadros llenos

                // Primero, quitamos la clase 'pulsing' de todos los cuadros para reiniciar la animación
                squares.forEach(square => {
                    square.classList.remove('pulsing');
                });

                // Aplicar la animación de pulso solo para esta habilidad
                for (let i = 0; i < filledSquares; i++) {
                    setTimeout(() => {
                        const square = squares[i];
                        square.classList.add('pulsing'); // Añadir animación de pulso
                    }, i * 100); // Retraso de 100ms para cada cuadro
                }
            }
        }, true);

    } catch (error) {
        console.error('Error al cargar las habilidades:', error);
    }
}
