window.onload = principal

// CAMBIAR RUTA DE LOS BOTONES
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../index.html";
    };

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../index.html";
    };
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "../paginas_carta/carta.html";
    };
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../paginas_carta/menu.html";
    };
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../paginas_carta/vinos.html";
    };

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../contacto.html";
    };

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "../reserva.html";
    };
});


//* funcion principal
function principal() {
    const miDiv = recuperarVinos()

    document.body.appendChild(miDiv)
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

//* funcion para obtener los vinos de la base de datos
function obtenerVinos(callback)
{
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST","../PHP/gestionar-vino.php", true)

    miPeticion.onreadystatechange = function() {
        if(miPeticion.readyState == 4 && miPeticion.status == 200)
        {
            // console.log(miPeticion.responseText)
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datos = "obtenerVinos="
    
    miPeticion.send(datos)
}

//* funcion que dibuja los vinos en el html
function dibujarVinos(datosVino) {
    let miFila = crearElemento("ul",undefined)
    let foto = crearElemento("li",undefined)    
    foto.appendChild(crearElemento("img",undefined,{"src" : "../imagenes/" + datosVino.foto + ".png", "class":"foto_vino"}))   
    miFila.appendChild(foto)
    let nombre = crearElemento("li",datosVino.nombre, {"id":"nombre_vino"})
    miFila.appendChild(nombre)
    let categoria = crearElemento("li",datosVino.categoria, {"id":"categoria_vino"})
    miFila.appendChild(categoria)
    let precio = crearElemento("li",datosVino.precio + ' €', {"id":"precio_vino"})
    miFila.appendChild(precio)
    //? INPUT para introducir cantidad
    let filita_1 = crearElemento("li",undefined)
    let caja_texto = crearElemento("input",undefined,{"type":"text","id":"cantidad_"+datosVino.id,"step":"0.001", "min":"0"})
    caja_texto.addEventListener("input",manejadorInputCantidad)
    filita_1.appendChild(caja_texto)
    miFila.appendChild(filita_1)
    //? Boton Añadir vino
    let filita_2 = crearElemento("li",undefined)
    let boton_2 = crearElemento("input",undefined,{"type":"button","value":"Añadir a la cesta"})
    let parrafo = crearElemento("p","",{"id":"errores_"+datosVino.id})
    boton_2.addEventListener("click", function() {
        manejadorClickAñadirvino(datosVino.id)
    })
    filita_2.appendChild(boton_2)
    filita_2.appendChild(parrafo)
    miFila.appendChild(filita_2)
    return miFila
}

//* funcion para recuperar los vinos del php
function recuperarVinos() {
    let miDiv = document.getElementById("contenedor-vinos")
    // vaciamos el div
    miDiv.innerHTML = ""
    

    obtenerVinos(function(respuesta) {
        console.log(respuesta)
        respuesta = JSON.parse(respuesta)
        // recorro el JSON
        for(let i = 0; i<respuesta.length; i++)
        {
            miDiv.appendChild(dibujarVinos(respuesta[i]))
        }
        // document.body.appendChild(miDiv)
        return miDiv
    })
}

//* funcion para almacenar vinos en el localStorage
function almacenarVinos(idVino, miCantidad)
{
    // console.log("ID: "+idVino)
    // console.log("Cantidad: "+miCantidad)
    // verificimos si existe vinos en el localStorage
    let vinos
    if (localStorage.getItem('vinos') !== null && localStorage.getItem('vinos') !== undefined) 
    {
        vinos = JSON.parse(localStorage.getItem('vinos'))
    }
    else 
    {
        vinos = {}
    }

    // verificamos si el vino ya existe en el objeto 'vinos'
    if(vinos.hasOwnProperty(idVino))
    {
        // sumamos
        vinos[idVino].cantidad = parseInt(vinos[idVino].cantidad) + parseInt(miCantidad)
    }
    else 
    {
        vinos[idVino] = {
            id : idVino,
            cantidad : miCantidad
        }
    }

    // Almacenamos el objeto
    localStorage.setItem('vinos', JSON.stringify(vinos))
    // para que el cajon de texto vuelve a esta vacio
    document.getElementById("cantidad_"+idVino).value = ""
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

function manejadorClickAñadirvino(idVino)
{
    let miCantidad = document.getElementById("cantidad_"+idVino).value
    if (miCantidad === "" || miCantidad === null) 
    {
        console.log("vino NO AÑADIDO")
    } 
    else 
    {   
        //* ESTILO MENSAJE DE ERRORES
        // almacenarVinos(idVino, miCantidad)
        console.log("vino AÑADIDO")
        
    }
}