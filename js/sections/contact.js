async function cargarContacto(language) {
    try {
        const response = await fetch('../../data/contacto.json'); // Cambia a la ruta correcta
        const data = await response.json();

        if (!data[language]) {
            console.warn(`El idioma "${language}" no está disponible.`);
            return;
        }
        
        const contactSection = document.getElementById("contact");
        const content = data[language];
        contactSection.innerHTML = '';
        contactSection.classList.add('bg-gradient-to-r', 'from-red-500', 'to-red-700', 'py-8', 'rounded-lg', 'overflow-hidden');


        // Título y subtítulo
        const titulo = document.createElement("h2");
            titulo.className = "text-3xl font-bold mb-6 text-center sticky top-0 z-10 p-2 pt-4 traducible";
            titulo.textContent = content.titulo;
            titulo.setAttribute('data-en', data['en'].titulo || 'Contacto');
            titulo.setAttribute('data-es', data['es'].titulo || 'Contact');

            // Subtítulo
            const subtitulo = document.createElement("p");
            subtitulo.className = "text-lg mb-6 text-center traducible";
            subtitulo.textContent = content.subtitulo;
            subtitulo.setAttribute('data-en', data['en'].subtitulo || '');
            subtitulo.setAttribute('data-es', data['es'].subtitulo || '');

            // Descripción
            const descripcion = document.createElement("p");
            descripcion.className = "text-base mb-8 text-center traducible";
            descripcion.textContent = content.descripcion;
            descripcion.setAttribute('data-en', data['en'].descripcion || '');
            descripcion.setAttribute('data-es', data['es'].descripcion || '');

            // Formulario
            const formContainer = document.createElement("div");
            formContainer.className = "max-w-lg mx-auto";

            const form = document.createElement("form");
            form.id = "formulario";
            form.className = "grid grid-cols-1 gap-4 w-3/4 m-auto";
            form.innerHTML = `
                <label for="from_name" class="block">
                    <span class="text-lg font-semibold traducible" data-en="Name" data-es="Nombre">Nombre</span>
                    <input type="text" id="from_name" name="from_name" placeholder="${language === "es" ? "Tu nombre" : "Your name"}" 
                        class="mt-1 px-3 py-2 w-full rounded-md border-2 border-white focus:outline-none focus:border-gray-300 transition-colors duration-300" 
                        required>
                </label>
                <label for="from_email" class="block">
                    <span class="text-lg font-semibold traducible" data-en="Email" data-es="Correo electrónico">Correo electrónico</span>
                    <input type="email" id="from_email" name="from_email" placeholder="${language === "es" ? "correo@example.com" : "email@example.com"}" 
                        class="mt-1 px-3 py-2 w-full rounded-md border-2 border-white focus:outline-none focus:border-gray-300 transition-colors duration-300" 
                        required>
                </label>
                <label for="subjet" class="block">
                    <span class="text-lg font-semibold traducible" data-en="Email" data-es="Correo electrónico">Correo electrónico</span>
                    <input type="text" id="subjet" name="subjet" placeholder="${language === "es" ? "Sujeto" : "Subjet"}" 
                        class="mt-1 px-3 py-2 w-full rounded-md border-2 border-white focus:outline-none focus:border-gray-300 transition-colors duration-300" 
                        required>
                </label>
                <label for="message" class="block">
                    <span class="text-lg font-semibold traducible" data-en="Message" data-es="Mensaje">Mensaje</span>
                    <textarea id="message" name="message" rows="4" placeholder="${language === "es" ? "Escribe tu mensaje aquí" : "Write your message here"}" 
                        class="mt-1 px-3 py-2 w-full rounded-md border-2 border-white focus:outline-none focus:border-gray-300 transition-colors duration-300" 
                        required></textarea>
                </label>
                <button type="submit" class="inline-block bg-white text-red-500 font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-100 traducible"
                    data-en="Send message" data-es="Enviar mensaje">
                    ${content.botonEnviar}
                </button>
            `;

            // Redes sociales
            const redesContainer = document.createElement("div");
            redesContainer.className = "flex justify-center space-x-4 mt-6";

            content.redes.forEach((red, index) => {
                const link = document.createElement("a");
                link.href = red.url;
                link.target = "_blank";
                link.className = "text-center flex flex-col items-center justify-center hover:text-white text-red-300 transition text-1xl";
                link.innerHTML = `<i class="${red.icono}"></i>${red.nombre}`;
                redesContainer.appendChild(link);
            });

        // Agregar elementos a la sección
        contactSection.append(titulo, subtitulo, descripcion, form, redesContainer);

        // Configurar EmailJS
        emailjs.init("gGqUr5jdcSqVwjRy4");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = document.getElementById("enviar");
            btn.textContent = language === "es" ? "Enviando..." : "Sending...";
            btn.classList.add("opacity-50", "cursor-not-allowed");

            emailjs
                .sendForm("service_bhgmn6c", "template_hy6c8ty", form)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: currentLang === "es" ? "Mensaje enviado" : "Message sent",
                        text: currentLang === "es"
                            ? "¡Gracias por comunicarte conmigo!"
                            : "Thank you for reaching out!",
                        background: "#fef2f2",
                        confirmButtonColor: "#d32f2f",
                    });
                    form.reset();
                    btn.textContent = content.botonEnviar;
                    btn.classList.remove("opacity-50", "cursor-not-allowed");
                })
                .catch(() => {
                    Swal.fire({
                        icon: "error",
                        title: currentLang === "es" ? "Error al enviar" : "Failed to send",
                        text: currentLang === "es"
                            ? "Por favor intenta de nuevo más tarde."
                            : "Please try again later.",
                        background: "#fef2f2",
                        confirmButtonColor: "#d32f2f",
                    });
                    btn.textContent = content.botonEnviar;
                    btn.classList.remove("opacity-50", "cursor-not-allowed");
                });
        });
    } catch (error) {
        console.error('Error al cargar los certificados:', error);
    }
}