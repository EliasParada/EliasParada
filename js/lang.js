const languajes = document.querySelectorAll('[data-opt]');
const langMap = {
        'esSP': esSP,
        'enUS': enUS
};

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
                let send = {};

                localStorage.setItem('lang', newLang);

                if (localStorage.lang && localStorage.lang == 'enUS') {
                        renderProjects(enprojects);
                } else {
                        renderProjects(esprojects);
                }

                e.target.innerHTML = newLang === 'esSP' ? 'Español <i class="fa-solid fa-check-to-slot"></i>' : 'English <i class="fa-solid fa-check-to-slot"></i>';
                document.getElementById(newLang === 'esSP' ? 'enopt' : 'esopt').innerHTML = newLang === 'esSP' ? 'English' : 'Español';

                send = langMap[newLang];
                updateLanguage(send);

        });

});

