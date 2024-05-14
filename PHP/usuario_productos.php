<?php

    //* RECUPERAR PRODUCTOS BASE DE DATOS

    if (isset($_POST['obtenerProductos'])) {
        obtenerProductos();
    }

    //? funcion que obtiene los productos
    function obtenerProductos() {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion -> prepare("SELECT 
            p.id,
            p.nombre,
            p.descripcion,
            c.categoria,
            p.foto,
            p.precio
        FROM
            productos p
        INNER JOIN
            categorias c ON p.id = c.id
        WHERE
            p.tipo = 'plato");
        $resultado -> execute();
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $productos = array(
                'id' => $fila['id'],
                'nombre' => $fila['nombre'],
                'descripcion' => $fila['descripcion'],
                'categoria' => $fila['categoria'],
                'foto' => $fila['foto'],
                'precio' => $fila['precio']
            );

            $datos[] = $productos;
        }

        $jsonString = json_encode($datos);
        echo $jsonString;
    }

?>