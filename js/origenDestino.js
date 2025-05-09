let arrayCiudades = ["Armenia", "Barranquilla", "Bogota", "Cali", "Cartagena", "Manizales", "Medellin", "Neiva", "Popayan", "San Andres"]
function cargadeOpciones(){
    let origenSelect= document.getElementById("origen");
    for(let i=0; i<arrayCiudades.length; i++){
        let ciudad = arrayCiudades[i]
        let option =document.createElement("option");
        option.value= ciudad
        option.textContent = ciudad
        origenSelect.appendChild(option)
    }
}

function actualizarDestino() {
    let origen = document.getElementById('origen').value;
    let destinoSelect = document.getElementById('destino');
  
    destinoSelect.innerHTML = "";

    let optionInicial = document.createElement('option');
    optionInicial.value = "";
    optionInicial.textContent = "Elige un destino";
    destinoSelect.appendChild(optionInicial);
  
    for (let i = 0; i < arrayCiudades.length; i++) {
        let ciudad = arrayCiudades[i];
        if (ciudad !== origen) {
          let option = document.createElement('option');
          option.value = ciudad;
          option.textContent = ciudad;
          destinoSelect.appendChild(option);
        }
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
        cargadeOpciones();
    document.getElementById("origen").addEventListener("change", actualizarDestino);
        actualizarDestino();
    document.getElementById("buscarBtn").addEventListener("click", buscarVuelos);

    let hoy = new Date().toISOString().split("T")[0];
  document.getElementById("fecha").setAttribute("min", hoy);
  
      });

      function buscarVuelos() {
        let origen = document.getElementById("origen").value;
        let destino = document.getElementById("destino").value;
        let fecha = document.getElementById("fecha").value;
        let resultadosDiv = document.getElementById("resultados");
        let tituloResultados = document.getElementById("tituloResultados");
        let subtituloResultados = document.getElementById("subtituloResultados");
      
        resultadosDiv.innerHTML = "";
        tituloResultados.textContent = "";
        subtituloResultados.textContent = "";
      
        // Leer los datos del archivo vuelos.json
        fetch("../json/vuelos.json")
        .then(response => response.json())
        .then(vuelos => {
          let resultados = vuelos.filter(vuelo =>
            vuelo.origen === origen &&
            vuelo.destino === destino &&
            vuelo.fecha === fecha
          );
      
          resultados.sort((a, b) => a.hora.localeCompare(b.hora));
      
          if (resultados.length === 0) {
            tituloResultados.textContent = "UPS... Lo Sentimos";
            subtituloResultados.textContent = `No hemos encontrado vuelos de ${origen} a ${destino} para el ${fecha}`;
          } else {
            tituloResultados.textContent = "HEMOS ENCONTRADO LOS SIGUIENTES VUELOS... ¡A VOLAR!";
            subtituloResultados.textContent = `Estos son los vuelos encontrados de ${origen} a ${destino} en la fecha seleccionada.`;
            let encabezadoHTML = `
              <div class="resultado-header">
              <div>Fecha</div>
              <div>Origen</div>
              <div>Destino</div>
              <div>Hora de Salida</div>
              <div>Precio</div>
              </div>
            `;
            resultadosDiv.innerHTML += encabezadoHTML;
      
            for (let i = 0; i < resultados.length; i++) {
              let vuelo = resultados[i];
              let resultadoHTML = `
                <div class="resultado-vuelo">
                <div>${vuelo.fecha}</div>
                <div>${vuelo.origen}</div>
                <div>${vuelo.destino}</div>
                <div>${vuelo.hora}</div>
                <div>$${vuelo.precio.toLocaleString()}</div>
                </div>
              `;
              resultadosDiv.innerHTML += resultadoHTML;
            }
      
            let tituloImagenes = document.createElement("h2");
            tituloImagenes.textContent = `!Disfruta de ${destino}!`;
            tituloImagenes.className = "tituloImagenes"; 
            resultadosDiv.appendChild(tituloImagenes);
      
            fetch("../json/pieDePagina.json")
              .then(response => response.json())
              .then(destinos => {
                let descripciones = destinos[destino];
      
                let contenedorImagenes = document.createElement("div");
                contenedorImagenes.className = "imagenesBuscador";
      
                for (let i = 1; i <= 3; i++) {
                  let divImagen = document.createElement("div");
                  divImagen.className = "contenedorImagen";
      
                  let img = document.createElement("img");
                  img.src = `../img/${destino}${i}.jpg`;
                  img.alt = `Imagen de ${destino}`;
                  divImagen.appendChild(img);
      
                  if (descripciones && descripciones[i - 1]) {
                    let caption = document.createElement("p");
                    caption.textContent = descripciones[i - 1];
                    caption.className = "pie-imagen";
                    divImagen.appendChild(caption);
                  }
      
                  contenedorImagenes.appendChild(divImagen);
                }
      
                resultadosDiv.appendChild(contenedorImagenes);
              })
              .catch(error => console.error("Error al cargar pieDePagina.json:", error));
      
          }
        })  
        .catch(error => {
          resultadosDiv.innerHTML = "<p>Error al cargar los vuelos.</p>";
          console.error("Error al cargar el archivo vuelos.json:", error);
        })
      }