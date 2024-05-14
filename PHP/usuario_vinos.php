<?php

    if (isset($_POST['obtenerVinos'])) {
        obtenerVinos();
    }

    //? funcion que lista los vinos
    function obtenerVinos() {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion->prepare("SELECT 
            p.id,
            p.nombre,
            c.categoria,
            p.foto,
            p.precio
        FROM
            productos p
        INNER JOIN
            categorias c ON p.fk_categoria = c.id
        WHERE
            p.tipo = 'vino'");

        $resultado -> execute();
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $productos = array(
                'id' => $fila['id'],
                'nombre' => $fila['nombre'],
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