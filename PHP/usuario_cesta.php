<?php

    if(isset($_POST['productos']))
    {
        obtenerProductos();
    }
    if(isset($_POST['crearPedido']))
    {
        crearPedido();
    }

    function obtenerProductos() {
        // Establecer conexión con la base de datos
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        
        // Obtener el string JSON de productos enviado desde el cliente y convertirlo a un array PHP
        $productosJSON = $_POST['productos'];
        $productos = json_decode($productosJSON, true);
        
        // Consulta SQL para obtener tanto los productos como los vinos según sus IDs
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
        p.id = ?;");
        
        // Array para almacenar los datos de los productos
        $datos = array();

        // Iterar sobre los IDs de los productos recibidos
        foreach($productos as $productoID) {
            // print_r($productoID["id"]);
            // Ejecutar la consulta para cada ID de producto
            $resultado->execute(array($productoID["id"]));

            // Obtener los datos del producto y agregarlos al array $datos
            while($fila = $resultado->fetch()) {
                $pedido = array(
                    'id' => $fila['id'],
                    'nombre' => $fila['nombre'],
                    'cantidad' => $productoID['cantidad'],
                    'descripcion' => $fila['descripcion'],
                    'categoria' => $fila['categoria'],
                    'foto' => $fila['foto'],
                    'precio' => $fila['precio']
                );
                $datos[] = $pedido;
            }
        }


        // Convertir el array $datos a formato JSON y enviarlo al cliente
        $jsonString = json_encode($datos);
        echo $jsonString;
    }

    function crearPedido() {
        // Establecer conexión con la base de datos
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        date_default_timezone_set('Europe/Madrid');
        $fechaPedido = date('Y-m-d H:i');
    
        // Obtener el string JSON de productos enviado desde el cliente y convertirlo a un array PHP
        $pedidoJSON = $_POST['crearPedido'];
        $pedido = json_decode($pedidoJSON, true);
    
        $usuario = $pedido['email'];
        $observaciones = $pedido['observaciones'];
        $productos = $pedido['productos'];
    
        try {
            $conexion->beginTransaction();
            
            // Obtener la ID del cliente (usuario) a partir del correo electrónico
            $consultaIDCliente = $conexion->prepare("SELECT id FROM usuarios WHERE email = ?");
            $consultaIDCliente->execute([$usuario]);
            $idCliente = $consultaIDCliente->fetchColumn();
    
            // Sumar media hora a la fecha de pedido para obtener la fecha de recogida
            $fechaRecogida = date('Y-m-d H:i', strtotime($fechaPedido . ' +30 minutes'));
    
            // Insertar el pedido en la tabla de pedidos
            $insertPedido = $conexion->prepare("
                INSERT INTO pedidos 
                (producto, fecha_pedido, cantidad, precio, fecha_recogida, fk_cliente, observaciones)
                VALUES (
                    (SELECT nombre FROM productos WHERE id = ?), ?, ?, ?, ?, ?, ?);
            ");
    
            // Iterar sobre los productos del pedido
            foreach ($productos as $productoID => $producto) {
                $cantidad = $producto['cantidad'];
                $precio = obtenerPrecioProducto($conexion, $productoID); // Obtener el precio del producto desde la base de datos
                $insertPedido->execute(array($productoID, $fechaPedido, $cantidad, $precio, $fechaRecogida, $idCliente, $observaciones));
                $pedidoID = $conexion->lastInsertId(); // Obtener el ID del pedido recién creado
    
                // Insertar detalles del pedido en la tabla detalle_pedido
                $insertDetalle = $conexion->prepare("
                    INSERT INTO detalle_pedido (fk_pedido, fk_producto, cantidad)
                    VALUES (?, ?, ?);
                ");
                $insertDetalle->execute(array($pedidoID, $productoID, $cantidad));
            }
    
            $conexion->commit();
            echo 1; // Éxito
        } catch (Exception $e) {
            $conexion->rollBack();
            echo 0; // Error
        }
    }
    

    function obtenerPrecioProducto($conexion, $productoID) {
        // Consultar el precio del producto según su ID
        $consultaPrecio = $conexion->prepare("SELECT precio FROM productos WHERE id = ?");
        $consultaPrecio->execute([$productoID]);
        $fila = $consultaPrecio->fetch(PDO::FETCH_ASSOC);
        return $fila['precio'];
    }
    
?>