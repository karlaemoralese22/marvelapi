# Proyecto Marvel API

Sitio web interactivo que utiliza la API oficial de Marvel para buscar y mostrar información sobre personajes, cómics y series de Marvel.

## 🚀 Características

- **Búsqueda de Personajes**: Busca cualquier personaje de Marvel y obtén información detallada
- **Búsqueda de Cómics**: Explora el catálogo de cómics de Marvel
- **Búsqueda de Series**: Encuentra series de televisión y contenido relacionado
- **Galería de Películas**: Visualiza las películas del Universo Cinematográfico de Marvel (MCU)
- **Animación de Vengadores**: Página especial con animación de los Vengadores

## 📁 Estructura del Proyecto

```
marvelapi/
├── index.html              # Página principal
├── personajes.html         # Página de búsqueda de personajes
├── comics.html             # Página de búsqueda de cómics
├── peliculas.html          # Página de películas
├── js/                     # Scripts JavaScript
│   ├── script.js          # Lógica de búsqueda de personajes
│   ├── scriptComic.js     # Lógica de búsqueda de cómics
│   └── scriptPeliculas.js # Lógica de búsqueda de series
├── css/                    # Estilos CSS
│   ├── style.css          # Estilos principales
│   ├── stylespersonajes.css
│   ├── stylesComics.css
│   └── stylespeliculas.css
└── assets/                 # Recursos multimedia
    ├── images/            # Imágenes generales
    ├── peliculas/         # Posters de películas
    └── avenger_animacion/ # Recursos de animación
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del sitio
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de búsqueda e interacción con la API
- **Bootstrap 5.3.3**: Framework CSS para diseño responsive
- **Font Awesome 6.5.2**: Iconos
- **Marvel API**: API oficial de Marvel para obtener datos

## 📝 Configuración

### API de Marvel

Este proyecto utiliza la API oficial de Marvel. Para usar el proyecto:

1. Obtén tus claves API en [developer.marvel.com](https://developer.marvel.com/)
2. Reemplaza las claves en los archivos JavaScript:
   - `js/script.js`
   - `js/scriptComic.js`
   - `js/scriptPeliculas.js`

**⚠️ IMPORTANTE**: No subas tus claves privadas a repositorios públicos. Considera usar variables de entorno o un archivo de configuración que esté en `.gitignore`.

## 🚀 Uso

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Abre `index.html` en tu navegador web

3. Navega por las diferentes secciones:
   - **Inicio**: Página principal con noticias y carrusel
   - **Personajes**: Busca personajes de Marvel
   - **Cómics**: Busca cómics de Marvel
   - **Películas**: Explora las películas del MCU
   - **Vengadores**: Animación especial

## 📄 Páginas

### index.html
Página principal con:
- Carrusel de imágenes
- Información sobre Marvel
- Últimas noticias
- Footer con enlaces y contacto

### personajes.html
Página de búsqueda de personajes con:
- Galería de personajes destacados
- Buscador de personajes usando la API de Marvel

### comics.html
Página de búsqueda de cómics con:
- Buscador de cómics usando la API de Marvel

### peliculas.html
Página de películas con:
- Galería de películas del MCU organizadas por categorías
- Buscador de series usando la API de Marvel

## 🔐 Seguridad

- Las claves API están actualmente hardcodeadas en los archivos JavaScript
- **Recomendación**: Mueve las claves a variables de entorno o un archivo de configuración que no se suba a Git

## 📱 Responsive Design

El sitio está diseñado para ser responsive y funcionar correctamente en:
- Desktop
- Tablet
- Mobile

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto es solo para fines educativos. Marvel y todos los personajes relacionados son propiedad de Marvel Entertainment, LLC.

## 👤 Autor

Proyecto desarrollado como parte del curso de desarrollo web.

## 🙏 Agradecimientos

- [Marvel API](https://developer.marvel.com/) por proporcionar acceso a su API
- [Bootstrap](https://getbootstrap.com/) por el framework CSS
- [Font Awesome](https://fontawesome.com/) por los iconos

