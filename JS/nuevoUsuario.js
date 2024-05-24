window.onload = principal

function principal() {
    document.getElementById("btnAddUsuario").addEventListener("click", manejadorAñadirUsuario)
}

function manejadorAñadirUsuario(e) {
    e.preventDefault()

    if(!comprobarExisteEmail()) {
        document.getElementById("errorEmail").innerHTML = "❗Este usuario ya existe❗"
    }
    else {
        console.log("first")
        let nombreUsuario = document.getElementById("inNombre").value
        // nombreUsuario = nombreUsuario.split(": ")[1].trim()
        let emailUsuario = document.getElementById("inEmail").value
        // emailUsuario = emailUsuario.split(": ")[1].trim()
        let telefonoUsuario = document.getElementById("inTelefono").value
        // telefonoUsuario = telefonoUsuario.split(": ")[1].trim()
        let passwordUsuario = document.getElementById("inPassword").value
        // passwordUsuario = telefonoUsuario.split(": ")[1].trim()
        console.log(nombreUsuario)
        console.log(emailUsuario)
        console.log(telefonoUsuario)
        console.log(passwordUsuario)
        // addUsuario(nombreUsuario,emailUsuario,telefonoUsuario,passwordUsuario)
    }
}

function addUsuario(nombreUsuario,emailUsuario,telefonoUsuario,passwordUsuario) {
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/nuevoUsuario.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(miPeticion.responseText)
            // recuperarUsuarios()
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let datos = "addUsuario=" + "&nombre=" + nombreUsuario + "&email=" +emailUsuario + "&telefono=" + telefonoUsuario + "&password=" + passwordUsuario
    miPeticion.send(datos)
}

function comprobarExisteEmail() {
    let miEmail = document.getElementById("inEmail").value
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/redireccion.php", true)

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("existe", miPeticion.responseText)
            let existe = false
            if(miPeticion.responseText === "1") {
                existe = true
            }
            return existe
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let datos = "comprobarExisteEmail=" + miEmail
    miPeticion.send(datos)
}