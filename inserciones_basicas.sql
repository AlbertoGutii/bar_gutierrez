-- TABLA TIPOS_PRODUCTOS
INSERT INTO tipos_productos (categoria) VALUES ('Entrantes calientes');
INSERT INTO tipos_productos (categoria) VALUES ('Entrantes frios');
INSERT INTO tipos_productos (categoria) VALUES ('Carnes');
INSERT INTO tipos_productos (categoria) VALUES ('Guisos caseros');
INSERT INTO tipos_productos (categoria) VALUES ('Pescados');

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
    VALUES ('Lacón a la gallega', 'Lacón con aceite y pimmienta', 'foto', 13);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ibéricos(jamón y lomo)', 'Plato con un surtido de jamón y lomo', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ibéricos(jamón, lomo y queso)', 'Plato con un surtido de jamón, lomo y queso', 'foto', 17);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Ensalada de ventresca y pimiento', 'Contiene ventresca y pimiento', 'foto', 16);
    INSERT INTO productos (nombre, descripcion, foto, precio) 
    VALUES ('Bacalao Crudo', 'Bacalao crudo con cebolla, aceitunas negras y aceite', './imagenes/bacalao_crudo.png', 15);