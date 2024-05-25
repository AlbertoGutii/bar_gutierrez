window.onload = principal

function principal() {
    document.getElementById("btnAddUsuario").addEventListener("click", manejadorAñadirUsuario)
}

async function manejadorAñadirUsuario(e) {
    e.preventDefault()

    const existe = await comprobarExisteEmail()
    
    if (existe) {
        document.getElementById("errorEmail").innerHTML = "❗Este usuario ya existe❗"
    } else {
        let nombreUsuario = document.getElementById("inNombre").value
        let emailUsuario = document.getElementById("inEmail").value
        let telefonoUsuario = document.getElementById("inTelefono").value
        let passwordUsuario = document.getElementById("inPassword").value

        if (!comprobarContrasenia(passwordUsuario)) {
            document.getElementById("errorContrasenia").innerHTML = "❗La contraseña no cumple con los requisitos❗"
            return
        }

        addUsuario(nombreUsuario, emailUsuario, telefonoUsuario, passwordUsuario)
    }
}

function addUsuario(nombreUsuario, emailUsuario, telefonoUsuario, passwordUsuario) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/nuevoUsuario.php", true)

    miPeticion.onreadystatechange = function () {
        if (miPeticion.readyState == 4) {
            if (miPeticion.status == 200) {
                let response = JSON.parse(miPeticion.responseText)
                if (response.status === "success") {
                    window.location.href = response.redirect
                } else {
                    document.getElementById("errorContrasenia").innerHTML = response.message
                }
            } else {
                document.getElementById("errorContrasenia").innerHTML = "Error en la petición"
            }
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let datos = "addUsuario=" + "&nombre=" + encodeURIComponent(nombreUsuario) + "&email=" + encodeURIComponent(emailUsuario) + "&telefono=" + encodeURIComponent(telefonoUsuario) + "&password=" + encodeURIComponent(passwordUsuario)
    miPeticion.send(datos)
}

//* función que comprueba que el email que pone no esté ya registrado
function comprobarExisteEmail() {
    return new Promise((resolve, reject) => {
        let miEmail = document.getElementById("inEmail").value
        let miPeticion = new XMLHttpRequest()

        miPeticion.open("POST", "../PHP/redireccion.php", true)

        miPeticion.onreadystatechange = function () {
            if (miPeticion.readyState == 4) {
                if (miPeticion.status == 200) {
                    console.log("existe", miPeticion.responseText)
                    resolve(miPeticion.responseText === "1")
                } else {
                    reject(new Error("Error en la petición"))
                }
            }
        }

        miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        let datos = "comprobarExisteEmail=" + encodeURIComponent(miEmail)
        miPeticion.send(datos)
    })
}

function comprobarContrasenia(contrasenia) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&#¡.])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    return regex.test(contrasenia)
}

function mostrarContrasenia() {
    let contrasenia = document.getElementById("inPassword")
    let visualizarContraseña = document.getElementById("visualizarContraseña")
    
    if (visualizarContraseña.checked) {
        contrasenia.type = "text"
    } else {
        contrasenia.type = "password"
    }
}
