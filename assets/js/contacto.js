
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('signup-form');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const email = document.getElementById('email').value.trim();

        Swal.fire({
            title: '¡Formulario validado!',
            text: `Ingresaste el correo: ${email}. Todavía no se ha enviado ningún mensaje.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    });
});
