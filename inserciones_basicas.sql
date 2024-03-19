-- TABLA TIPOS_PRODUCTOS
INSERT INTO tipos_productos (categoria) VALUES ('Entrantes calientes');
INSERT INTO tipos_productos (categoria) VALUES ('Entrantes frios');
INSERT INTO tipos_productos (categoria) VALUES ('Carnes');
INSERT INTO tipos_productos (categoria) VALUES ('Guisos caseros');
INSERT INTO tipos_productos (categoria) VALUES ('Pescados');
INSERT INTO tipos_productos (categoria) VALUES ('Raciones');

-- TABLA TIPOS_VINOS
INSERT INTO tipos_vinos (categoria) VALUES ('Claro Ribera del Duero');
INSERT INTO tipos_vinos (categoria) VALUES ('Blanco Rueda y Verdejo');
INSERT INTO tipos_vinos (categoria) VALUES ('Tinto Ribera del Duero');
INSERT INTO tipos_vinos (categoria) VALUES ('Crianza Ribera del Duero');
INSERT INTO tipos_vinos (categoria) VALUES ('Otras opciones');

-- TABLA PRODUCTOS
    -- ENTRANTES FRIOS
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada mixta(4p)', 'Ensalada para dos personas', 'foto', 10);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada mixta(2p)', 'Ensalada para 4 personas', 'foto', 15);
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
    VALUES ('Mollejas con setas', 'Mollejas a la plancha y guisadas con setas', 'foto', 14);
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

    -- ALMUERZOS
    