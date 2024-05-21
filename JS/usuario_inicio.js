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

    document.getElementById("btnCesta").onclick = function() {
        window.location.href = "./paginas_usuarios/usuario/cesta.html"
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "./paginas_usuarios/historial_pedidos.html"
    }

    document.getElementById("btnAdministrador").onclick = function() {
        window.location.href = "./paginas_usuarios/administrador/inicio_administrador.html"
    }

    document.getElementById("btnCerrarSesion").onclick = function() {
        localStorage.clear()
        window.location.href = "./index.html"
    }
})

function principal() {
    comprobarExisteEmail()
    iniciarCarrusel()
}

function iniciarCarrusel() {
    let slideIndex = 0
    let slides = document.getElementsByClassName('slide')

    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    function mostrarSiguienteSlide() {
        slides[slideIndex].style.display = "none"
        slideIndex = (slideIndex + 1) % slides.length
        slides[slideIndex].style.display = "flex"
    }

    setInterval(mostrarSiguienteSlide, 2500)
}

function comprobarExisteEmail() {
    let miEmail = localStorage.getItem("email")
    if (!miEmail) {
        mostrarBotonesSesion(false)
        return
    }

    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "./PHP/redireccion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("existe", miPeticion.responseText)
            if (miPeticion.responseText === "0") {
                mostrarBotonesSesion(false)
            } else {
                comprobarEsAdmin()
            }
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let datos = "comprobarExisteEmail=" + miEmail
    miPeticion.send(datos)
}

function comprobarEsAdmin() {
    let miEmail = localStorage.getItem("email")
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "./PHP/redireccion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("es admin: ", miPeticion.responseText)
            if (miPeticion.responseText === "1") {
                mostrarBotonesSesion(true)
                document.getElementById("btnAdministrador").style.display = "block"
            } else {
                mostrarBotonesSesion(true)
                document.getElementById("btnAdministrador").style.display = "none"
            }
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let datos = "comprobarEsAdmin=" + miEmail
    console.log(datos)
    miPeticion.send(datos)
}

function mostrarBotonesSesion(haIniciadoSesion) {
    if (haIniciadoSesion) {
        document.getElementById("btnIniciarSesion").style.display = "none"
        document.getElementById("btnCerrarSesion").style.display = "block"
        document.getElementById("btnHistorialPedidos").style.display = "block"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "./paginas_usuarios/usuario/cesta.html"
        }
    } else {
        document.getElementById("btnIniciarSesion").style.display = "block"
        document.getElementById("btnCerrarSesion").style.display = "none"
        document.getElementById("btnHistorialPedidos").style.display = "none"
        document.getElementById("btnAdministrador").style.display = "none"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "./paginas_usuarios/login.html"
        }
    }
}
