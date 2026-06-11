function enviarReserva() {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const mail = document.querySelector('input[name="mail"]').value;
    const fecha = document.querySelector('input[name="fecha"]').value;
    const hora = document.querySelector('input[name="hora"]').value;
    const cant = document.querySelector('input[name="cant"]').value;

    const asunto = "Reserva web";

    const cuerpo =
`Solicitud de reserva

Nombre: ${nombre}
Email: ${mail}
Fecha: ${fecha}
Hora: ${hora}
Cantidad de personas: ${cant}`;

    window.location.href =
        `mailto:lefamiglie@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
