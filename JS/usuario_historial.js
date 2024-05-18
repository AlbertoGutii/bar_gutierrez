
document.addEventListener("DOMContentLoaded", function() {
    principal()
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../index.html"
    }

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../index.html"
    }
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "./usuario/carta.html"
    }
    
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../usuario/menu.html"
    }
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../usuario/vinos.html"
    }

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../contacto.html"
    }

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "../reserva.html"
    }

    document.getElementById("btnIniciarSesion").onclick = function() {
        window.location.href = "./login.html"
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "./historial_pedidos.html"
    }

    document.getElementById("btnAdministrador").onclick = function() {
        window.location.href = "./administrador/inicio_administrador.html"
    }
})