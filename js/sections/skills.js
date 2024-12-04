document.addEventListener("DOMContentLoaded", () => {
    fetch('../../data/habilidades.json')
        .then(response => response.json())
        .then(data => {
            const skills = data.es.skills;
            renderSkills(skills);
            addScrollAnimation();
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

function renderSkills(skills) {
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300';

        skillItem.innerHTML = `
            <div class="flex items-center space-x-3">
                <span class="text-xl">${skill.icono}</span>
                <h3 class="text-lg font-semibold">${skill.name}</h3>
            </div>
            <div class="w-full bg-gray-300 rounded-full mt-2">
                <div class="percent-bar bg-blue-500 text-xs font-medium text-center text-white leading-none rounded-full" 
                     style="width: 0%;" 
                     data-percent="${skill.percent * 100}">0%</div>
            </div>
        `;

        skillsList.appendChild(skillItem);

        // skillItem.addEventListener("mouseenter", () => animatePercent(skillItem));
    });
}

function animatePercent(skillItem) {
    const bar = skillItem.querySelector('.percent-bar');
    const percent = parseFloat(bar.getAttribute('data-percent'));
    bar.style.width = '0%';
    bar.textContent = '0%';

    let currentPercent = 0;
    const interval = setInterval(() => {
        if (currentPercent >= percent) {
            clearInterval(interval);
        } else {
            currentPercent++;
            bar.style.width = `${currentPercent}%`;
            bar.textContent = `${currentPercent}%`;
        }
    }, 1);
}

function addScrollAnimation() {
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.skill-item').forEach(item => animatePercent(item));
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
}
