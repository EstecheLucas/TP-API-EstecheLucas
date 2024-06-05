function RickandMorty(done) {
    // Usamos fetch para realizar solicitud a la API
    fetch("https://rickandmortyapi.com/api/character")
    // Pasamos los resultados Json
         .then(response => response.json())
        .then(data => {
            done(data);
        });
}

RickandMorty(data => {
    data.results.forEach(personaje => {
        // Creamos los fragmentos de HTML para cada personaje
        const article = document.createRange().createContextualFragment(/*html */`
            <article>
                <div class="imagen">
                    <img src="${personaje.image}" alt="${personaje.name}"></img>
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </article> 
        `);
        // Añadimos el elemento HTML al elemento main
        const main = document.querySelector("main");
        main.append(article);
    });
});
