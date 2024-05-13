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
    let productos = recuperarProductos()
    document.body.appendChild(productos)
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
    let miFila = crearElemento("ul",undefined, {"id" : datosProducto.id});
    let filita = crearElemento("li",undefined);

    let papelera = crearElemento("a",undefined,{"href":"#"});
    let imgPapelera = crearElemento("img",undefined, {
        "class" : "imgPapelera",
        "src" : "../../Imagenes/papelera-de-reciclaje-blanca.png",
        "alt" : '<a href="https://www.flaticon.es/iconos-gratis/papelera-de-reciclaje" title="papelera de reciclaje iconos">Papelera de reciclaje iconos creados por lakonicon - Flaticon</a>'
    });
    
    
    let foto = crearElemento("li",undefined);    
    foto.appendChild(crearElemento("img",undefined,{"src" :"../../Imagenes/" + datosProducto.foto, "id":"foto_producto"}));   
    miFila.appendChild(foto);
    let descripcion = crearElemento("li",datosProducto.nombre, {"id":"nombre_producto"});
    miFila.appendChild(descripcion);
    let filita_1 = crearElemento("li",undefined);
    let boton_2 = crearElemento("input",undefined,{"type":"button","value":"-", "id":"btnRestar"});
    // cantidad tipo input para poder cambiar el valor a mano
    let cantidad =  crearElemento("input",undefined,{
        "type" : "text",
        "id":"cantidad_producto" + datosProducto.id,
        "placeholder" : datosProducto.cantidad,
        "value" : datosProducto.cantidad
    });
    let boton_3 = crearElemento("input",undefined,{"type":"button","value":"+", "id":"btnSumar"});
    // eventos de botones e input
    cantidad.addEventListener("input",manejadorInputCantidad);
    papelera.addEventListener("click",manejadorClickPapelera);
    boton_2.addEventListener("click",manejadorClickRestar);
    boton_3.addEventListener("click",manejadorClickSumar);
    filita_1.appendChild(boton_2);
    filita_1.appendChild(cantidad);
    filita_1.appendChild(boton_3);
    miFila.appendChild(filita_1);
    let unidades = crearElemento("li",datosProducto.unidad, {"id":"unidad_producto"});  
    miFila.appendChild(unidades);    
    // todos los productos van a tener observaciones
    let observaciones = crearElemento("li",datosProducto.observaciones, {"id":"observaciones_producto"});    
    miFila.appendChild(observaciones);
    papelera.appendChild(imgPapelera);
    filita.appendChild(papelera);
    miFila.appendChild(filita);
    return miFila;
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