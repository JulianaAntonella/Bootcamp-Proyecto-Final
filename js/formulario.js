document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ciudad = document.getElementById('ciudadFavorita').value;
    const comentarios = document.getElementById('comentarios').value;
    const calificacionEstrellas = document.querySelector('input[name="calificacionEstrellas"]:checked')?.value;

    let calificacionFinal = calificacionEstrellas;

    console.log('Ciudad Favorita:', ciudad);
    console.log('Comentarios:', comentarios);
    console.log('Calificación:', calificacionFinal);

    alert('¡Gracias por tu opinión!'); // Puedes reemplazar esto con una lógica para enviar los datos a un servidor
    this.reset(); // Limpia el formulario después de enviar (simulado)
});