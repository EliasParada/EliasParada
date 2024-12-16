async function cargarIcons() {
    const iconClassMap = {
        "icon-firebase": "images/icons/firebase.svg",
    };

    const icons = document.querySelectorAll("i");
    console.log(icons);

    icons.forEach(async (icon) => {
        const iconClass = Array.from(icon.classList).find(cls => iconClassMap[cls]);
        if (!iconClass) return;

        try {
            const response = await fetch(iconClassMap[iconClass]);
            if (!response.ok) throw new Error(`Error al cargar el icono: ${iconClass}`);
            const svgContent = await response.text();

            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = svgContent;
            const svg = tempDiv.querySelector("svg");

            if (svg) {
                svg.classList.add(...icon.classList);

                icon.replaceWith(svg);
            }
        } catch (error) {
            console.error(error);
        }
    });
}
