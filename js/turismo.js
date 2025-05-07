// Obtener el select del HTML
const selectCiudad = document.getElementById('selectCiudad');
const nombreCiudad = document.getElementById('nombreCiudad')
const descripcionCiudad = document.getElementById('descripcionCiudad');
const sitiosTuristicos = document.getElementById('sitiosTuristicos');
const imagenesBienvenida = document.getElementById('imagenesBienvenida')
let ciudades = []

// Lista de imágenes alternativas por ciudad
const imagenesAlternativas = {
    'Parque nacional de los nevados': '../img/Armenia - Parque natural de los nevados.jpg',
    'Cerro de Monserrate': '../img/Bogota - Monserrate.jpg',
    'Ciudad amurallada': '../img/Cartagena - Ciudad amurallada.webp',
    'Museo el Castillo': '../img/Medellin - Museo el castillo.jpg',
    'Parque nacional natural Puracé': '../img/Popayan - Purace.jpg',
    'Centro Histórico de Popayán': '../img/Popayan - Centro historico.jpg',
    
};

// Cargar las ciudades desde el archivo JSON
fetch('../json/ciudades.json')
    .then(respuesta => respuesta.json()) // convierte a JSON
    .then(data => {
        ciudades = data;

        // Ordenar ciudades alfabéticamente
        ciudades.sort((a, b) => a.city.name.localeCompare(b.city.name));

        // Recorrer los datos y agregar las ciudades al select
        for (let i = 0; i < ciudades.length; i++) {
            const ciudad = ciudades[i].city.name;
            const option = document.createElement('option');
            option.value = ciudad;
            option.textContent = ciudad;
            selectCiudad.appendChild(option);
        }
    });

// Mostrar descripción al seleccionar una ciudad
selectCiudad.addEventListener('change', function () {
    const ciudadSeleccionada = selectCiudad.value;

    // Limpiar todo el contenido
    nombreCiudad.innerHTML = "";
    descripcionCiudad.textContent = "";
    sitiosTuristicos.innerHTML = "";

    // Si no se seleccionó ninguna ciudad
    if (ciudadSeleccionada === "") {
        imagenesBienvenida.style.display = "grid"; // ← Mostrar las 8 imágenes
        return;
    }

    // Si sí se seleccionó una ciudad
    imagenesBienvenida.style.display = "none"; // ← Ocultar imágenes de bienvenida


    // Buscar la ciudad seleccionada y mostrar su descripción
    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].city.name === ciudadSeleccionada) {
            // Mostrar el nombre de la ciudad y el departamento como título
            nombreCiudad.innerHTML = `<h2>${ciudades[i].city.name} (${ciudades[i].department.name})</h2>`;
            // Mostrar la descripción
            descripcionCiudad.textContent = ciudades[i].city.description;

            // Agregar el título antes de mostrar los sitios turísticos
            const tituloSitios = document.createElement("h3");
            tituloSitios.textContent = "Sitios turísticos de: " + ciudades[i].city.name;
            tituloSitios.classList.add("titulo-sitios");
            sitiosTuristicos.appendChild(tituloSitios);


            // Obtener el ID de la ciudad
            const cityId = ciudades[i].city.id;

            // Consultar la API de atracciones turísticas
            fetch('https://api-colombia.com/api/v1/TouristicAttraction')
                .then(respuesta => respuesta.json())
                .then(sitios => {

                    // Recorrer atracciones y mostrar solo las que coincidan con el cityId
                    let sitiosEncontrados = 0;

                    for (let j = 0; j < sitios.length; j++) {
                        if (sitios[j].cityId === cityId) {
                            sitiosEncontrados++;
                            // Crear un div para cada sitio turístico
                            const sitioDiv = document.createElement('div');
                            sitioDiv.classList.add('sitio-turistico');
                            // Título del sitio
                            const titulo = document.createElement('h4');
                            titulo.textContent = sitios[j].name;
                            // Descripción
                            const descripcion = document.createElement('p');
                            descripcion.textContent = sitios[j].description;
                            // Imagen
                            const imagen = document.createElement('img');

                            // Si existe imagen alternativa para la ciudad, usarla directamente
                            if (imagenesAlternativas[sitios[j].name]) {
                                imagen.src = imagenesAlternativas[sitios[j].name];
                            } else {
                                // Si no, usar la imagen de la API
                                imagen.src = sitios[j].images[0];
                            }
                            imagen.alt = sitios[j].name;
                            imagen.classList.add('imagen-sitio');

                            // Agregar elementos al div
                            sitioDiv.appendChild(titulo);
                            sitioDiv.appendChild(descripcion);
                            sitioDiv.appendChild(imagen);

                            // Agregar el div al contenedor principal
                            sitiosTuristicos.appendChild(sitioDiv);
                        }
                    }
                });

            return;
        }
    }

    // Si no se seleccionó ninguna ciudad
    descripcionCiudad.textContent = "";
});



