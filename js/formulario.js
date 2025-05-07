document.getElementById('opinionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const ciudad = document.getElementById('ciudadFavorita').value;
    alert(ciudad)
    const motivo = document.getElementById('tipo_viaje').value;
    const comentarios = document.getElementById('comentarios').value;
    const calificacionEstrellas = document.querySelector('input[name="calificacionEstrellas"]:checked')?.value;

    if (!ciudad || !motivo || !calificacionEstrellas) {
        alert('Por favor completa todos los campos.');
        return;
    }

    const datos = {
        ciudadFavorita: ciudad,
        tipo_viaje: motivo,
        comentarios: comentarios,
        calificacion: calificacionEstrellas
    };

    const respuesta = await fetch('http://127.0.0.1:5000/insertar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if (resultado.mensaje === "OK") {
        alert('¡Gracias por tu opinión!');
        this.reset();
    } else {
        alert('Error al guardar los datos.');
    }
});