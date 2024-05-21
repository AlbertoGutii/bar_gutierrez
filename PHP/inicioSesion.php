<?php
    session_start();

    if(isset($_POST['existeEmail'])) {
        existeEmail($_POST['existeEmail']);
    }
    
    if(isset($_POST['existeContrasenia'])) {
        existeContrasenia($_POST['existeContrasenia']);
    }
    
    if(isset($_POST['iniciarSesion'])) {
        iniciarSesion();
    }

    //? funcion para verificar si el email existe
    function existeEmail($email) {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ?;");
        $resultado -> execute(array($email));
        $existe = $resultado -> fetch();
        // Si existe ese correo envio 1 sino 0
        if($existe) {
            $_SESSION['email'] = $email;
            echo "1";
        } else {
            echo "0";
        }
        return $existe;
    }
    
    //? funcion para verificar si la contraseña coincide con el email
    function existeContrasenia($contrasenia) {
        $contrasenia = hash('sha256', $contrasenia);
        $email = $_SESSION['email'];
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ? AND password=?;");
        $resultado -> execute(array($email,$contrasenia));
        $existe = $resultado -> fetch();
        // Si existe ese usuario envio 1 sino 0
        if($existe) {
            $_SESSION['contrasenia'] = $contrasenia;
            echo "1";
        } else {
            echo "0";
        }
        return $existe;
    }
    
    //? funcion para iniciar sesión
    function iniciarSesion() {
        $email = $_SESSION['email'];
        $contrasenia = $_SESSION['contrasenia'];

        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');


        $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ? AND activo=1;");
        $resultado -> execute(array($email));
        $existe = $resultado -> fetch();

        if($existe) {
            $resultado = $conexion -> prepare("SELECT admin FROM usuarios WHERE email = ? AND password=?;");
            $resultado -> execute(array($email, $contrasenia));
            if($resultado -> fetch()) {
                session_destroy();
                echo "../index.html";
            }
        }
        else {
            echo "0";
        }
    }
?>