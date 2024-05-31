window.onload = principal

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../../index.html"
    }

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../../index.html"
    }
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "../../paginas_usuarios/usuario/carta.html"
    }
    
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../../paginas_usuarios/usuario/menu.html"
    }
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../../paginas_usuarios/usuario/vinos.html"
    }

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../../contacto.html"
    }
    
    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "../../reserva.html"
    }
    
    document.getElementById("btnIniciarSesion").onclick = function() {
        window.location.href = "../login.html"
    }

    document.getElementById("btnCesta").onclick = function() {
        window.location.href = "./cesta.html"
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "../historial_pedidos.html"
    }

    document.getElementById("btnAdminPedidos").onclick = function() {
        window.location.href = "../admin/admin_gestion_pedidos.html"
    }

    document.getElementById("btnAdminUsuarios").onclick = function() {
        window.location.href = "../admin/admin_gestion_usuarios.html"
    }

    document.getElementById("btnCerrarSesion").onclick = function() {
        localStorage.clear()
        window.location.href = "../../index.html"
    }
})
//* Función principal
function principal() {
    comprobarExisteEmail()

    let container = document.getElementById("container")
    let productosNode = recuperarPedido()
    console.log(productosNode)
    container.appendChild(productosNode)
}

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

// Función para dibujar el modal de resumen de pedido
function dibujarModalResumenPedido(productos) {
    // Crear contenedor principal del modal
    let miDiv = crearElemento("div", undefined, { "id": "modalResumen-pedido", "class": "modal" });
    let modalDialog = crearElemento("div", undefined, { "class": "modal-dialog" });
    let modalContent = crearElemento("div", undefined, { "class": "modal-content" });

    // Contenido Header
    let modalHeader = crearElemento("div", undefined, { "class": "modal-header" });
    let modalTitulo = crearElemento("h1", "Resumen de Pedido", { "class": "modal-title" });
    let modalCierre = crearElemento("button", undefined, {
        "type": "button",
        "class": "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });
    modalHeader.appendChild(modalTitulo);
    modalHeader.appendChild(modalCierre);

    // Contenido Body
    let modalBody = crearElemento("div", undefined, { "class": "modal-body" });

    // Pregunta de Confirmación
    let confirmacion = crearElemento("h4", "¿Estás seguro que quieres realizar el siguiente pedido?");
    modalBody.appendChild(confirmacion);

    // Lista de Productos
    let listaProductos = crearElemento("div", undefined, { "id": "listaProductos" });

    // Añadir productos dinámicamente
    let precioTotal = 0;
    productos.forEach(producto => {
        let productoElemento = crearElemento("h5", `${producto.nombre}: ${producto.cantidad} unidades => ${producto.precio * producto.cantidad} €`, { "class": "producto" });
        listaProductos.appendChild(productoElemento);
        precioTotal += producto.precio * producto.cantidad;
    });
    modalBody.appendChild(listaProductos);

    // Precio Total
    let totalElemento = crearElemento("h5", `Total: ${precioTotal} €`, { "id": "precioTotal" });
    modalBody.appendChild(totalElemento);

    // Contenido Footer
    let modalFooter = crearElemento("div", undefined, { "class": "modal-footer" });

    // Botones de Confirmación
    let btnConfirmarPedido = crearElemento("button", "Confirmar Pedido", {
        "type": "button",
        "class": "btn btn-primary",
        "id": "btnConfirmarPedido",
        "data-bs-dismiss": "modal",
    });
    let btnCancelarPedido = crearElemento("button", "Cancelar", {
        "type": "button",
        "class": "btn btn-secondary",
        "id": "btnCancelarPedido",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });
    btnConfirmarPedido.addEventListener("click", manejadorClickRealizarPedido)
    modalFooter.appendChild(btnConfirmarPedido);
    modalFooter.appendChild(btnCancelarPedido);

    // Construir el modal completo
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);

    return miDiv;
}

function dibujarProductos(datosProducto) {
    let cardDiv = document.createElement("div")
    cardDiv.setAttribute("id", datosProducto.id)
    cardDiv.classList.add("carta")

    let imgDiv = document.createElement("div")
    imgDiv.classList.add("card-img")
    let img = document.createElement("img")
    if (datosProducto.foto === "foto") {
        img.setAttribute("src", "../../imagenes/pagina/coming_soon.jpg")
    } else {
        img.setAttribute("src", "../../imagenes/" + datosProducto.foto + ".png")
    }
    img.setAttribute("class", "foto_producto")
    img.setAttribute("alt", datosProducto.nombre)
    imgDiv.appendChild(img)
    cardDiv.appendChild(imgDiv)

    let infoDiv = document.createElement("div")
    infoDiv.classList.add("card-info")
    let titlePara = document.createElement("p")
    titlePara.classList.add("text-title")
    titlePara.setAttribute("id", "nombre_producto")
    
    // Botón de popover
    let popoverButton = document.createElement("button")
    popoverButton.setAttribute("type", "button")
    popoverButton.classList.add("btn", "btn-secondary")
    popoverButton.setAttribute("data-bs-container", "body")
    popoverButton.setAttribute("data-bs-toggle", "popover")
    popoverButton.setAttribute("data-bs-placement", "bottom")
    popoverButton.setAttribute("data-bs-trigger", "hover")
    popoverButton.setAttribute("data-bs-content", datosProducto.descripcion)
    popoverButton.textContent = datosProducto.nombre

    titlePara.appendChild(popoverButton)
    infoDiv.appendChild(titlePara)
    cardDiv.appendChild(infoDiv)

    let decreaseButton = document.createElement("input")
    decreaseButton.setAttribute("type", "button")
    decreaseButton.setAttribute("value", "-")
    decreaseButton.setAttribute("id", "btnRestar")
    decreaseButton.classList.add("quantity-button")
    decreaseButton.addEventListener("click", manejadorClickRestar)
    cardDiv.appendChild(decreaseButton)

    let quantityInput = document.createElement("input")
    quantityInput.setAttribute("type", "text")
    quantityInput.setAttribute("id", "cantidad_" + datosProducto.id)
    quantityInput.setAttribute("placeholder", datosProducto.cantidad)
    quantityInput.setAttribute("value", datosProducto.cantidad)
    quantityInput.classList.add("card-quantity")
    quantityInput.addEventListener("input", manejadorInputCantidad)
    cardDiv.appendChild(quantityInput)

    let increaseButton = document.createElement("input")
    increaseButton.setAttribute("type", "button")
    increaseButton.setAttribute("value", "+")
    increaseButton.setAttribute("id", "btnSumar")
    increaseButton.classList.add("quantity-button")
    increaseButton.addEventListener("click", manejadorClickSumar)
    cardDiv.appendChild(increaseButton)

    let footerDiv = document.createElement("div")
    footerDiv.classList.add("card-footer")
    let priceSpan = document.createElement("span")
    priceSpan.classList.add("text-title")
    if (datosProducto.cantidad == 1) {
        priceSpan.textContent = datosProducto.precio + " €"
    }
    else if (datosProducto.cantidad > 1) {
        let cantidadTotal = datosProducto.precio * datosProducto.cantidad
        priceSpan.textContent = cantidadTotal + " €"
    }
    footerDiv.appendChild(priceSpan)

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("card-button")
    let deleteSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    deleteSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    deleteSVG.setAttribute("viewBox", "0 0 24 24")
    deleteSVG.setAttribute("width", "32")
    deleteSVG.setAttribute("height", "32")
    deleteSVG.setAttribute("color", "#000000")
    deleteSVG.setAttribute("fill", "none")
    let deletePath1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
    deletePath1.setAttribute("d", "M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5")
    deletePath1.setAttribute("stroke", "currentColor")
    deletePath1.setAttribute("stroke-width", "1.5")
    deletePath1.setAttribute("stroke-linecap", "round")
    let deletePath2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
    deletePath2.setAttribute("d", "M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5")
    deletePath2.setAttribute("stroke", "currentColor")
    deletePath2.setAttribute("stroke-width", "1.5")
    deletePath2.setAttribute("stroke-linecap", "round")
    let deletePath3 = document.createElementNS("http://www.w3.org/2000/svg", "path")
    deletePath3.setAttribute("d", "M9.5 16.5L9.5 10.5")
    deletePath3.setAttribute("stroke", "currentColor")
    deletePath3.setAttribute("stroke-width", "1.5")
    deletePath3.setAttribute("stroke-linecap", "round")
    let deletePath4 = document.createElementNS("http://www.w3.org/2000/svg", "path")
    deletePath4.setAttribute("d", "M14.5 16.5L14.5 10.5")
    deletePath4.setAttribute("stroke", "currentColor")
    deletePath4.setAttribute("stroke-width", "1.5")
    deletePath4.setAttribute("stroke-linecap", "round")
    deleteSVG.appendChild(deletePath1)
    deleteSVG.appendChild(deletePath2)
    deleteSVG.appendChild(deletePath3)
    deleteSVG.appendChild(deletePath4)
    deleteButton.addEventListener("click", manejadorClickPapelera)
    deleteButton.appendChild(deleteSVG)
    footerDiv.appendChild(deleteButton)
    cardDiv.appendChild(footerDiv)

    // Inicializar popover
    $(function () {
        $('[data-bs-toggle="popover"]').popover()
    })

    return cardDiv
}

function enviarProductos(callback)
{
    let miPeticion = new XMLHttpRequest()

    miPeticion.onreadystatechange = function () {
        if(miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(miPeticion.responseText)
            callback(miPeticion.responseText)
        }   
    }

    miPeticion.open("POST","../../PHP/usuario_cesta.php",true)
    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let productos = localStorage.getItem('productos')
    miPeticion.send("productos=" + productos)
}

function recuperarPedido(longitud) {
    let miDiv = document.getElementById("contenedor-productos")
    let container = document.getElementById("container")
    if (miDiv) 
    {
        if (localStorage.getItem("productos") !== null) 
        {
            miDiv.innerHTML = ""
            enviarProductos(function(respuesta) 
            {
                respuesta = JSON.parse(respuesta)
                console.log(respuesta)
                for (let i = 0; i < respuesta.length; i++) 
                {
                    miDiv.appendChild(dibujarProductos(respuesta[i]))
                }
                if (Object.keys(respuesta).length > 0) 
                {
                    let divPagar = crearElemento("div", undefined, { "id": "divPagar" })
                    let inObservaciones = crearElemento("textarea", undefined, {
                        "rows": "4",
                        "cols": "50",
                        "id": "inObservaciones",
                        "placeholder": "Sin observaciones"
                    })
                    let botonPedido = crearElemento("button", "Realizar Pedido", {
                        "type": "button",
                        "id": "btnPedido",
                        "class": "btn_bonito"
                    })
                    // Cambio aquí: pasar una referencia a la función manejadorResumenPedido
                    botonPedido.addEventListener("click", function() { manejadorResumenPedido(respuesta) })
                    divPagar.appendChild(inObservaciones)
                    divPagar.appendChild(botonPedido)
                    container.appendChild(divPagar)
                }
            })
            return miDiv
        } else {
            miDiv.innerHTML = ""
            return miDiv
        }
    } else {
        console.error("El elemento con ID 'contenedor-productos' no se encontró en el DOM.")
        return document.createElement("div")
    }
}


function manejadorResumenPedido(respuesta) {
    // Crear y añadir el modal al DOM
    let modalElement = dibujarModalResumenPedido(respuesta);
    document.body.appendChild(modalElement);

    // Inicializar el modal de Bootstrap
    let modalResumenPedido = new bootstrap.Modal(modalElement);

    // Mostrar el modal
    modalResumenPedido.show();
}

function cerrarModales() {
    $('#modal-Add-Usuario').modal('hide')
    $('#modalAdd-seguro').modal('hide')
}

function validarInputNumeros(elemento) {
    let regex = /^\d+$/
    let valor = elemento.value
    console.log(valor)

    if (regex.test(valor)) {
        if (valor.length >= 2 && valor[0] === "0") {
            elemento.value = valor.slice(1)
        }
    } 
    else 
    {
        elemento.value = 0
    }
}

function crearPedido(callback) {
    // enviar a PHP
    let miPeticion = new XMLHttpRequest()

    miPeticion.onreadystatechange = function () {
        if(miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(miPeticion.responseText)
            callback(miPeticion.responseText)
        }   
    }

    miPeticion.open("POST","../../PHP/usuario_cesta.php",true)
    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let productos = localStorage.getItem('productos')
    let observaciones = document.getElementById("inObservaciones")
    if(observaciones.value === '') {
        observaciones.value = observaciones.placeholder
    }
    
    let misDatos = {
        "email" : localStorage.getItem("email"),
        "productos" : JSON.parse(productos),
        "observaciones" : observaciones.value
    }
    misDatos = JSON.stringify(misDatos)
    miPeticion.send("crearPedido=" + misDatos)
}

function manejadorInputCantidad() {
    validarInputNumeros(this)
}

function manejadorClickSumar() {
    let inputCantidad = this.parentElement.querySelector('.card-quantity')
    let cantidad = parseFloat(inputCantidad.value)
    inputCantidad.value = cantidad + 1
}

function manejadorClickRestar() {
    let inputCantidad = this.parentElement.querySelector('.card-quantity')
    let cantidad = parseFloat(inputCantidad.value)
    if (cantidad > 0) {
        inputCantidad.value = cantidad - 1
    }
}

function manejadorClickPapelera() {
    console.log("Click en papelera detectado.")
    let cardDiv = this.closest('.card')
    if (!cardDiv) return

    let idProducto = cardDiv.id

    // Eliminar el producto del DOM
    cardDiv.remove()

    // Eliminar el producto del almacenamiento local
    let productosString = localStorage.getItem("productos")
    if (productosString) {
        let productosJSON = JSON.parse(productosString)
        console.log("Eliminando producto del almacenamiento local:", idProducto)
        delete productosJSON[idProducto]

        // Actualizar el almacenamiento local
        productosString = JSON.stringify(productosJSON)
        localStorage.setItem("productos", productosString)

        // Si el carrito está vacío, limpiar el contenedor de productos
        if (Object.keys(productosJSON).length === 0) {
            document.getElementById("contenedor-productos").innerHTML = ""
        }
    }
}

function manejadorClickRealizarPedido() {
    let cardsProductos = document.getElementById("contenedor-productos").querySelectorAll(".card")
    let productosString = localStorage.getItem("productos")
    let productosJSON = JSON.parse(productosString) 
    for(let i = 0; i< cardsProductos.length; i++) {
        let cardProducto = cardsProductos[i]
        let idProducto = cardProducto.id
        let cantidadNueva = cardProducto.querySelector("#cantidad_" + idProducto).value
        console.log("Cantidad: ",cantidadNueva)
        if(cantidadNueva.substr(-1) === ".") {
            cantidadNueva = cantidadNueva.slice(0,-1)
        }

        productosJSON[idProducto].cantidad = cantidadNueva
        productosString = JSON.stringify(productosJSON)
        localStorage.setItem("productos", productosString)
    }
    crearPedido(function(respuesta) {
        if(respuesta === "1") {
            cerrarModales()
            console.log("se hizo el pedido")
            localStorage.removeItem("productos")
            window.location.href = "../../index.html"
        } else {
            console.log("no se pudo hacer el pedido")
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
        document.getElementById("btnIniciarSesion").style.display = "none"
        document.getElementById("btnCerrarSesion").style.display = "block"
        document.getElementById("btnHistorialPedidos").style.display = "block"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "./cesta.html"
        }
    } else {
        document.getElementById("btnIniciarSesion").style.display = "block"
        document.getElementById("btnCerrarSesion").style.display = "none"
        document.getElementById("btnHistorialPedidos").style.display = "none"
        document.getElementById("btnAdminPedidos").style.display = "none"
        document.getElementById("btnAdminUsuarios").style.display = "none"
        document.getElementById("btnCesta").onclick = function() {
            window.location.href = "../login.html"
        }
    }
}