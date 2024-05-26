<?php

    if(isset($_POST['obtenerHistorico'])) {
        obtenerHistorico();
    }

    // Listar los usuarios
    function obtenerHistorico() {
        $datosSolicitud = $_POST['obtenerHistorico'];
        $datosSolicitud = json_decode($datosSolicitud);
        $desde = $datosSolicitud->desde;
        $hasta = $datosSolicitud->hasta;
        $usuario = $datosSolicitud->emailUsuario;

        $conexion = new PDO('mysql:host=localhost;dbname=bar_gutierrez', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT * FROM pedidos 
        where 
            fecha_pedido >= ? AND fecha_pedido <= ?
            AND
            fk_cliente = (SELECT id FROM usuarios WHERE email = ?) 
            ORDER BY fecha_pedido DESC;");
        $resultado -> execute(array($desde, $hasta,$usuario));
        $solicitudes = array();
        while($fila = $resultado -> fetch()) {
            $solicitud = array(
                'id' => $fila['id'],
                'idUsuario' => $fila['fk_cliente'],
                'fecha_pedido' => $fila['fecha_pedido'],
                'fecha_recogida' => $fila['fecha_recogida'],
                'producto' => $fila['producto'],
                'cantidad' => $fila['cantidad'],
                'observaciones' => $fila['observaciones'],
                'entregado' => $fila['entregado']
            );

            $solicitudes[] = $solicitud;
        }

        $jsonString = json_encode($solicitudes);
        echo $jsonString;
    }

?>