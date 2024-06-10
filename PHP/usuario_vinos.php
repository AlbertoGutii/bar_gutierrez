<?php

    if (isset($_POST['obtenerVinos'])) {
        obtenerVinos();
    }

    if (isset($_POST['categoria'])) {
        if($_POST['categoria'] == "todos") {
            obtenerVinos();
        }
        else {
            filtrarProductosPorCategoria($_POST['categoria']);
        }
    }
    
    function filtrarProductosPorCategoria($categoria) {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        
        $resultado = $conexion->prepare("SELECT 
            p.id,
            p.nombre,
            p.descripcion,
            c.categoria,
            p.foto,
            p.precio
        FROM
            productos p
        INNER JOIN
            categorias c ON p.fk_categoria = c.id
        WHERE
            p.tipo = 'vino' AND c.categoria = :categoria");
    
        $resultado->bindParam(':categoria', $categoria);
        $resultado->execute();
        
        $datos = array();
        while ($fila = $resultado->fetch()) {
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

    //? funcion que lista los vinos
    function obtenerVinos() {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        if($_POST['obtenerVinos'] != "") {
            $resultado = $conexion->prepare("SELECT 
                p.id,
                p.nombre,
                p.descripcion,
                c.categoria,
                p.foto,
                p.precio
            FROM
                productos p
            INNER JOIN
                categorias c ON p.fk_categoria = c.id
            WHERE
                p.tipo = 'vino' AND p.nombre LIKE CONCAT(?,'%');");
            $resultado -> execute(array($_POST['obtenerVinos']));
        }
        else {
            $resultado = $conexion->prepare("SELECT 
                p.id,
                p.nombre,
                p.descripcion,
                c.categoria,
                p.foto,
                p.precio
            FROM
                productos p
            INNER JOIN
                categorias c ON p.fk_categoria = c.id
            WHERE
                p.tipo = 'vino';");
            $resultado -> execute();
        }
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