window.onload = principal

document.addEventListener("DOMContentLoaded", function() {

    // Obtener el formulario
    const form = document.querySelector('.contact-form')

    // Añadir el evento submit al formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault() // Evitar el envío del formulario
        dibujarModal() // Llamar a la función para dibujar el modal
    })

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

    document.getElementById("btnAdminPedidos").onclick = function() {
        window.location.href = "./admin/admin_gestion_pedidos.html"
    }

    document.getElementById("btnAdminUsuarios").onclick = function() {
        window.location.href = "./admin/admin_gestion_usuarios.html"
    }

    document.getElementById("btnCerrarSesion").onclick = function() {
        localStorage.clear()
        window.location.href = "./index.html"
    }
})

function principal() {
    comprobarExisteEmail()
}

function dibujarModal() {
    // Crear elementos del modal
    const modalBackdrop = document.createElement('div')
    modalBackdrop.className = 'modal-backdrop'

    const modalContainer = document.createElement('div')
    modalContainer.className = 'modal-container'

    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'

    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'

    const modalTitle = document.createElement('h5')
    modalTitle.className = 'modal-title'
    modalTitle.textContent = 'Gracias por contactar'

    const modalBody = document.createElement('div')
    modalBody.className = 'modal-body'
    modalBody.textContent = 'Muchas gracias por contactar con nosotros. En breve recibirá una respuesta.'

    const modalFooter = document.createElement('div')
    modalFooter.className = 'modal-footer'

    const closeButton = document.createElement('button')
    closeButton.className = 'btn btn-secondary'
    closeButton.textContent = 'Cerrar'
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modalBackdrop)
        document.body.removeChild(modalContainer)
    })

    // Armar el modal
    modalHeader.appendChild(modalTitle)
    modalFooter.appendChild(closeButton)
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)
    modalContainer.appendChild(modalContent)
    document.body.appendChild(modalBackdrop)
    document.body.appendChild(modalContainer)

    document.head.appendChild(style)
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
                document.getElementById("btnAdminPedidos").style.display = "block"
                document.getElementById("btnAdminUsuarios").style.display = "block"
            } else {
                mostrarBotonesSesion(true)
                document.getElementById("btnAdminPedidos").style.display = "none"
                document.getElementById("btnAdminUsuarios").style.display = "none"
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
        document.getElementById("btnAdminPedidos").style.display = "none"
        document.getElementById("btnAdminUsuarios").style.display = "none"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "./paginas_usuarios/login.html"
        }
    }
}
