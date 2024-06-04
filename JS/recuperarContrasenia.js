window.onload = principal;

function principal() {
    let botonConfirmar = document.getElementById("btnConfirmar");
    botonConfirmar.addEventListener("click", enviarDatos);

    document.addEventListener("keypress", function (event) {
        if (event.key === 'Enter') {
            botonConfirmar.click();
        }
    });

    let checkboxMostrar = document.getElementById("visualizarContraseña");
    checkboxMostrar.addEventListener("change", mostrarContrasenas);

    // Inicializar popover
    $(function () {
        $('[data-bs-toggle="popover"]').popover()
    })
}

function mostrarContrasenas() {
    let inputContrasenia = document.getElementById("inContrasenia");
    let inputConfirmarContrasenia = document.getElementById("inConfirmarContrasenia");
    let checkboxMostrar = document.getElementById("visualizarContraseña");

    if (checkboxMostrar.checked) {
        inputContrasenia.type = "text";
        inputConfirmarContrasenia.type = "text";
    } else {
        inputContrasenia.type = "password";
        inputConfirmarContrasenia.type = "password";
    }
}

function comprobarContrasenia(contrasenia) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&#¡.])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    return regex.test(contrasenia);
}

function enviarDatos() {
    let contrasenia = document.getElementById("inContrasenia").value;
    let confirmarContrasenia = document.getElementById("inConfirmarContrasenia").value;
    let correoUsuario = document.getElementById("inCorreo").value;
    document.getElementById("errorNuevaContrasenia").innerHTML = "";
    document.getElementById("errorConfirmarContrasenia").innerHTML = "";
    document.getElementById("rellenadoCampos").innerHTML = "";

    if (contrasenia && confirmarContrasenia) {
        if (!comprobarContrasenia(contrasenia)) {
            document.getElementById("errorNuevaContrasenia").innerHTML = "La nueva contraseña no cumple con los requisitos de seguridad.";
            return;
        }

        if (contrasenia !== confirmarContrasenia) {
            document.getElementById("errorConfirmarContrasenia").innerHTML = "Las contraseñas ingresadas no coinciden.";
            return;
        }

        let datos = {
            "correo": correoUsuario,
            "contrasenia": contrasenia
        };

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "../PHP/recuperarContrasenia.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    window.location.href = "../index.html";
                } else {
                    console.error("Error al actualizar la contraseña:", xhr.statusText);
                }
            }
        };
        xhr.send(JSON.stringify(datos));
    } else {
        document.getElementById("rellenadoCampos").innerHTML = "No se han rellenado todos los campos";
    }
}
