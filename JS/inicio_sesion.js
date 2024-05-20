window.onload = principal

//? NO HACEN NADA ESTAS FUNCIONES
//? AUNQUE EN OTROS ARCHIVOS LA FUNCION QUE CUMPLEN ES DE QUE NO PUEDAS ACCEDER A OTROS SITIOS SI NO LO TIENES PERMITIDO
comprobarExisteEmail()

function comprobarExisteEmail() {
    let miEmail = localStorage.getItem("email")
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "./PHP/redireccion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("existe", miPeticion.responseText)
            if(miPeticion.responseText === "0") {
                window.location.href = "../paginas_usuarios/login.html"
            } 
            else {
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
            console.log("es admin: ",miPeticion.responseText)
            // callback(miPeticion.responseText)
            if(miPeticion.responseText === "0") {
                window.location.href = "../paginas_usuarios/login.html"
            } 
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let datos = "comprobarEsAdmin=" + miEmail
    console.log(datos)
    miPeticion.send(datos)
}

function principal() {
    localStorage.clear()

    let botonInicioSesion = document.getElementById("btnInicio_Sesion")
    botonInicioSesion.addEventListener("click", manejadorClickInicioSesion)

    document.addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es Enter (código de tecla 13)
        if (event.key === 'Enter') {
            botonInicioSesion.click()
        }
    })
}

function manejadorClickInicioSesion(e) {
    comprobarInicioSesion(e)
}

function comprobarInicioSesion(e) {
    // Compruebo que los campos esten rellenados
    let rellenados = false
    rellenados = document.getElementById("inContrasenia").value
    if(rellenados) {
        rellenados = document.getElementById("inEmail").value
    }

    // Si estan rellenados empiezo a comprobar si existe los datos del usuario
    document.getElementById("errorEmail").innerHTML= ""
    document.getElementById("errorContrasenia").innerHTML= ""
    if(rellenados) {
        document.getElementById("rellenadoCampos").innerHTML= ""
        let email = document.getElementById("inEmail").value.toLowerCase()
        console.log(email)
    
        // Compruebo el email
        emailExiste(email, function(respuesta) {
            if(respuesta === "1") {
                let contrasenia = document.getElementById("inContrasenia").value
                console.log("contraseña: ", contrasenia, " email: ",email)
                contraseniaExiste(contrasenia, function(respuesta) {
                    if(respuesta === "1") {
                        // Y si el login es correcto iniciamos sesion
                        // la dirección de a que página tenemos que ir nos lo entrega el servidor
                        // (El servidor hace la comprobación de si la contraseña es nueva, tenemos que ir
                        // a la pagina de usuario o de admin)
                        iniciarSesion(email, contrasenia)
                    } 
                    else {
                        document.getElementById("errorContrasenia").innerHTML= "❗Contraseña incorrecta❗"
                    }
                })
            } else {
                document.getElementById("errorEmail").innerHTML= "❗Email incorrecto❗"
            }
        })
    }
    else {
        document.getElementById("rellenadoCampos").innerHTML= "No se han rellenado todos los campos"
    }
}

function emailExiste(email, callback) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/inicioSesion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("respuesta email", miPeticion.responseText)
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    miPeticion.send("existeEmail=" + email)
}

function contraseniaExiste(contrasenia, callback) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/inicioSesion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("respuesta contraseña",miPeticion.responseText)
            callback(miPeticion.responseText)
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datos = "existeContrasenia=" + contrasenia
    console.log(datos)
    miPeticion.send(datos)
}

function iniciarSesion(email, contrasenia) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/inicioSesion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // Recupero la ruta de la pagina a la que ir
            console.log("respuesta login",miPeticion.responseText)
            if(miPeticion.responseText==="0")
            {
                document.getElementById("rellenadoCampos").innerHTML= "Usuario deshabilitado"
            } 
            else {
                localStorage.setItem('email', email)
                window.location.href = miPeticion.responseText
            }
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    let datos = "iniciarSesion=2"
    miPeticion.send(datos)
}

function mostrarContrasenia() {
    let contrasenia = document.getElementById("inContrasenia")
    let visualizarContraseña = document.getElementById("visualizarContraseña")
    
    if (visualizarContraseña.checked) {
        contrasenia.type = "text"
    } 
    else {
        contrasenia.type = "password"
    }
}