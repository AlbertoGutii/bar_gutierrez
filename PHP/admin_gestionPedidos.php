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
    if(isset($_POST['obtenerEstados'])) {
        // echo "conectado";
        obtenerEstados();
    }
    if(isset($_POST['obtenerEstado'])) {
        // echo "conectado";
        obtenerEstado();
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
                pedidos.fecha_pedido AS fecha_pedido,
                pedidos.fk_cliente AS idUsuario,
                usuarios.email AS usuario,
                pedidos.producto AS producto,
                pedidos.cantidad AS cantidad,
                pedidos.precio AS precio,
                pedidos.observaciones AS observaciones,
                estados.descripcion AS estado,
                pedidos.id AS idPedido
            FROM pedidos
            JOIN estados ON pedidos.fk_estado = estados.id
            JOIN usuarios ON pedidos.fk_cliente = usuarios.id
            WHERE pedidos.fecha_pedido >= ? AND pedidos.fecha_pedido <= ?
            ORDER BY pedidos.fecha_pedido DESC, pedidos.fk_cliente;
            ");
            $consulta->execute([$desde, $hasta]);

            // Procesar los resultados
            while ($fila = $consulta->fetch()) {
                $fecha = $fila['fecha_pedido'];
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
                    'precio' => $fila['precio'],
                    'observaciones' => $fila['observaciones'],
                    'estado' => $fila['estado']
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