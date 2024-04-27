<?php

    //* RECUPERAR VINOS BASE DE DATOS

    if (isset($_POST['obtenerVinos'])) {
        obtenerVinos();
    }

    //? funcion que lista los vinos
    function obtenerVinos() {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion -> prepare("SELECT 
            v.id,
            v.nombre,
            tv.categoria,
            v.foto,
            v.precio
        FROM
            vinos v
        INNER JOIN
            categorias_vinos cv ON v.id = cv.fk_vinos
        INNER JOIN
            tipos_vino tv ON cv.fk_vinos = tv.id");
        $resultado -> execute();
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $vinos = array(
                'id' => $fila['id'],
                'nombre' => $fila['nombre'],
                'categoria' => $fila['categoria'],
                'foto' => $fila['foto'],
                'precio' => $fila['precio']
            );

            $datos[] = $vinos;
        }

        $jsonString = json_encode($datos);
        echo $jsonString;
    }

?>