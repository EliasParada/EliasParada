const languajes = document.querySelectorAll('[data-opt]');

const updateLanguage = (data) => {
        for (const key in data) {
                document.querySelectorAll('[data-lang="'+key+'"]').forEach(function(element) {
                        element.innerHTML = data[key];
                });
        }
        
}

languajes.forEach(el => {
        el.addEventListener('click', (e) => {
        const newLang = e.target.getAttribute('data-opt');

        localStorage.setItem('lang', newLang);

        if (localStorage.lang && localStorage.lang == 'en') {
                renderProjects(enprojects);
                console.log('es');
        } else {
                renderProjects(esprojects);
                console.log('en');
        }

        if (newLang == 'es') {
                e.target.innerHTML = 'Español <i class="fa-solid fa-check-to-slot"></i>';
                document.getElementById('enopt').innerHTML = 'English';
        } else {
                e.target.innerHTML = 'English <i class="fa-solid fa-check-to-slot"></i>';
                document.getElementById('esopt').innerHTML = 'Español';
        }

        fetch(`/lang/${newLang}.json`)
                .then(response => response.json())
                .then(data => {
                        updateLanguage(data);
                });
        });
});

