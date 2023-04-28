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

        fetch(`/lang/${newLang}.json`)
                .then(response => response.json())
                .then(data => {
                        updateLanguage(data);
                });
        });
});

