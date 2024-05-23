<?php

    if(isset($_POST['addUsuario'])) 
    {
        addUsuario();
    }


    function addUsuario() 
    {
        $cargo = $_POST['cargo'];

        if($cargo == "Admin") 
        {
            $cargo = 1;
        } 
        else 
        {
            $cargo = 0;
        }

        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $contrasenia = hash('sha256', 'contraseña123');
        $telefono = $_POST['telefono'];
    
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        
        $resultado = $conexion -> prepare("
        INSERT INTO usuarios 
        (admin, nombre, email, password, activo, observaciones, telefono)
        VALUES (
            ?, ?, ?, ?, 1, 'Observaciones sobre el admin', ?);");
        $resultado -> execute(array($cargo,$nombre,$email,$contrasenia,$telefono));
    }
?>