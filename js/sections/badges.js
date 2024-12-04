document.addEventListener("DOMContentLoaded", () => {
    fetch('../../data/certificados.json')
        .then(response => response.json())
        .then(data => {
            const skills = data.es.skills;
            const certificates = data.es.certificates;
            renderSkills(skills);
            renderCertificates(certificates);
            addScrollAnimation();
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

function renderCertificates(certificates) {
    const certificatesList = document.getElementById('certificates-list');
    certificates.forEach(certificate => {
        const certificateItem = document.createElement('div');
        certificateItem.className = 'certificate-item p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center';

        certificateItem.innerHTML = `
            <img src="${certificate.image}" alt="${certificate.name}" class="w-20 h-20 mb-2 object-contain">
            <h3 class="text-lg font-semibold text-center">${certificate.name}</h3>
        `;

        certificatesList.appendChild(certificateItem);
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
    }, 15);
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
