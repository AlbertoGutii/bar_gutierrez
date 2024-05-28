window.onload = principal

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../../index.html"
    }

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../../index.html"
    }

    document.getElementById("btnAdminPedidos").onclick = function() {
        window.location.href = "./admin_gestion_pedidos.html"
    }

    document.getElementById("btnAdminUsuarios").onclick = function() {
        window.location.href = "./admin_gestion_usuarios.html"
    }

    document.getElementById("btnCerrarSesion").onclick = function() {
        localStorage.clear()
        window.location.href = "../../index.html"
    }
})

function principal() {
    comprobarExisteEmail()
    fechasDefecto()

    rellenarPedidos()
    let botonBuscar = document.getElementById("btnBuscar")
    botonBuscar.addEventListener("click",manejadorClickBuscar)
}

// ===========FUNCIONES GENERALES=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function comprobarExisteEmail() {
    let miEmail = localStorage.getItem("email")
    if (!miEmail) {
        mostrarBotonesSesion(false)
        return
    }

    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../../PHP/redireccion.php", true)

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

    miPeticion.open("POST", "../../PHP/redireccion.php", true)

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
        document.getElementById("btnCerrarSesion").style.display = "block"
    } else {
        document.getElementById("btnCerrarSesion").style.display = "none"
        document.getElementById("btnAdminPedidos").style.display = "none"
        document.getElementById("btnAdminUsuarios").style.display = "none"
    }
}

function fechasDefecto() {
    //Establecer fecha desde y hasta: Por defecto de hoy a hace un mes
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
              longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
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
              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
              longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
          }
      })
    //   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}
function validarInputNumeros(elemento) {
    let regex = /^(\d+|\d*\.\d+)$/
    let valor = elemento.value
    if(regex.test(valor) || valor.substr(-1) === ".") {
        // comprobar que no haya mas de 2 puntos
        if((valor.match(/\./g) || []).length === 2) {
            elemento.value = valor.slice(0,-1)
        }
        // comprobar que no tengamos valor similar a 02
        if(valor.length >= 2 && valor[0] === "0") {
            elemento.value = valor.slice(1)
        }
        // Maximos decimales 3
        if(valor.split(".")[1] && valor.split(".")[1].length > 3) {
            elemento.value = valor.slice(0,-1)
        }
    } else {
        elemento.value = 0
    }
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========FUNCIONES GENERALES=========================================



// ===========FUNCIONES GENERADORAS=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta)
    if(texto !== undefined) {
        let contenido = document.createTextNode(texto)
        elementoNuevo.appendChild(contenido)
    }
    if(atributos !== undefined) {
        for(let clave in atributos) {
            elementoNuevo.setAttribute(clave, atributos[clave])
        }
    }
    return elementoNuevo
}

function rellenarPedidos(desde,hasta) {
    if(typeof(desde) === "undefined" && typeof(hasta) === "undefined") {
        // valores por defecto de fechas
        desde = document.getElementById("inFecha_desde").value
        hasta = document.getElementById("inFecha_hasta").value
    }
    // cargo los pedidos
    obtenerPedidos(desde,hasta, function(respuesta) {
        dibujarPedidos(respuesta)
        console.log(respuesta)
    })
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========FUNCIONES GENERADORAS=========================================



// ===========MANEJADORES=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar() {
    let desde = document.getElementById("inFecha_desde").value
    let hasta = document.getElementById("inFecha_hasta").value
    if(desde < hasta ) {
        rellenarPedidos(desde,hasta)
    } 
}

// function manejadorClickMostrarPedidos() {
//     console.log("Muestro Pedidos(llamo manejador)")
//     sessionStorage.setItem("dondeEstoy", "pedidos")
//     rellenarPedidos()
// }

function manejadorClickActualizarPedido(e) {
    console.log("actualizo estado(llamado manejador)")
    let contenedorPedido = this.parentElement.parentElement.parentElement.parentElement
    let idPedido = contenedorPedido.id.split("-")[1]
    let idEstado = this.className
    let liEstadoPedido = contenedorPedido.childNodes[4]
    console.log(idEstado)
    console.log(idPedido)
    console.log(liEstadoPedido)
    let datosPedido = {
        idPedido: idPedido,
        idEstado: idEstado
    }
    actualizarPedido(datosPedido, function(respuesta) {
        console.log("respuesta actualizar: ",respuesta)
        if(respuesta === "1") {
            obtenerEstado(idPedido, function(respuesta) {
                console.log("respuesta obtener estado: ",respuesta)
                liEstadoPedido.innerHTML = ""
                liEstadoPedido.innerHTML = "Estado: " + respuesta
                if(respuesta === "Recibido") {
                    liEstadoPedido.className = "recibido"
                } else if(respuesta === "Pendiente") {
                    liEstadoPedido.className = "pendiente"
                } else if(respuesta === "Completado") {
                    liEstadoPedido.className = "completado"
                } else {
                    liEstadoPedido.className = "cancelado"
                }
            })
        }
    })
    
}


function manejadorInputCantidad() {
    validarInputNumeros(this)
    console.log("cambio cantidad(llamado manejador)")
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========MANEJADORES=========================================



// ===========PETICIONES BD=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function obtenerPedidos(desde,hasta, callback) {
    let miPeticion = new XMLHttpRequest()
    miPeticion.open("POST", "../../PHP/admin_gestionPedidos.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("Respuesta Server Pedidos: ",JSON.parse(miPeticion.responseText))
            callback(JSON.parse(miPeticion.responseText))
            // console.log(miPeticion.responseText)
            // aqui estoy
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let misDatos = {
        "desde" : desde,
        "hasta" : hasta + " 23:59:59"
    }
    misDatos = JSON.stringify(misDatos)

    let datos = "obtenerPedidos=" + misDatos
    miPeticion.send(datos)
}

function actualizarPedido(datosSolicitud ,callback) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../../PHP/admin_gestionPedidos.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText)
            // console.log(JSON.parse(miPeticion.responseText))
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    datosSolicitud = JSON.stringify(datosSolicitud)
    let datos = "actualizarPedido=" + datosSolicitud
    miPeticion.send(datos)
}

function obtenerEstado(datosSolicitud ,callback) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../../PHP/admin_gestionPedidos.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText)
            // console.log(JSON.parse(miPeticion.responseText))
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datos = "obtenerEstado=" + datosSolicitud
    miPeticion.send(datos)
}

function obtenerEstados(callback) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../../PHP/admin_gestionPedidos.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText)
            // console.log(JSON.parse(miPeticion.responseText))
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datos = "obtenerEstados="
    miPeticion.send(datos)
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========PETICIONES BD=========================================

// ===========FUNCIONES DIBUJAR=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function dibujarPedidos(jsonPedidos) {
    // contenedor de pedidos
    let divPedidos = document.getElementById('contenedor-pedidos')
    divPedidos.innerHTML = ""
    console.log("dibujos algo:",jsonPedidos)
    for (let fecha in jsonPedidos) {
        console.log('Fecha:', fecha)
        let divFecha = crearElemento("div",undefined)
        let h2Fecha = crearElemento("h2", "Pedidos del " + fecha)
        divFecha.appendChild(h2Fecha)
        
        // Recorrer los usuarios y sus pedidos para cada fecha
        for (let idUsuario in jsonPedidos[fecha]) {
            let ulUsuario = crearElemento("ul",undefined, {"class" : "ulUsuario"})
            let usuario = jsonPedidos[fecha][idUsuario]
            let liNombre = crearElemento("li","Pedidos de: " + usuario.usuario)
            let liPedidos = crearElemento("li",undefined)


            // console.log('Id Usuario:', usuario.idUsuario)
            // console.log('Usuario:', usuario.usuario)
    
            // Recorrer los pedidos para cada usuario
            usuario.pedidos.forEach(pedido => {
                let ulPedido = crearElemento("ul",undefined, {"id":"pedido-" + pedido.idPedido})
                let liProducto = crearElemento("li", 'Producto: ' + pedido.producto)
                let liCantidad = crearElemento("li", 'Cantidad: ' + pedido.cantidad)
                let liPrecio = crearElemento("li", 'Precio: ' + pedido.precio)
                let liObservaciones = crearElemento("li", 'Observaciones: ' + pedido.observaciones)
                
                let liSuEstado = crearElemento("li", "Estado: " + pedido.estado)
                if(pedido.estado === "Pendiente") {
                    liSuEstado.className = "pendiente"
                } else if(pedido.estado === "Completado") {
                    liSuEstado.className = "completado"
                } else {
                    liSuEstado.className = "cancelado"
                }
                // lista de botones de estado pedido
                let liEstados = crearElemento("li",undefined)
                let ulBotonesEstados = crearElemento("ul",undefined,{"class" : "ulEstados"})
                
                obtenerEstados(function(respuesta) {
                    respuesta = JSON.parse(respuesta)
                    for(let i = 0; i < respuesta.length; i++) {
                        let liEstado = crearElemento("li",undefined)
                        let botonEstado = crearElemento("input", respuesta[i].estado,{
                            "type" : "button",
                            "class" : respuesta[i].idEstado,
                            "value" : respuesta[i].estado
                        })
                        botonEstado.addEventListener("click",manejadorClickActualizarPedido)
                        liEstado.appendChild(botonEstado)
                        ulBotonesEstados.appendChild(liEstado)
                    }
                })
                liEstados.appendChild(ulBotonesEstados)

                ulPedido.appendChild(liProducto)
                ulPedido.appendChild(liCantidad)
                ulPedido.appendChild(liPrecio)
                ulPedido.appendChild(liObservaciones)
                ulPedido.appendChild(liSuEstado)
                ulPedido.appendChild(liEstados)
                liPedidos.appendChild(ulPedido)
            })
            ulUsuario.appendChild(liNombre)
            ulUsuario.appendChild(liPedidos)
            divFecha.appendChild(ulUsuario)
        }

        divPedidos.appendChild(divFecha)
    }
}

function dibujarModal(idModal, titulo,elementosCuerpo,elementosFooter) {
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"})
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"})
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"})
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"})
    let modalTitulo = crearElemento("h1", titulo, {"class" : "modal-title"})
    let modalCierre = crearElemento("button",undefined,{
        "type" : "button",
        "class" : "btn-close",
        "data-bs-dismiss" : "modal",
        "aria-label" : "Close"
    })
    modalHeader.appendChild(modalTitulo)
    modalHeader.appendChild(modalCierre)
    // Contenido Body
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let modalBody = crearElemento("div",undefined, {"class": "modal-body"})

    if(elementosCuerpo !== undefined) {
        modalBody.appendChild(elementosCuerpo)
    }

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"})
    if(elementosFooter !== undefined) {
        modalFooter.appendChild(elementosFooter)
    }

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)
    modalDialog.appendChild(modalContent)
    miDiv.appendChild(modalDialog)

    return miDiv
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========FUNCIONES DIBUJAR=========================================
