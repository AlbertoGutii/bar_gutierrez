<?php

    if(isset($_POST['addUsuario'])) 
    {
        addUsuario();
    }

    if(isset($_POST['comprobarExisteEmail'])) 
    {
        comprobarExisteEmail();
    }


    function comprobarExisteEmail() {
        $email = $_POST['comprobarExisteEmail'];

        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion ->prepare("SELECT * FROM usuarios WHERE email = '$email';");

        $resultado->execute();
        if($resultado->fetch()) {
            echo "1";
        } else {
            echo "0";
        }

    }


    function addUsuario() 
    {
        $activo = 1;
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $contrasenia = hash('sha256', $_POST['password']);
        $telefono = $_POST['telefono'];
    
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        
        $resultado = $conexion -> prepare("
        INSERT INTO usuarios 
        (admin, nombre, email, password, activo, observaciones, telefono)
        VALUES (
            ?, ?, ?, ?, 1, 'Observaciones sobre el admin', ?);");
        $resultado -> execute(array($activo,$nombre,$email,$contrasenia,$telefono));
    }
?>