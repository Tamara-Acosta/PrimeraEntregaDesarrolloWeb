

const listaServicios = [
    {
        titulo: "Psicología Clínica",
        icono: "fas fa-brain", 
        descripcionCorta: "Acompañamiento emocional y desarrollo personal para niños, adolescentes y adultos.",
        descripcionLarga: "Ofrecemos terapia cognitivo-conductual (TCC), sistémica y enfoques humanistas. Abordamos ansiedad, depresión, duelos y conflictos familiares. Se trabaja en sesiones individuales y, si es necesario, con orientación a padres.",
    },
    {
        titulo: "Fonoaudiología",
        icono: "fas fa-comments",
        descripcionCorta: "Evaluación y tratamiento de dificultades en la comunicación y el lenguaje.",
        descripcionLarga: "Especializados en trastornos del habla, retraso del lenguaje, dificultades en la lectoescritura y problemas de deglución. Intervención temprana y sesiones adaptadas a la necesidad de cada paciente.",
    },
    {
        titulo: "Terapia Ocupacional",
        icono: "fas fa-hand-holding-medical",
        descripcionCorta: "Mejora de la autonomía y participación en actividades cotidianas.",
        descripcionLarga: "Trabajamos la integración sensorial, motricidad fina y gruesa, y el desarrollo de habilidades de la vida diaria (vestido, alimentación, juego). Esencial para niños con desafíos en la coordinación o procesamiento sensorial.",
    },
    {
        titulo: "Talleres y Orientación Familiar",
        icono: "fas fa-users",
        descripcionCorta: "Espacios de formación y apoyo para padres, escuelas y cuidadores.",
        descripcionLarga: "Realizamos talleres grupales sobre crianza respetuosa, límites, manejo de emociones y desarrollo infantil. También ofrecemos asesoramiento personalizado para abordar situaciones específicas en el entorno familiar.",
    }
];

//FUNCIÓN DE GENERACIÓN DE CONTENIDO

const contenedorServicios = document.getElementById('contenedor-servicios');

// forEach
function generarServiciosHTML() {
    if (!contenedorServicios) return;
    
    let htmlContent = '';
    
    listaServicios.forEach((servicio, index) => {
        // estructura de la tarjeta para cada servicio
        htmlContent += `
            <article class="servicio-item">
                <i class="${servicio.icono}"></i>
                <h2>${servicio.titulo}</h2>
                <p class="descripcion-corta">${servicio.descripcionCorta}</p>
                
                <button class="boton-detalle" data-index="${index}">
                    Ver Detalles (+)
                </button>

                <div class="servicio-detalle detalle-oculto" id="detalle-${index}">
                    <p>${servicio.descripcionLarga}</p>
                    <a href="./contacto.html" class="boton-contacto-secundario">Solicitar Turno</a>
                </div>
            </article>
        `;
    });
    
    contenedorServicios.innerHTML = htmlContent;
}


//FUNCIÓN DE FUNCIONALIDAD ACORDEÓN

function manejarDetalles(evento) {
    // Verificacion que el clic fue en un botón de detalle
    if (evento.target.classList.contains('boton-detalle')) {
        
        // Se obtenemos el índice del servicio
        const index = evento.target.dataset.index;
        
        // Se aptura el div de detalle asociado a ese índice
        const detalleDiv = document.getElementById(`detalle-${index}`);
        
        if (detalleDiv) {
            // Toggle de la clase para mostrar/ocultar el detalle
            detalleDiv.classList.toggle('detalle-oculto');
            
            // Cambiar el texto del botón
            if (detalleDiv.classList.contains('detalle-oculto')) {
                evento.target.textContent = 'Ver Detalles (+)';
            } else {
                evento.target.textContent = 'Ocultar (-)';
            }
        }
    }
}

//  INICIALIZACIÓN
generarServiciosHTML(); // se insertan los servicios en el DOM

// se añade el escuchador de eventos al contenedor padre
if (contenedorServicios) {
    contenedorServicios.addEventListener('click', manejarDetalles);
}