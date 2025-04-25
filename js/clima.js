window.addEventListener("DOMContentLoaded", () => {
  const imagenesCiudades = {
    "amazonas": "../img/Amazonas.jpg",
    "armenia": "../img/Armenia.jpg",
    "barranquilla": "../img/Barranquilla.jpg",
    "bogota": "../img/Bogota.jpg",
    "cali": "../img/Cali.jpg",
    "cartagena": "../img/Cartagena.jpg",
    "manizales": "../img/Manizales.jpg",
    "medellin": "../img/Medellin.jpg",
    "pereira": "../img/Pereira.jpg",
    "riohacha": "../img/Riohacha.jpg",
    "san andres": "../img/San-Andres.jpg",
    "neiva": "../img/Neiva.jpg"
  };

const fondosClima = {
  "soleado": "../img/Soleado.gif",
  "despejado": "../img/Despejado.gif",
  "lluvia ligera": "../img/LluviaLigera.gif",
  "tormenta electrica": "../img/Tormenta.gif",
  "nublado": "../img/nublado.gif",
  "llovizna": "../img/Llovizna.gif",
  "niebla": "../img/Niebla.gif",
  "parcialmente nublado": "../img/parcialmente.gif"
};
  

  function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
  }
  
  imagen_fondo(true);

  document.getElementById("buscar").addEventListener("click", () => {
    const nombreCiudad = normalizarTexto(document.getElementById("ciudad").value);
    const contenedor = document.getElementById("clima");
    const tituloPrincipal = document.querySelector("h1");
    contenedor.innerHTML = "";

    fetch("../json/clima.json")
      .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        return response.json();
      })
      .then(data => {
        const resultado = data.destinos.find(destino =>
          normalizarTexto(destino.ciudad) === nombreCiudad
        );
        
        if (resultado) {
          imagen_fondo(false);
          const ciudadKey = normalizarTexto(resultado.ciudad);
          const imagenCiudad = imagenesCiudades[ciudadKey] || "PageClima/imgClima/default.jpg";
          const estado = normalizarTexto(resultado.estado_cielo);
          const fondoGif = fondosClima[estado] || "gifs/default.gif";

          // Fondo dinámico según el clima
          document.body.style.background = `url('${fondoGif}') no-repeat center center fixed`;
          document.body.style.backgroundSize = "cover";   

        
          // Cambiar color del título
          tituloPrincipal.classList.remove("texto-claro", "texto-oscuro");
          if (["lluvia ligera", "soleado", "nublado", "lluvia", "tormenta electrica", "niebla"].includes(estado)) {
            tituloPrincipal.classList.add("texto-claro");
          } else {
            tituloPrincipal.classList.add("texto-oscuro");
          }

          contenedor.innerHTML = `
            <div class="card-clima">
              <img src="${imagenCiudad}" alt="Imagen de ${resultado.ciudad}" class="imagen-ciudad" width="300">
              <div class="info-ciudad">
                <h3>${resultado.ciudad}</h3>
                <p>Temperatura: ${resultado.temperatura}°C</p>
                <p>Sensación térmica: ${resultado.sensacion_termica}°C</p>
                <p>Estado del cielo: ${resultado.estado_cielo}</p>
                <p>Humedad: ${resultado.humedad}%</p>
                <p>Viento: ${resultado.viento_kmh} km/h</p>
              </div>
            </div>
          `;
        } else {
          // Fondo por defecto si no hay resultados
          document.body.style.background = `url('gifs/default.gif') no-repeat center center fixed`;
          document.body.style.backgroundSize = "cover";

          tituloPrincipal.classList.remove("texto-claro", "texto-oscuro");
          tituloPrincipal.classList.add("texto-claro");

          contenedor.innerHTML = `<p class="error-clima">No se encontró información para esa ciudad.</p>`;
        }
      })
      .catch(error => {
        console.error("Error al obtener los datos del clima:", error);
        contenedor.innerHTML = `<p>Hubo un error al obtener los datos.</p>`;
      });
  });
});



function imagen_fondo(heroImage){
  if (heroImage){
    document.getElementById('imagen-hero').innerHTML = `<img src="../img/imagen-fondo-3.avif" alt="Fondo clima">`;
  }else{
    document.getElementById('imagen-hero').innerHTML = ``
  }
}