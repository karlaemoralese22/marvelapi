function generateHash(ts, privateKey, publicKey) {
  let toBeHashed = ts + privateKey + publicKey;
  let hash = "";
  for (let i = 0; i < toBeHashed.length; i++) {
    let char = toBeHashed.charCodeAt(i);
    hash += char.toString(16);
  }
  return hash;
}

function searchCharacter() {
  let characterName = document.getElementById("characterInput").value;
  let publicKey = "c2302d9b6fbb858769c1e6559bc7a9b9";
  let ts = "1715239180289";
  let hash = "8fc89c641e5472455c161ef6b2c6584c";

  let url = "https://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash + "&nameStartsWith=" + characterName;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayCharacterResults(data);
    })
    .catch(error => {
      console.error('Error al buscar personaje:', error);
    });
}

function displayCharacterResults(data) {
  let resultsDiv = document.getElementById("characterResults");
  resultsDiv.innerHTML = "";

  if (data.code === 200 && data.data.results.length > 0) {
    let characters = data.data.results;
    characters.forEach(character => {
      let characterName = character.name;
      let characterDescription = character.description ? character.description : "No hay descripción disponible.";
      let characterImageURL = character.thumbnail ? character.thumbnail.path + "/standard_xlarge." + character.thumbnail.extension : "";

      let characterDiv = document.createElement("div");
      characterDiv.classList.add("character");

      let characterImageElement = document.createElement("img");
      characterImageElement.src = characterImageURL;
      characterImageElement.alt = characterName;

      let characterInfoDiv = document.createElement("div");

      let characterNameElement = document.createElement("h2");
      characterNameElement.textContent = characterName;

      let characterDescriptionElement = document.createElement("p");
      characterDescriptionElement.textContent = characterDescription;

      characterInfoDiv.appendChild(characterNameElement);
      characterInfoDiv.appendChild(characterDescriptionElement);

      characterDiv.appendChild(characterImageElement);
      characterDiv.appendChild(characterInfoDiv);

      resultsDiv.appendChild(characterDiv);
    });
  } else {
    resultsDiv.textContent = "No se encontraron resultados.";
  }
}

function generateHashToIronMan(ts, privateKey, publicKey) {
  let toBeHashed = ts + privateKey + publicKey;
  let hash = md5(toBeHashed); // Utilizar una función hash MD5 (asegúrate de incluir la biblioteca md5.js)
  return hash;
}

/*$(document).ready(function () {
  // Generar timestamp actual en milisegundos
  let ts = new Date().getTime();
  // Aquí deberías incluir tu clave privada
  let privateKey = "61dc8cf62aae16e57147933c5335b74110bf0d1f";
  let publicKey = "c2302d9b6fbb858769c1e6559bc7a9b9";
  // Generar el hash utilizando la función generateHash
  let hash = generateHashToIronMan(ts, privateKey, publicKey);

  // Realizar una solicitud AJAX a la API de Marvel
  $.ajax({
    url: "https://gateway.marvel.com:443/v1/public/characters/Iron%20man/stories?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash,
    success: function (response) {
      // Manejar la respuesta de la API
      var comics = response.data.results;
      var comicListHTML = '';

      // Iterar sobre cada cómic y mostrar su nombre
      $.each(comics, function (index, comic) {
        comicListHTML += '<div class="comic" data-id="' + comic.id + '">' + comic.title + '</div>';
      });

      // Mostrar la lista de cómics en el HTML
      $('#comic-list').html(comicListHTML);

      // Manejar clics en los cómics para mostrar los detalles
      $('.comic').click(function () {
        var comicId = $(this).data('id');
        var comicDetails = comics.find(comic => comic.id === comicId);
        var comicDescription = comicDetails.description || 'No hay descripción disponible.';

        // Mostrar los detalles del cómic seleccionado
        $('#comic-details').html('<h2>' + comicDetails.title + '</h2><p>' + comicDescription + '</p>');
      });
    },
    error: function (error) {
      console.log('Error al cargar los cómics de Iron Man:', error);
    }
  });
});*/





