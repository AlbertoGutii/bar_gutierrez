window.onload = principal

// CAMBIAR RUTA DE LOS BOTONES
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../index.html"
    }

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../index.html"
    }
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "../paginas_carta/carta.html"
    }
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../paginas_carta/menu.html"
    }
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../paginas_carta/vinos.html"
    }

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../contacto.html"
    }

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "../reserva.html"
    }
})

//* funcion principal
function principal() {
    recuperarProductos()
}

//* funcion para crear elementos
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

//* funcion para obtener los productos de la base de datos
function obtenerProductos(callback)
{
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST","../PHP/gestionar-carta.php", true)

    miPeticion.onreadystatechange = function() {
        if(miPeticion.readyState == 4 && miPeticion.status == 200)
        {
            // console.log(miPeticion.responseText)
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datos = "obtenerProductos="
    
    miPeticion.send(datos)
}

//* funcion que dibuja los productos en el html
function dibujarProductos(datosProducto) {
    let miFila = crearElemento("ul",undefined)
    let foto = crearElemento("li",undefined)    
    foto.appendChild(crearElemento("img",undefined,{"src" : "../imagenes/" + datosProducto.foto + ".png", "class":"foto_producto"}))   
    miFila.appendChild(foto)
    let nombre = crearElemento("li",datosProducto.nombre, {"id":"nombre_producto"})
    miFila.appendChild(nombre)
    let descripcion = crearElemento("li",datosProducto.descripcion, {"id":"descripcion_producto"})
    miFila.appendChild(descripcion)
    let categoria = crearElemento("li",datosProducto.categoria, {"id":"categoria_producto"})
    miFila.appendChild(categoria)
    let precio = crearElemento("li",datosProducto.precio, {"id":"precio_producto"})
    miFila.appendChild(precio)
    //? INPUT para introducir cantidad
    let filita_1 = crearElemento("li",undefined)
    let caja_texto = crearElemento("input",undefined,{"type":"text","id":"cantidad_"+datosProducto.id,"step":"0.001", "min":"0"})
    caja_texto.addEventListener("input",manejadorInputCantidad)
    filita_1.appendChild(caja_texto)
    miFila.appendChild(filita_1)
    //? Boton Añadir producto
    let filita_2 = crearElemento("li",undefined)
    let boton_2 = crearElemento("input",undefined,{"type":"button","value":"Añadir a la cesta"})
    let parrafo = crearElemento("p","",{"id":"errores_"+datosProducto.id})
    boton_2.addEventListener("click", function() {
        manejadorClickAñadirProducto(datosProducto.id)
    })
    filita_2.appendChild(boton_2)
    filita_2.appendChild(parrafo)
    miFila.appendChild(filita_2)
    return miFila
}

//* funcion para recuperar los productos del php
function recuperarProductos() {
    let miDiv = document.getElementById("contenedor-productos")
    // vaciamos el div
    miDiv.innerHTML = ""
    

    obtenerProductos(function(respuesta) {
        console.log(respuesta)
        respuesta = JSON.parse(respuesta)
        // recorro el JSON
        for(let i = 0; i<respuesta.length; i++)
        {
            miDiv.appendChild(dibujarProductos(respuesta[i]))
        }
        document.body.appendChild(miDiv)
    })
}

//* funcion para almacenar productos en el localStorage
function almacenarProductos(idProducto, miCantidad)
{
    // console.log("ID: "+idProducto)
    // console.log("Cantidad: "+miCantidad)
    // verificimos si existe productos en el localStorage
    let productos
    if (localStorage.getItem('productos') !== null && localStorage.getItem('productos') !== undefined) 
    {
        productos = JSON.parse(localStorage.getItem('productos'))
    }
    else 
    {
        productos = {}
    }

    // verificamos si el producto ya existe en el objeto 'productos'
    if(productos.hasOwnProperty(idProducto))
    {
        // sumamos
        productos[idProducto].cantidad = parseInt(productos[idProducto].cantidad) + parseInt(miCantidad)
    }
    else 
    {
        productos[idProducto] = {
            id : idProducto,
            cantidad : miCantidad
        }
    }

    // Almacenamos el objeto
    localStorage.setItem('productos', JSON.stringify(productos))
    // para que el cajon de texto vuelve a esta vacio
    document.getElementById("cantidad_"+idProducto).value = ""
}

//? ---- MANEJADORES ----
//* manejadorInputCantidad 
function manejadorInputCantidad() {
    validarInputNumeros(this)
}

//* validar numeros
function validarInputNumeros(valor) {
    if (!isNaN(valor) && parseFloat(valor) > 0) 
    {
        return true
    } 
    else 
    {
        return false
    }
}

function manejadorClickAñadirProducto(idProducto)
{
    let miCantidad = document.getElementById("cantidad_"+idProducto).value
    if (miCantidad === "" || miCantidad === null) 
    {
        console.log("PRODUCTO NO AÑADIDO")
    } 
    else 
    {   
        //* ESTILO MENSAJE DE ERRORES
        // almacenarProductos(idProducto, miCantidad)
        console.log("PRODUCTO AÑADIDO")
        
    }
}