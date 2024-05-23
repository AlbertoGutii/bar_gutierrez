window.onload = principal

function principal() {

}

function addUsuario(nombreUsuario,cargoUsuario,emailUsuario,telefonoUsuario) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText);
            // callback(miPeticion.responseText);
            // dibujarModalesAdd();
            recuperarUsuarios();
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "addUsuario=" + "&nombre=" + nombreUsuario + "&cargo=" + cargoUsuario + "&email=" +emailUsuario + "&telefono=" + telefonoUsuario;
    miPeticion.send(datos);
}

function comprobarExisteEmail() {
    let miEmail = localStorage.getItem("email")
    let miPeticion = new XMLHttpRequest()

    miPeticion.open("POST", "../PHP/redireccion.php", true)

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

    miPeticion.open("POST", "../PHP/redireccion.php", true)

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