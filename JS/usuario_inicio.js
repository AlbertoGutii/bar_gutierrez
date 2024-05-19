window.onload = principal

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "./index.html"
    }

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "./index.html"
    }
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "./paginas_usuarios/usuario/carta.html"
    }
    
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "./paginas_usuarios/usuario/menu.html"
    }
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "./paginas_usuarios/usuario/vinos.html"
    }

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "./contacto.html"
    }

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "./reserva.html"
    }

    document.getElementById("btnIniciarSesion").onclick = function() {
        window.location.href = "./paginas_usuarios/login.html"
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "./paginas_usuarios/historial_pedidos.html"
    }

    document.getElementById("btnAdministrador").onclick = function() {
        window.location.href = "./paginas_usuarios/administrador/inicio_administrador.html"
    }
})

function principal()
{
    iniciarCarrusel()
}

function iniciarCarrusel() {
    let slideIndex = 0
    let slides = document.getElementsByClassName('slide')

    // Ocultar todos los slides excepto el primero
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    // Función para mostrar el próximo slide
    function mostrarSiguienteSlide() {
        slides[slideIndex].style.display = "none"
        slideIndex = (slideIndex + 1) % slides.length
        slides[slideIndex].style.display = "flex"
    }

    // Iniciar el carrusel automáticamente
    setInterval(mostrarSiguienteSlide, 2500)
}