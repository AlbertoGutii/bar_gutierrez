// window.onload = principal

document.addEventListener("DOMContentLoaded", function() {
    principal()
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
})

//* Función principal
function principal() {
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

function dibujarProductos(datosProducto) {
    let cardDiv = document.createElement("div")
    cardDiv.setAttribute("id", datosProducto.id)
    cardDiv.classList.add("card")

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
    titlePara.textContent = datosProducto.nombre
    let bodyPara = document.createElement("p")
    bodyPara.classList.add("text-body")
    if(datosProducto.descripcion !== null)
    bodyPara.textContent = datosProducto.descripcion
    infoDiv.appendChild(titlePara)
    infoDiv.appendChild(bodyPara)
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
    priceSpan.textContent = datosProducto.precio + " €"
    footerDiv.appendChild(priceSpan)

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
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

// function recuperarPedido(longitud)
// {
//     let miDiv = document.getElementById("contenedor-productos")
//     if(localStorage.getItem("productos") !== null) {
//         // vaciamos el div
//         // miDiv.innerHTML = ""
    
//         enviarProductos(function(respuesta) {
//             respuesta = JSON.parse(respuesta)
//             // recorro el JSON
//             // let miDiv = document.getElementById("contenedor-productos")
//             for(let i = 0; i<respuesta.length; i++)
//             {
//                 miDiv.appendChild(dibujarProductos(respuesta[i]))
//             }
//             if(Object.keys(respuesta).length > 0) {
//                 console.log(miDiv)
//                 let divPagar = crearElemento("div",undefined,{"id" : "divPagar"})
//                 let inObservaciones = crearElemento("textarea",undefined,{
//                    "rows" : "4",
//                    "cols": "50",
//                     "id": "inObservaciones",
//                     "placeholder" : "Sin observaciones"
//                 })
//                 let botonPedido = crearElemento("input",undefined,{
//                     "type" : "button",
//                     "value" : "Realizar Pedido",
//                     "id" : "btnPedido",
//                     "class" :"btn btn-primary"
//                 })
//                 botonPedido.addEventListener("click",manejadorClickRealizarPedido)
//                 divPagar.appendChild(inObservaciones)
//                 divPagar.appendChild(botonPedido)
//                 miDiv.appendChild(divPagar)
//                 console.log(miDiv)
//             }
//             let container = document.getElementById("container")
//             container.appendChild(miDiv)
//         })
//     } else {
//         miDiv.innerHTML = ""
//     }
// }

function recuperarPedido(longitud) {
    let miDiv = document.getElementById("contenedor-productos")
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
                        "class": "btn"
                    })
                    botonPedido.addEventListener("click", manejadorClickRealizarPedido)
                    divPagar.appendChild(inObservaciones)
                    divPagar.appendChild(botonPedido)
                    miDiv.appendChild(divPagar)
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


// function manejadorClickSumar() {
//     let inputCantidad = this.previousSibling
//     let cantidad = inputCantidad.value
//     inputCantidad.value = parseFloat(cantidad) + 1
// }

// function manejadorClickRestar() {
//     let inputCantidad = this.nextSibling
//     let cantidad = parseFloat(inputCantidad.value)
//     if(cantidad > 0) {
//         inputCantidad.value = cantidad - 1
//     }
// }

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

// function manejadorClickPapelera() {
//     let cardDiv = this.closest('.card')
//     if (!cardDiv) return

//     let idProducto = cardDiv.getAttribute('data-producto-id')

//     // Eliminar el producto del DOM
//     cardDiv.remove()

//     // Eliminar el producto del almacenamiento local
//     let productosString = localStorage.getItem("productos")
//     if (productosString) {
//         let productosJSON = JSON.parse(productosString)
//         delete productosJSON[idProducto]

//         // Actualizar el almacenamiento local
//         productosString = JSON.stringify(productosJSON)
//         localStorage.setItem("productos", productosString)

//         // Si el carrito está vacío, limpiar el contenedor de productos
//         if (Object.keys(productosJSON).length === 0) {
//             document.getElementById("contenedor-productos").innerHTML = ""
//         }
//     }
// }

// function manejadorClickRealizarPedido() {
//     let ulProductos = document.getElementById("contenedor-productos").querySelectorAll("ul")
//     let productosString = localStorage.getItem("productos")
//     let productosJSON = JSON.parse(productosString) 
//     for(let i = 0; i < ulProductos.length; i++) {
//         let producto = ulProductos[i]
//         let idProducto = producto.id
//         let cantidadNueva = producto.querySelector("#cantidad_producto" + producto.id).value
//         if(cantidadNueva.substr(-1) === ".") {
//             cantidadNueva = cantidadNueva.slice(0,-1)
//         }

//         productosJSON[idProducto].cantidad = cantidadNueva
//         productosString = JSON.stringify(productosJSON)
//         localStorage.setItem("productos", productosString)
//     }
//     crearPedido(function(respuesta) {
//         if(respuesta === "1") {
//             console.log("se hizo el pedido")
//             localStorage.removeItem("productos")
//             recuperarPedido()
//             window.location.href = "./usuario_carniceria.html"
//         } else {
//             console.log("no se pudo hacer el pedido")
//         }
//     })
// }

function manejadorClickRealizarPedido() {
    let cardsProductos = document.getElementById("contenedor-productos").querySelectorAll(".card")
    let productosString = localStorage.getItem("productos")
    let productosJSON = JSON.parse(productosString) 
    for(let i = 0; i < cardsProductos.length; i++) {
        let cardProducto = cardsProductos[i]
        let idProducto = cardProducto.id
        let cantidadNueva = cardProducto.querySelector("#cantidad_" + idProducto).value
        if(cantidadNueva.substr(-1) === ".") {
            cantidadNueva = cantidadNueva.slice(0,-1)
        }

        productosJSON[idProducto].cantidad = cantidadNueva
        productosString = JSON.stringify(productosJSON)
        localStorage.setItem("productos", productosString)
    }
    crearPedido(function(respuesta) {
        if(respuesta === "1") {
            console.log("se hizo el pedido")
            localStorage.removeItem("productos")
            recuperarPedido()
            window.location.href = "./usuario_carniceria.html"
        } else {
            console.log("no se pudo hacer el pedido")
        }
    })
}
