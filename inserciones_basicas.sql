-- TABLA TIPOS_PRODUCTOS
INSERT INTO tipos_productos (categoria) VALUES ('Entrantes calientes');
INSERT INTO tipos_productos (categoria) VALUES ('Entrantes frios');
INSERT INTO tipos_productos (categoria) VALUES ('Carnes');
INSERT INTO tipos_productos (categoria) VALUES ('Guisos caseros');
INSERT INTO tipos_productos (categoria) VALUES ('Pescados');
INSERT INTO tipos_productos (categoria) VALUES ('Raciones');
INSERT INTO tipos_productos (categoria) VALUES ('Postres');

-- TABLA TIPOS_VINOS
INSERT INTO tipos_vinos (categoria) VALUES ('Claro Ribera del Duero');
INSERT INTO tipos_vinos (categoria) VALUES ('Blanco Rueda y Verdejo');
INSERT INTO tipos_vinos (categoria) VALUES ('Tinto Ribera del Duero');
INSERT INTO tipos_vinos (categoria) VALUES ('Crianza Ribera del Duero');
INSERT INTO tipos_vinos (categoria) VALUES ('Otras opciones');

-- TABLA PRODUCTOS
    -- ENTRANTES FRIOS
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada mixta(2p)', 'Ensalada para dos personas', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada mixta(4p)', 'Ensalada para 4 personas', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada de escabechados', 'Ensalada con codornices escabechadas', './imagenes/ensalada_escabechados.png', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Espárragos', 'Falta descripcion', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Lacón a la gallega', 'Lacón con aceite y pimentón', 'foto', 13);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ibéricos(jamón y lomo)', 'Plato con un surtido de jamón y lomo', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ibéricos(jamón, lomo y queso)', 'Plato con un surtido de jamón, lomo y queso', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada de ventresca y pimiento', 'Contiene ventresca y pimiento', 'foto', 16);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bacalao Crudo', 'Bacalao crudo con cebolla, aceitunas negras y aceite', './imagenes/bacalao_crudo.png', 15);

    -- ENTRANTES CALIENTES
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Morcilla', 'Morcilla de burgos', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Chorizo', 'Chorizo frito', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Picadillo Casero', 'Picadillo de la casa', 'foto', 9);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Champiñón a la plancha', 'Champiñones a la plancha con salsa casera', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Pimientos rellenos de bacalao', 'Pimientos caseros rellenos de bacalao con tomate', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Revuelto de ajetes, setas y gambas', 'Revuelto de ajetes, setas y gambas', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Revuelto de gulas con gambas', 'Revuelto de gulas con gambas', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Croquetas caseras', 'Croquetas caseras de jamon ibérico', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Calamares a la romana', 'Calamares fritos', 'foto', 12);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Sepia a la plancha', 'Sepia a la plancha con salsa casera', './imagenes/sepia.png', 13);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Mollejas con setas', 'Mollejas a la plancha, guisadas con setas', 'foto', 14);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Pulpo a la gallega', 'Pulpo con patata, pimentón y aceite', 'foto', 20);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Langostinos a la plancha', 'Langostinos frescos a la plancha', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Gambas a la plancha', 'gambas frescas a la plancha', 'foto', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Almejas', 'Almejas frescas en salsa', 'foto', 20);

    -- CARNES A LA PLANCHA
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Codornices a la plancha', 'Codornices a la plancha', 'foto', 12);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Lomo adobado', 'Lomo adobado acompañado de patatas o ensalada', './imagenes/lomo.png', 9);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bistec de ternera', 'Bistec de ternera acompañado de patatas o ensalada', 'foto', 11);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Secreto de cerdo DUROC', 'Secreto de cerdo DUROC acompañado de patatas o ensalada', './imagenes/secreto.png', 14);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Chuletillas de lechazo', 'Chuletillas de lechazo acompañadas de patatas o ensalada', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Chuletón de ternera(500gr)', 'Chuletón acompañado de patatas o ensalada', 'foto', 20);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Entrecot de ternera', 'Entrecot acompañado de patatas o ensalada', 'foto', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Solomillo de ternera', 'Solomillo acompañado de patatas o ensalada', 'foto', 20);

    -- GUISOS CASEROS
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Codornices escabechadas', 'Codornices escabechadas acompañadas de ensalada', 'foto', 14);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Perdiz escabechada', 'Perdiz escabechada acompañada de ensalada', 'foto', 20);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Carrillada de ternera', 'Carrillada de ternera guisada', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Pollo de corral', 'Pollo de corral guisado', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Rabo de novillo', 'Rabo de novillo guisado', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Lengua de ternera', 'Lengua de ternera guisada', 'foto', 14);

    -- PESCADOS
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bacalao con tomate', 'Bacalao con tomate casero', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bacalao al pilpil', 'descripcion', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Dorada a la plancha', 'Dorada fresca a la plancha acompañado de ensalada', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Lubina a la plancha', 'Lubina fresca a la plancha acompañado de ensalada', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Merluza rellena de salmón', 'Merluza rebozada rellena de salmón acompañada de pimientos, huevo cocido y salsa casera', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Congrio a la plancha', 'Congrio a la plancha acompañado de ensalada', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Rodaballo a la plancha', 'Rodaballo a la plancha acompañado de ensalada', 'foto', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Chicharro a la plancha', 'Chicharro a la plancha acompañado de ensalada', 'foto', 20);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Chipirones en su tinta', 'Chipirones en su tinta', './imagenes/chipirones_tinta.png', 15);

    -- ALMUERZOS Y RACIONES
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Callos', 'Callos al estilo de la casa', './imagenes/callos.png', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Morro', 'Morro de cerdo al estilo de la casa', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Picadillo', 'Picadillo casero', 'foto', 9);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Asadurilla', 'Asadurilla casera', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Manitas de Lechazo', 'Manitas de lechazo', './imagenes/manitas.png', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bacalao con tomate', 'Bacalao con tomate casero', 'foto', 9);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bacalao crudo', 'Bacalao crudo con cebolla, aceitunas negras y aceite', './imagenes/bacalao_crudo.png', 9);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Oreja rebozada', 'Oreja rebozada con jamon york y queso', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Oreja a la plancha', 'Oreja a la plancha', 'foto', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Manitas de cerdo', 'Manitas de cerdo guisadas', './imagenes/manitas.png', 8);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Rabo', 'Rabo de toro guisado', 'foto', 14);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Lengua', 'Lengua guisada', 'foto', 12);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Pulpo', 'Pulpo', 'foto', 20);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Mollejas con setas', 'Mollejas a la plancha guisadas con setas', 'foto', 14);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Champiñones', 'Champiñones a la plancha', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Calamares', 'Calamares a la romana', 'foto', 12);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Sepia', 'Sepia a la plancha', './imagenes/sepia.png', 13);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Pimientos rellenos', 'Pimientos rellenos de bacalao o carne', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Codornices plancha', 'Codornices a la plancha', 'foto', 11);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Codornices escabechadas', 'Codornices caseras escabechadas', 'foto', 15);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Revuelto de la casa', 'Revuelto de la casa', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Revuelto de gulas y gambas', 'Revuelto de gulas y gambas', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Zamburiñas', 'Zamburiñas a la plancha', 'foto', 18);

    -- POSTRES
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Flan de huevo', 'Flan de huevo casero', './imagenes/flan_huevo.png', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Flan de queso', 'Flan de queso casero', './imagenes/flan_queso.png', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Cuajada', 'Cuajada casera', './imagenes/cuajada.png', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Natillas', 'Natillas caseras', './imagenes/natillas.png', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Crema Catalana', 'Crema Catalana casera', './imagenes/crema_catalana.png', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Arroz con leche', 'Arroz con leche casero', './imagenes/arroz_leche.png', 18);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Tarta de queso', 'Tarta de queso casera', './imagenes/tarta_queso.png', 18);
    -- BUSCAR SI QUEDA ALGUN POSTRE MAS

-- TABLA CATEGORIAS_PRODUCTOS
    -- ENTRANTES FRIOS
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Ensalada mixta(2p)'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Ensalada mixta(4p)'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Ensalada de escabechados'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Espárragos'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Lacón a la gallega'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Ibéricos(jamón y lomo)'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Ibéricos(jamón, lomo y queso)'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Ensalada de ventresca y pimiento'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Bacalao crudo'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes frios'));
    
    -- ENTRANTES CALIENTES
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Morcilla'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Chorizo'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Picadillo casero'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Champiñón a la plancha'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Pimientos rellenos de bacalao'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Revuelto de ajetes, setas y gambas'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Revuelto de gulas con gambas'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Croquetas caseras'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Calamares a la romana'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Sepia a la plancha'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Mollejas con setas'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Pulpo a la gallega'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Langostinos a la plancha'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Gambas a la plancha'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Almejas'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Entrantes calientes'));

    -- CARNES A LA PLANCHA
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Codornices a la plancha'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Lomo adobado'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Bistec de ternera'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Secreto de cerdo DUROC'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Chuletillas de lechazo'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Chuletón de ternera(500gr)'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Entrecot de ternera'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Solomillo de ternera'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Carnes'));
    
    -- GUISOS CASEROS
    INSERT INTO categorias_productos (fk_productos, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE nombre = 'Codornices escabechadas'),
    (SELECT id FROM tipos_productos WHERE categorias = 'Guisos caseros'));