<?php

if (isset($_POST['addUsuario'])) {
    addUsuario();
}

if (isset($_POST['comprobarExisteEmail'])) {
    comprobarExisteEmail();
}

function comprobarExisteEmail() {
    $email = $_POST['comprobarExisteEmail'];
    try {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $resultado = $conexion->prepare("SELECT * FROM usuarios WHERE email = :email");
        $resultado->bindParam(':email', $email, PDO::PARAM_STR);
        $resultado->execute();

        if ($resultado->fetch()) {
            echo "1";
        } else {
            echo "0";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conexion = null;
}

function addUsuario() {
    $admin = 0;
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasenia = hash('sha256', $_POST['password']);
    $activo = 1;
    $telefono = $_POST['telefono'];

    try {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $resultado = $conexion->prepare("
            INSERT INTO usuarios 
            (admin, nombre, email, password, activo, telefono)
            VALUES (?, ?, ?, ?, ?, ?)");
        $resultado->execute(array($admin, $nombre, $email, $contrasenia, $activo, $telefono));

        if ($resultado->rowCount() > 0) {
            echo json_encode(["status" => "success", "message" => "Usuario creado correctamente", "redirect" => "../index.html"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al crear el usuario"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error en la base de datos: " . $e->getMessage()]);
    }
}
?>
