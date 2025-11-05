document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los formularios que tengan la clase 'needs-validation'
    var forms = document.querySelectorAll('.needs-validation');

    // Recorre cada formulario
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            // Captura el evento submit
            form.addEventListener('submit', function (event) {
                // Verifica si el formulario es válido
                if (!form.checkValidity()) {
                    event.preventDefault(); // evita el envío del formulario
                    event.stopPropagation(); // detiene la propagación del evento
                }

                form.classList.add('was-validated'); // agrega clase de validación a Bootstrap
            }, false);
        });
});