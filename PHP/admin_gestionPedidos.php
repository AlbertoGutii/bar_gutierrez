<?php

    if(isset($_POST['obtenerPedidos'])) {
        obtenerPedidos();
    }
    if(isset($_POST['obtenerUsuario'])) {
        // echo "conectado";
        obtenerUsuario();
    }
    if(isset($_POST['actualizarPedido'])) {
        // echo "conectado";
        actualizarPedido();
    }


    function obtenerPedidos() {
        $fechas = $_POST['obtenerPedidos'];
        $fechas = json_decode($fechas);
        $desde = $fechas->desde;
        $hasta = $fechas->hasta;

        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $pedidos = [];

        try {
            // Comenzar una transacción
            $conexion->beginTransaction();

            // Preparar y ejecutar la consulta para obtener fechas y pedidos
            $consulta = $conexion->prepare("
            SELECT
                pedidos.fecha AS fecha,
                pedidos.fk_usuario AS idUsuario,
                usuarios.email AS usuario,
                linea_pedido.descripcion AS producto,
                linea_pedido.cantidad AS cantidad,
                linea_pedido.unidades AS unidades,
                linea_pedido.observaciones AS observaciones,
                estados.descripcion AS estado,
                pedidos.id AS idPedido,
                proveedores.descripcion AS nombreProveedor,
                proveedores.telefono AS telefonoProveedor
            FROM pedidos
            JOIN usuarios ON pedidos.fk_usuario = usuarios.id
            JOIN linea_pedido ON pedidos.id = linea_pedido.fk_pedido
            JOIN estados ON pedidos.fk_estado = estados.id
            JOIN proveedores ON pedidos.fk_proveedor = proveedores.id
            WHERE pedidos.fecha >= ? AND pedidos.fecha <= ?
            ORDER BY pedidos.fecha DESC, pedidos.fk_usuario;
            ");
            $consulta->execute([$desde, $hasta]);

            // Procesar los resultados
            while ($fila = $consulta->fetch()) {
                $fecha = $fila['fecha'];
                $idUsuario = $fila['idUsuario'];
                $usuario = $fila['usuario'];

                // Agregar el usuario y sus pedidos al array de pedidos por fecha
                if (!isset($pedidos[$fecha])) {
                    $pedidos[$fecha] = [];
                }

                // Agregar el usuario y sus pedidos al array de pedidos por usuario
                if (!isset($pedidos[$fecha][$idUsuario])) {
                    $pedidos[$fecha][$idUsuario] = [
                        'idUsuario' => $idUsuario,
                        'usuario' => $usuario,
                        'pedidos' => [],
                    ];
                }

                // Agregar el pedido al array de pedidos del usuario
                $pedidos[$fecha][$idUsuario]['pedidos'][] = [
                    'idPedido' => $fila['idPedido'],
                    'producto' => $fila['producto'],
                    'cantidad' => $fila['cantidad'],
                    'unidades' => $fila['unidades'],
                    'observaciones' => $fila['observaciones'],
                    'estado' => $fila['estado'],
                    'proveedor' => [
                        "nombre" => $fila['nombreProveedor'],
                        "telefono" => $fila['telefonoProveedor'],
                    ]
                ];
            }

            // Confirmar la transacción
            $conexion->commit();

            $json_resultado = json_encode($pedidos);
            echo $json_resultado;
        } catch (PDOException $e) {
            // Si hay un error, deshacer la transacción
            $conexion->rollBack();
            echo "error";
        }
    }

    function obtenerEstados() {
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion -> prepare("
            SELECT * FROM estados;
        ");
        $resultado -> execute();

        $estados = array();
        while($fila = $resultado -> fetch()) {
            $estado = array(
                'idEstado' => $fila['id'],
                'estado' => $fila['descripcion'],
                'observaciones' => $fila['observaciones'],
            );
            $estados[] = $estado;
        }
        
        $jsonString = json_encode($estados);
        echo $jsonString;
    }

    function obtenerEstado() {
        $idPedido = $_POST['obtenerEstado'];
        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion -> prepare("
            SELECT estados.descripcion AS estado FROM pedidos
            JOIN estados ON pedidos.fk_estado = estados.id 
            WHERE pedidos.id = ?;
        ");
        $resultado -> execute(array($idPedido));

        $fila = $resultado->fetch();

        $estado = $fila['estado'];

        echo $estado;
    }

    function obtenerUsuario() {
        $idUsuario = $_POST['obtenerUsuario'];

        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        $resultado = $conexion -> prepare("
            SELECT * FROM usuarios WHERE id = ?;
        ");
        $resultado -> execute(array($idUsuario));

        $fila = $resultado -> fetch();

        $usuario = array(
            'id' => $fila['id'],
            'admin' => $fila['admin'],
            'nombre' => $fila['nombre'],
            'email' => $fila['email'],
            'activo' => $fila['activo'],
            'observaciones' => $fila['observaciones'],
            'telefono' => $fila['telefono']
            );
        

            

        $jsonString = json_encode($usuario);
        echo $jsonString;
    }

    function actualizarPedido() {

        $pedido = $_POST['actualizarPedido'];
        $pedido = json_decode($pedido);
        $idPedido = $pedido->idPedido;
        $idEstado = $pedido->idEstado;

        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');

        try {

            // Comenzar una transacción
            $conexion->beginTransaction();


            $resultado = $conexion->prepare("UPDATE pedidos
            SET fk_estado = ?
            WHERE id = ?;        
            ");

            $resultado->execute(array($idEstado, $idPedido));

            // Confirmar la transacción
            $conexion->commit();

            echo "1";
        } catch (PDOException $e) {
            // Si hay un error, deshacer la transacción
            $conexion->rollBack();
            echo "0";
        }


    }
?>