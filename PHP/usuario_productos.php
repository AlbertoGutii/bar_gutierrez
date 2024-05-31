<?php

    //* RECUPERAR PRODUCTOS BASE DE DATOS

    if (isset($_POST['obtenerProductos'])) {
        obtenerProductos();
    }

    if (isset($_POST['categoria'])) {
        filtrarProductosPorCategoria($_POST['categoria']);
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
            p.tipo = 'plato' AND c.categoria = :categoria");
    
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

    //? funcion que obtiene los productos
    function obtenerProductos() {
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
            p.tipo = 'plato'");

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