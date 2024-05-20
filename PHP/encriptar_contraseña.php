<?php
    $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
    // Insertar usuario admin
    $resultado = $conexion -> prepare("INSERT INTO usuarios (admin, nombre, email, password, activo, telefono)
    VALUES (1, 'Alberto', 'alberto@example.com', ?, 1, '987654321');");
    $resultado -> execute(array(hash('sha256', 'contraseña123')));

    // Insertar usuario normal
    $resultado = $conexion -> prepare("INSERT INTO usuarios (admin, nombre, email, password, activo, telefono)
    VALUES (0, 'Pablo', 'pablo@example.com', ?, 1, '987654321');");
    $resultado -> execute(array(hash('sha256', 'contraseña123')));
?>