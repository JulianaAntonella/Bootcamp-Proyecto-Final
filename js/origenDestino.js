let arrayCiudades = ["Manizales", "Cartagena", "Cali", "San Andres", "Bogota", "Medellin", "Armenia", "Barranquilla", "Popayan", "Neiva"]
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
      
        resultadosDiv.innerHTML = "";
      
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
              resultadosDiv.innerHTML = "<p>No hay vuelos disponibles para esa ruta y fecha.</p>";
            } else {
              for (let i = 0; i < resultados.length; i++) {
                let vuelo = resultados[i];
                let resultadoHTML = `
                  <div>
                    <p><strong>Salida:</strong> ${vuelo.origen}</p>
                    <p><strong>Llegada:</strong> ${vuelo.destino}</p>
                    <p><strong>Fecha:</strong> ${vuelo.fecha}</p>
                    <p><strong>Hora:</strong> ${vuelo.hora}</p>
                    <p><strong>Precio:</strong> $${vuelo.precio.toLocaleString()}</p>
                  </div>
                  <hr/>
                `;
                resultadosDiv.innerHTML += resultadoHTML;
              }

                for (let i = 1; i <= 3; i++) {
                let img = document.createElement("img");
                img.src = `../img/${destino}${i}.jpg`;
                img.alt = `Imagen de ${destino}`;
                img.style.width = "300px";
                img.style.margin = "10px";
                resultadosDiv.appendChild(img);
                }
   
            }
          })
          .catch(error => {
            resultadosDiv.innerHTML = "<p>Error al cargar los vuelos.</p>";
            console.error("Error al cargar el archivo vuelos.json:", error);
          });
      }
      
      