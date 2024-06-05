window.onload = principal

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../index.html"
    }

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../index.html"
    }
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "../paginas_usuarios/usuario/carta.html"
    }

    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../paginas_usuarios/usuario/menu.html"
    }
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../paginas_usuarios/usuario/vinos.html"
    }

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../contacto.html"
    }

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "../reserva.html"
    }

    document.getElementById("btnIniciarSesion").onclick = function() {
        window.location.href = "../paginas_usuarios/login.html"
    }

    document.getElementById("btnCesta").onclick = function() {
        window.location.href = "../paginas_usuarios/usuario/cesta.html"
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "../paginas_usuarios/historial_pedidos.html"
    }

    document.getElementById("btnAdminPedidos").onclick = function() {
        window.location.href = "../paginas_usuarios/admin/admin_gestion_pedidos.html"
    }

    document.getElementById("btnAdminUsuarios").onclick = function() {
        window.location.href = "../paginas_usuarios/admin/admin_gestion_usuarios.html"
    }

    document.getElementById("btnCerrarSesion").onclick = function() {
        localStorage.clear()
        window.location.href = "../index.html"
    }
})

function principal() {
    comprobarExisteEmail()
}

function comprobarExisteEmail() {
    let miEmail = localStorage.getItem("email")
    if (!miEmail) {
        mostrarBotonesSesion(false)
        return
    }

    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/redireccion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("existe", miPeticion.responseText)
            if (miPeticion.responseText === "0") {
                mostrarBotonesSesion(false)
            } else {
                mostrarMensajeBienvenida(miEmail)
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

    miPeticion.open("POST", "../PHP/redireccion.php", true)

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
    const inicioSesion = document.getElementById("inicioSesion");
    const subMenuPerfil = document.getElementById("subMenuPerfil");
    const btnIniciarSesion = document.getElementById("btnIniciarSesion");
    const btnCerrarSesion = document.getElementById("btnCerrarSesion");
    const btnHistorialPedidos = document.getElementById("btnHistorialPedidos");
    const btnAdminPedidos = document.getElementById("btnAdminPedidos");
    const btnAdminUsuarios = document.getElementById("btnAdminUsuarios");
    const btnEliminarCuenta = document.getElementById("btnEliminarCuenta");
    const btnCesta = document.getElementById("btnCesta");

    if (haIniciadoSesion) {
        if (inicioSesion) inicioSesion.style.display = "none";
        if (subMenuPerfil) subMenuPerfil.style.display = "block";
        if (btnIniciarSesion) btnIniciarSesion.style.display = "none";
        if (btnCerrarSesion) btnCerrarSesion.style.display = "block";
        if (btnHistorialPedidos) btnHistorialPedidos.style.display = "block";
        if (btnEliminarCuenta) btnEliminarCuenta.style.display = "block";
        if (btnCesta) {
            btnCesta.onclick = function() {
                window.location.href = "../paginas_usuarios/usuario/cesta.html";
            };
        }
    } else {
        if (inicioSesion) inicioSesion.style.display = "block";
        if (subMenuPerfil) subMenuPerfil.style.display = "none";
        if (btnIniciarSesion) btnIniciarSesion.style.display = "block";
        if (btnCerrarSesion) btnCerrarSesion.style.display = "none";
        if (btnHistorialPedidos) btnHistorialPedidos.style.display = "none";
        if (btnAdminPedidos) btnAdminPedidos.style.display = "none";
        if (btnAdminUsuarios) btnAdminUsuarios.style.display = "none";
        if (btnEliminarCuenta) btnEliminarCuenta.style.display = "none";
        if (btnCesta) {
            btnCesta.onclick = function() {
                window.location.href = "../paginas_usuarios/login.html";
            };
        }
    }
}

function mostrarMensajeBienvenida(email) {
    let mensajeBienvenida = document.getElementById("welcomeMessage");
    let nombreUsuario = document.getElementById("userName");

    if (mensajeBienvenida && nombreUsuario) {
        mensajeBienvenida.style.display = "inline";
        nombreUsuario.innerText = email;
    }
}
