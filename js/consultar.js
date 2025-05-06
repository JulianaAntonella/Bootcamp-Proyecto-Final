document.addEventListener("DOMContentLoaded",function(){
    let contenedor=document.getElementById("tabla")
    fetch("http://127.0.0.1:5000/consultar")


.then(datos=>datos.json())
.then(respuesta=>{
    console.log(respuesta)
    for(let i in respuesta){
        contenedor.innerHTML+=`<tr><td>${respuesta[i].ciudadFavorita}</td>
                                <td>${respuesta[i].tipo_viaje}</td>
                                <td>${respuesta[i].comentarios ? respuesta[i].comentarios : "No hay comentarios"}</td>
                                <td>${respuesta[i].calificacion ? respuesta[i].calificacion : "No calificado"}</td>
                                </tr>`
    }

})
})