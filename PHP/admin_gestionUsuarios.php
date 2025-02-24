<?php
    if(isset($_POST['obtenerUsuarios'])) {
        obtenerUsuarios();
    }
    if(isset($_POST['cambiaEstado'])) {
        cambiaEstado();
    }
    if(isset($_POST['cambiaCargo'])) {
        cambiaCargo();
    }
    if(isset($_POST['reiniciaContrasenia'])) {
        reiniciaContrasenia();
    }
    if(isset($_POST['modificarDatos'])) {
        modificarDatos();
    }
    if(isset($_POST['addUsuario'])) {
        addUsuario();
    }

    // Listar los usuarios
    function obtenerUsuarios() {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        if($_POST['obtenerUsuarios'] != "") {
            $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email != ? AND nombre LIKE CONCAT(?,'%');");
            $resultado -> execute(array($_POST['email'],$_POST['obtenerUsuarios']));
            
            // echo "si";
        } else {
            // echo "no";
            $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email != ?;");
            $resultado -> execute(array($_POST['email']));
        }
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $usuario = array(
                'nombre' => $fila['nombre'],
                'email' => $fila['email'],
                'telefono' => $fila['telefono'],
                'admin' => $fila['admin'],
                'estado' => $fila['activo'],
                'id' => $fila['id'],
            );

            $datos[] = $usuario;
        }

        $jsonString = json_encode($datos);
        echo $jsonString;
    }

    // Habilitar/Deshabilitar
    function cambiaEstado(){
        $email = $_POST['cambiaEstado'];
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT activo FROM usuarios WHERE email = ?;");
        $resultado -> execute(array($email));
        $estado = $resultado -> fetch();
        if($estado['activo'] == '1') {
            $resultado = $conexion -> prepare("UPDATE usuarios SET activo = 0 WHERE email = ?;");
            $resultado -> execute(array($email));
        } else {
            $resultado = $conexion -> prepare("UPDATE usuarios SET activo = 1 WHERE email = ?;");
            $resultado -> execute(array($email));
        }
    }

    // Cambiar Cargo
    function cambiaCargo(){
        $email = $_POST['cambiaCargo'];
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT admin FROM usuarios WHERE email = ?;");
        $resultado -> execute(array($email));
        $estado = $resultado -> fetch();
        if($estado['admin'] == '1') {
            $resultado = $conexion -> prepare("UPDATE usuarios SET admin = 0 WHERE email = ?;");
            $resultado -> execute(array($email));
        } else {
            $resultado = $conexion -> prepare("UPDATE usuarios SET admin = 1 WHERE email = ?;");
            $resultado -> execute(array($email));
        }
    }

    // Reiniciar Contraseña
    function reiniciaContrasenia(){
        $email = $_POST['reiniciaContrasenia'];
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion -> prepare("UPDATE usuarios SET password = ? WHERE email = ? and admin = 1;");
        $contrasenia = hash('sha256', 'contraseña123');
        $resultado -> execute(array($contrasenia, $email));
    }

    // Modificar Datos
    function modificarDatos(){
        $emailID = $_POST['modificarDatos'];
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare(
            "UPDATE usuarios 
            SET
            nombre = ?,
            email = ?,
            telefono = ?
            WHERE
            email = ?;");
        $resultado -> execute(array($nombre, $email, $telefono, $emailID));
    }

    function addUsuario() {
        $cargo = 1;
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $contrasenia = hash('sha256', 'contraseña123');
        $telefono = $_POST['telefono'];


        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("INSERT INTO usuarios 
        (admin, nombre, email, password, activo, telefono)
        VALUES (
            ?, ?, ?, ?, 1, ?);");
    $resultado -> execute(array($cargo,$nombre,$email,$contrasenia,$telefono));
    }

?>