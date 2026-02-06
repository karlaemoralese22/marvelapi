function searchComic() {
    let comicName = document.getElementById("comicInput").value;
    let ts = new Date().getTime();
    // Aquí deberías incluir tu clave privada
    let privateKey = "61dc8cf62aae16e57147933c5335b74110bf0d1f";
    let publicKey = "c2302d9b6fbb858769c1e6559bc7a9b9";
    // Generar el hash utilizando la función generateHash
    let hash = generateHashToComics(ts, privateKey, publicKey);

    let url = "https://gateway.marvel.com:443/v1/public/comics?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash + "&titleStartsWith=" + comicName; // Cambiado nameStartsWith por titleStartsWith

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayComicResults(data);
        })
        .catch(error => {
            console.error('Error al buscar comic:', error);
        });
}

function displayComicResults(data) {
    let resultsDiv = document.getElementById("comicResults");
    resultsDiv.innerHTML = "";

    if (data.code === 200 && data.data.results.length > 0) {
        let comics = data.data.results;
        comics.forEach(comic => {
            let comicName = comic.title; // Cambiado name por title
            let comicDescription = comic.description ? comic.description : "No hay descripción disponible.";
            let comicImageURL = comic.thumbnail ? comic.thumbnail.path + "/standard_xlarge." + comic.thumbnail.extension : "";

            let comicDiv = document.createElement("div");
            comicDiv.classList.add("comic");

            let comicImageElement = document.createElement("img");
            comicImageElement.src = comicImageURL;
            comicImageElement.alt = comicName;

            let comicInfoDiv = document.createElement("div");

            let comicNameElement = document.createElement("h2");
            comicNameElement.textContent = comicName;

            let comicDescriptionElement = document.createElement("p");
            comicDescriptionElement.textContent = comicDescription;

            comicInfoDiv.appendChild(comicNameElement);
            comicInfoDiv.appendChild(comicDescriptionElement);

            comicDiv.appendChild(comicImageElement);
            comicDiv.appendChild(comicInfoDiv);

            resultsDiv.appendChild(comicDiv);
        });
    } else {
        resultsDiv.textContent = "No se encontraron resultados.";
    }
}

function generateHashToComics(ts, privateKey, publicKey) {
    let toBeHashed = ts + privateKey + publicKey;
    let hash = md5(toBeHashed); // Utilizar una función hash MD5 (asegúrate de incluir la biblioteca md5.js)
    return hash;
}
