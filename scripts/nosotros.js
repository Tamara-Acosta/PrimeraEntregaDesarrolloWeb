
//  DATOS: ARRAY DE OBJETOS (Variables, Constantes y Tipos de Datos)

const equipoProfesional = [
    {
        nombre: "Lic. Tamara Acosta",
        especialidad: "Psicología Infantil y Adolescente",
        trayectoria: "Más de 10 años en el campo del neurodesarrollo y apego seguro. Especialista en TCC.",
        imagen: "../recursos/ana-perfil.jpg" 
    },
    {
        nombre: "Lic. Mariel Garcia",
        especialidad: "Terapia Ocupacional",
        trayectoria: "Experiencia en integración sensorial y habilidades de la vida diaria. Certificado en Nivel 1 de T. O.",
        imagen: "../recursos/juan-perfil.jpg"
    },
    {
        nombre: "Lic. Dario Ramos",
        especialidad: "Fonoaudiología",
        trayectoria: "Enfoque en dificultades de lenguaje expresivo y comprensivo en la primera infancia. Máster en Deglución.",
        imagen: "../recursos/sofia-perfil.jpg"
    },
    {
        nombre: "Lic. Kenny Castillo",
        especialidad: "Neurología y Desarrollo",
        trayectoria: "Especialista en diagnóstico e intervención temprana. Colabora en el área de investigación y docencia.",
        imagen: "../recursos/carlos-perfil.jpg"
    }
];

// 2. CONSTANTE: Captura el contenedor del DOM
const contenedorEquipo = document.getElementById('contenedor-equipo'); 


// 3. ESTRUCTURA ITERATIVA: Uso de forEach
if (contenedorEquipo) {
    // Iteracion sobre el array de profesionales para generar el HTML dinámicamente
    equipoProfesional.forEach(profesional => {
        
        // HTML de la tarjeta
        const tarjetaHTML = `
            <article class="tarjeta-profesional">
                <img src="${profesional.imagen}" alt="Foto de ${profesional.nombre}">
                <h2>${profesional.nombre}</h2>
                <h3>${profesional.especialidad}</h3>
                <p>${profesional.trayectoria}</p>
            </article>
        `;

        //  HTML en el contenedor
        contenedorEquipo.innerHTML += tarjetaHTML;
    });
} else {
    console.error("Error: No se encontró el contenedor con el ID 'contenedor-equipo'.");
}