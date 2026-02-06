function searchSerie() {
    let seriesName = document.getElementById("serieInput").value;
    let ts = new Date().getTime();
    // Aquí deberías incluir tu clave privada
    let privateKey = "61dc8cf62aae16e57147933c5335b74110bf0d1f";
    let publicKey = "c2302d9b6fbb858769c1e6559bc7a9b9";
    // Generar el hash utilizando la función generateHash
    let hash = generateHashToSeries(ts, privateKey, publicKey);

    let url = "https://gateway.marvel.com:443/v1/public/series?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash + "&titleStartsWith=" + seriesName;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displaySeriesResults(data);
        })
        .catch(error => {
            console.error('Error al buscar serie:', error);
        });
}

function displaySeriesResults(data) {
    let resultsDiv = document.getElementById("moviesResults");
    resultsDiv.innerHTML = "";

    if (data.code === 200 && data.data.results.length > 0) {
        let series = data.data.results;
        series.forEach(serie => {
            let serieName = serie.title;
            let serieImageURL = serie.thumbnail ? serie.thumbnail.path + "/standard_xlarge." + serie.thumbnail.extension : "";

            let serieDiv = document.createElement("div");
            serieDiv.classList.add("serie");

            let serieImageElement = document.createElement("img");
            serieImageElement.src = serieImageURL;
            serieImageElement.alt = serieName;

            let serieNameElement = document.createElement("h2");
            serieNameElement.textContent = serieName;

            serieDiv.appendChild(serieImageElement);
            serieDiv.appendChild(serieNameElement);

            resultsDiv.appendChild(serieDiv);
        });
    } else {
        resultsDiv.textContent = "No se encontraron resultados.";
    }
}

function generateHashToSeries(ts, privateKey, publicKey) {
    let toBeHashed = ts + privateKey + publicKey;
    let hash = md5(toBeHashed);
    return hash;
}
