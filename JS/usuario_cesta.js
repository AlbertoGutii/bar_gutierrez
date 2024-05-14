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
})

//* funcion principal
function principal() {
    let productos = recuperarPedido()
    document.body.appendChild(productos)
    // recuperarPedido()
}

function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta);
    if(texto !== undefined) {
        let contenido = document.createTextNode(texto);
        elementoNuevo.appendChild(contenido);
    }
    if(atributos !== undefined) {
        for(let clave in atributos) {
            elementoNuevo.setAttribute(clave, atributos[clave]);
        }
    }
    return elementoNuevo;
}

function dibujarProductos(datosProducto) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Imagen del producto
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("card-img");
    let img = document.createElement("img");
    if (datosProducto.foto === "foto") {
        img.setAttribute("src", "../../imagenes/pagina/coming_soon.jpg");
    } else {
        img.setAttribute("src", "../../imagenes/" + datosProducto.foto + ".png");
    }
    img.setAttribute("class", "foto_producto");
    img.setAttribute("alt", datosProducto.nombre);
    imgDiv.appendChild(img);
    cardDiv.appendChild(imgDiv);

    // Información del producto
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("card-info");
    let titlePara = document.createElement("p");
    titlePara.classList.add("text-title");
    titlePara.setAttribute("id", "nombre_producto");
    titlePara.textContent = datosProducto.nombre;

    // Verificar si la descripción es null
    if (datosProducto.descripcion !== null) {
        let bodyPara = document.createElement("p");
        bodyPara.classList.add("text-body");
        bodyPara.textContent = datosProducto.descripcion;
        infoDiv.appendChild(bodyPara);
    }
    
    cardDiv.appendChild(infoDiv);

    // Cantidad del producto
    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("placeholder", "Cantidad");
    quantityInput.setAttribute("id", "cantidad_" + datosProducto.id);
    quantityInput.classList.add("card-quantity");
    cardDiv.appendChild(quantityInput);

    // Precio y botón
    let footerDiv = document.createElement("div");
    footerDiv.classList.add("card-footer");
    let priceSpan = document.createElement("span");
    priceSpan.classList.add("text-title");
    priceSpan.textContent = datosProducto.precio + " €";
    footerDiv.appendChild(priceSpan);

    let buttonDiv = document.createElement("button");
    buttonDiv.classList.add("card-button");
    buttonDiv.addEventListener("click", function() {
        manejadorClickAñadirProducto(datosProducto.id);
    });

    let svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("class", "svg-icon");
    svgIcon.setAttribute("viewBox", "0 0 20 20");
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z");
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z");
    let path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z");
    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);
    svgIcon.appendChild(path3);
    buttonDiv.appendChild(svgIcon);
    footerDiv.appendChild(buttonDiv);
    cardDiv.appendChild(footerDiv);

    // console.log(cardDiv);
    return cardDiv;
}


function enviarProductos(callback)
{
    // enviar a PHP
    let miPeticion = new XMLHttpRequest();

    miPeticion.onreadystatechange = function () {
        if(miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(miPeticion.responseText);
            callback(miPeticion.responseText);
        }   
    }

    miPeticion.open("POST","../../PHP/usuario_cesta.php",true);
    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let productos = localStorage.getItem('productos');
    miPeticion.send("productos=" + productos);
}

//* recuperar productos
function recuperarPedido(longitud)
{
    let miDiv = document.getElementById("contenedor-productos");
    if(localStorage.getItem("productos") !== null) {
        // vaciamos el div
        // miDiv.innerHTML = "";
    
        enviarProductos(function(respuesta) {
            respuesta = JSON.parse(respuesta);
            // recorro el JSON
            // let miDiv = document.getElementById("contenedor-productos");
            for(let i = 0; i<respuesta.length; i++)
            {
                miDiv.appendChild(dibujarProductos(respuesta[i]));
            }
            if(Object.keys(respuesta).length > 0) {
                console.log(miDiv);
                let divPagar = crearElemento("div",undefined,{"id" : "divPagar"});
                let inObservaciones = crearElemento("textarea",undefined,{
                   "rows" : "4",
                   "cols": "50",
                    "id": "inObservaciones",
                    "placeholder" : "Sin observaciones"
                });
                let botonPedido = crearElemento("input",undefined,{
                    "type" : "button",
                    "value" : "Realizar Pedido",
                    "id" : "btnPedido",
                    "class" :"btn btn-primary"
                });
                botonPedido.addEventListener("click",manejadorClickRealizarPedido);
                divPagar.appendChild(inObservaciones);
                divPagar.appendChild(botonPedido);
                miDiv.appendChild(divPagar);
                console.log(miDiv);
            }
            document.body.appendChild(miDiv);
        });
    } else {
        miDiv.innerHTML = "";
    }
}

//* boton sumar cantidad
function manejadorClickSumar() {
    let inputCantidad = this.previousSibling;
    let cantidad = inputCantidad.value;
    inputCantidad.value = parseFloat(cantidad) + 1;
}

//* boton restar cantidad
function manejadorClickRestar() {
    let inputCantidad = this.nextSibling;
    let cantidad = parseFloat(inputCantidad.value);
    if(cantidad > 0) {
        inputCantidad.value = cantidad - 1;
    }
}

//* boton papelera
function manejadorClickPapelera() {
    let ulProducto = this.parentElement.parentElement;
    let idProducto = ulProducto.id;
    let productosString = localStorage.getItem("productos");
    let productosJSON = JSON.parse(productosString); 
    
    console.log(productosJSON);
    console.log(Object.keys(productosJSON).length);
    // Eliminar el producto
    delete productosJSON[idProducto];
    if(Object.keys(productosJSON).length === 0) {
        document.getElementById("contenedor-productos").innerHTML = "";
    }
    // Actualizar los productos
    productosString = JSON.stringify(productosJSON);
    localStorage.setItem("productos", productosString);
    ulProducto.remove();
}

//* funcion que realiza el pedido
function manejadorClickRealizarPedido() {
    let ulProductos = document.getElementById("contenedor-productos").querySelectorAll("ul");
    let productosString = localStorage.getItem("productos");
    let productosJSON = JSON.parse(productosString); 
    for(let i = 0; i < ulProductos.length;i++) {
        let producto = ulProductos[i];
        let idProducto = producto.id;
        let cantidadNueva = producto.querySelector("#cantidad_producto" + producto.id).value;
        // en caso de que el usuario haya dejado el campo como 23.
        if(cantidadNueva.substr(-1) === ".") {
            cantidadNueva = cantidadNueva.slice(0,-1);
        }

        // actualizar el localStorage
        productosJSON[idProducto].cantidad = cantidadNueva;
        productosString = JSON.stringify(productosJSON);
        localStorage.setItem("productos", productosString);
    }
    crearPedido(function(respuesta) {
        if(respuesta === "1") {
            console.log("se hizo el pedido");
            localStorage.removeItem("productos");
            recuperarPedido();
            window.location.href = "./usuario_carniceria.html";
        } else {
            console.log("no se pudo hacer el pedido");
        }
    });
}