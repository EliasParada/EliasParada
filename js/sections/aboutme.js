document.addEventListener("DOMContentLoaded", () => {
    fetch('../../data/sobremi.json')
        .then(response => response.json())
        .then(data => {
            const aboutMe = data.es;
            renderAboutMe(aboutMe);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

function renderAboutMe(aboutMe) {
    const titleElement = document.getElementById('about-title');
    const descriptionElement = document.getElementById('about-description');
    const cvDownloadLink = document.getElementById('cv-download');

    titleElement.textContent = aboutMe.title;
    descriptionElement.textContent = aboutMe.description;
    cvDownloadLink.href = aboutMe.download.rute;
    cvDownloadLink.textContent = aboutMe.download.title;
}
