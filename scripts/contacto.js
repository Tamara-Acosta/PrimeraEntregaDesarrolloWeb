
//FUNCIONALIDAD DE FOCO/BLUR

document.addEventListener('DOMContentLoaded', () => {
    // Seleccion de todos los campos de entrada (input, textarea, select)
    const campos = document.querySelectorAll('#formulario-contacto input, #formulario-contacto textarea, #formulario-contacto select');

    campos.forEach(campo => {
        // Evento 'focus': Se dispara cuando el elemento toma el foco (hace click)
        campo.addEventListener('focus', function() {
            this.classList.add('input-activo');
        });

        // Evento 'blur': Se dispara cuando el elemento pierde el foco
        campo.addEventListener('blur', function() {
            this.classList.remove('input-activo');
        });
    });
});

// CONFIRMACIÓN DE ENVÍO DE FORMULARIO

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');
    const seccionContacto = document.querySelector('.seccion-contacto');

    if (formulario) {
        // Escuchamos el evento 'submit' (cuando el usuario hace clic en enviar)
        formulario.addEventListener('submit', function(e) {
            // 1. Previene el envío por defecto (que recargaría la página)
            e.preventDefault(); 
            
            // 2. Obtener el valor de la solicitud seleccionada
            const selectAsunto = document.getElementById('asunto');
            const asuntoSeleccionado = selectAsunto.options[selectAsunto.selectedIndex].text;
            const nombre = document.getElementById('nombre-contacto').value || "Cliente";

            // 3. Crear el mensaje de confirmación
            const mensajeConfirmacion = document.createElement('div');
            mensajeConfirmacion.classList.add('mensaje-confirmacion');
            mensajeConfirmacion.innerHTML = `
                <h2>¡Gracias por tu mensaje, ${nombre}!</h2>
                <p>Hemos recibido tu solicitud de: <strong>${asuntoSeleccionado}</strong>.</p>
                <p>Te responderemos a la brevedad.</p>
                <button onclick="window.location.reload()" class="boton-contacto">Volver</button>
            `;

            // 4. Ocultar el formulario y mostrar el mensaje
            formulario.style.display = 'none';
            
            // Reemplaza el contenedor del formulario para que el mensaje quede en su lugar
            const contenedorFormulario = formulario.closest('.contenedor-formulario');
            if(contenedorFormulario) {
                contenedorFormulario.innerHTML = ''; // Limpia el contenido anterior
                contenedorFormulario.appendChild(mensajeConfirmacion);
                contenedorFormulario.style.textAlign = 'center';
            }
            
        });
    }
});