window.onload = principal

document.addEventListener("DOMContentLoaded", function() {
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
        window.location.href = "./usuario/menu.html"
    }
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "./usuario/vinos.html"
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

    document.getElementById("btnCesta").onclick = function() {
        window.location.href = "./usuario/cesta.html"
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "./historial_pedidos.html"
    }

    document.getElementById("btnAdminPedidos").onclick = function() {
        window.location.href = "./admin/admin_gestion_pedidos.html"
    }

    document.getElementById("btnAdminUsuarios").onclick = function() {
        window.location.href = "./admin/admin_gestion_usuarios.html"
    }

    document.getElementById("btnCerrarSesion").onclick = function() {
        localStorage.clear()
        window.location.href = "../index.html"
    }
})

function principal() {
    comprobarExisteEmail()
    fechasDefecto()

    let miBoton = document.getElementById("btnBuscar")
    miBoton.addEventListener("click", manejadorClickBuscar)

    recuperarHistorico() // Llama a recuperarHistorico sin retornar nodo
}

function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta)
    if (texto !== undefined) {
        let contenido = document.createTextNode(texto)
        elementoNuevo.appendChild(contenido)
    }
    if (atributos !== undefined) {
        for (let clave in atributos) {
            elementoNuevo.setAttribute(clave, atributos[clave])
        }
    }
    return elementoNuevo
}

function dibujarHistorico(datosPedido) {
    // console.log("dibujando fila: ", datosPedido)
    let miFila = crearElemento("ul", undefined, {"id": "solicitud" + datosPedido.id, "class": "padre"})
    if (datosPedido.entregado == 1) {
        miEstado = crearElemento("li", "Ya se ha recogido el pedido", {"class": "circle"})
        miFila.appendChild(miEstado)
        fecha_recogida = crearElemento("li", datosPedido.fecha_recogida, {"class": "fecha"})
        miFila.appendChild(fecha_recogida)
    } else if (datosPedido.entregado == 0) {
        miEstado = crearElemento("li", "No se ha entregado todavía", {"class": "estadoMensaje circle2"})
        miFila.appendChild(miEstado)
    }
    let miFecha = crearElemento("li", datosPedido.fecha_pedido, {"class": "fecha"})
    miFila.appendChild(miFecha)
    let miDescripcion = crearElemento("li", datosPedido.producto, {"class": "producto"})
    miFila.appendChild(miDescripcion)
    let miCantidad = crearElemento("li", datosPedido.cantidad, {"class": "cantidad"})
    miFila.appendChild(miCantidad)
    let miUnidad = crearElemento("li", datosPedido.observaciones, {"class": "observacion"})
    miFila.appendChild(miUnidad)

    return miFila
}

function manejadorClickBuscar(e) {
    recuperarHistorico()
}

function recuperarHistorico() {
    let miDiv = document.getElementById("contenedor-historico")
    miDiv.innerHTML = ""
    let desde = document.getElementById("inFecha_desde").value
    let hasta = document.getElementById("inFecha_hasta").value
    hasta += " 23:59:59"

    obtenerSolicitudes(desde, hasta, function(respuesta) {
        respuesta = JSON.parse(respuesta)
        // recorro el JSON
        for (let i = 0; i < respuesta.length; i++) {
            // console.log(respuesta[i])
            miDiv.appendChild(dibujarHistorico(respuesta[i]))
        }
    })
}

function obtenerSolicitudes(desde, hasta, callback) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/usuario_historial.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(JSON.parse(miPeticion.responseText))
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datosPedido = {
        "desde": desde,
        "hasta": hasta,
        "emailUsuario": localStorage.getItem("email")
    }
    datosPedido = JSON.stringify(datosPedido)

    // console.log("datosPedido: ", datosPedido)
    let datos = "obtenerHistorico=" + datosPedido
    miPeticion.send(datos)
}

function fechasDefecto() {
    // Establecer fecha desde y hasta: Por defecto de hoy a hace un mes
    let hoy = new Date()
    let ultimoMes = new Date(hoy)

    ultimoMes.setMonth(hoy.getMonth() - 1)
    ultimoMes = ultimoMes.toISOString().split('T')[0]

    flatpickr("#inFecha_hasta", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d", // Formato de fecha
        defaultDate: "today", // Establece la fecha actual como predeterminada
        maxDate: "today",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            },
            months: {
                shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
        }
    })
    flatpickr("#inFecha_desde", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d", // Formato de fecha
        defaultDate: ultimoMes, // Establece la fecha actual como predeterminada
        maxDate: "today",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            },
            months: {
                shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
        }
    })
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
    if (haIniciadoSesion) {
        document.getElementById("btnIniciarSesion").style.display = "none"
        document.getElementById("btnCerrarSesion").style.display = "block"
        document.getElementById("btnHistorialPedidos").style.display = "block"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "./usuario/cesta.html"
        }
    } else {
        document.getElementById("btnIniciarSesion").style.display = "block"
        document.getElementById("btnCerrarSesion").style.display = "none"
        document.getElementById("btnHistorialPedidos").style.display = "none"
        document.getElementById("btnAdminPedidos").style.display = "none"
        document.getElementById("btnAdminUsuarios").style.display = "none"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "./login.html"
        }
    }
}
