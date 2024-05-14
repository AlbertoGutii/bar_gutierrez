-- TABLA CATEGORIAS
INSERT INTO categorias (categoria) VALUES ('Entrantes calientes');
INSERT INTO categorias (categoria) VALUES ('Entrantes frios');
INSERT INTO categorias (categoria) VALUES ('Carnes a la plancha');
INSERT INTO categorias (categoria) VALUES ('Guisos caseros');
INSERT INTO categorias (categoria) VALUES ('Pescados');
INSERT INTO categorias (categoria) VALUES ('Raciones');
INSERT INTO categorias (categoria) VALUES ('Postres');
INSERT INTO categorias (categoria) VALUES ('Claro Ribera del Duero');
INSERT INTO categorias (categoria) VALUES ('Blanco, Rueda y Verdejo');
INSERT INTO categorias (categoria) VALUES ('Tinto Ribera del Duero');
INSERT INTO categorias (categoria) VALUES ('Crianza Ribera del Duero');
INSERT INTO categorias (categoria) VALUES ('Otras opciones');

-- TABLA PRODUCTOS
    -- ENTRANTES FRIOS
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria)
    VALUES ('Ensalada mixta\n(2p)', 'Ensalada para dos personas', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Ensalada mixta\n(4p)', 'Ensalada para 4 personas', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Ensalada de escabechados', 'Ensalada con codornices escabechadas', 'ensalada_escabechados', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Espárragos', 'Falta descripcion', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Lacón a la gallega', 'Lacón con aceite y pimentón', 'foto', 13, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Ibéricos\n(jamón y lomo)', 'Plato con un surtido de jamón y lomo', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Ibéricos\n(jamón, lomo y queso)', 'Plato con un surtido de jamón, lomo y queso', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Ensalada de ventresca y pimiento', 'Contiene ventresca y pimiento', 'foto', 16, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Bacalao Crudo', 'Bacalao crudo con cebolla, aceitunas negras y aceite', 'bacalao_crudo', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes frios'));

    -- ENTRANTES CALIENTES
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Morcilla', 'Morcilla de burgos', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Chorizo', 'Chorizo frito', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Picadillo Casero', 'Picadillo de la casa', 'foto', 9, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Champiñón a la plancha', 'Champiñones a la plancha con salsa casera', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Pimientos rellenos de bacalao', 'Pimientos caseros rellenos de bacalao con tomate', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Revuelto de ajetes, setas y gambas', 'Revuelto de ajetes, setas y gambas', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Revuelto de gulas con gambas', 'Revuelto de gulas con gambas', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Croquetas caseras', 'Croquetas caseras de jamon ibérico', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Calamares a la romana', 'Calamares fritos', 'foto', 12, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Sepia a la plancha', 'Sepia a la plancha con salsa casera', 'sepia', 13, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Mollejas con setas', 'Mollejas a la plancha, guisadas con setas', 'foto', 14, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Pulpo a la gallega', 'Pulpo con patata, pimentón y aceite', 'foto', 20, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Langostinos a la plancha', 'Langostinos frescos a la plancha', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Gambas a la plancha', 'gambas frescas a la plancha', 'foto', 18, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Almejas', 'Almejas frescas en salsa', 'foto', 20, 
        (SELECT id FROM categorias WHERE categoria = 'Entrantes calientes'));

    -- CARNES A LA PLANCHA
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Codornices a la plancha', 'Codornices a la plancha', 'foto', 12, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Lomo adobado', 'Lomo adobado acompañado de patatas o ensalada', 'lomo_adobado', 9, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Bistec de ternera', 'Bistec de ternera acompañado de patatas o ensalada', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Secreto de cerdo DUROC', 'Secreto de cerdo DUROC acompañado de patatas o ensalada', 'secreto', 14, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Chuletillas de lechazo', 'Chuletillas de lechazo acompañadas de patatas o ensalada', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Chuletón de ternera(500gr)', 'Chuletón acompañado de patatas o ensalada', 'foto', 20, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Entrecot de ternera', 'Entrecot acompañado de patatas o ensalada', 'foto', 18, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Solomillo de ternera', 'Solomillo acompañado de patatas o ensalada', 'foto', 20, 
        (SELECT id FROM categorias WHERE categoria = 'Carnes a la plancha'));

    -- GUISOS CASEROS
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Codornices escabechadas', 'Codornices escabechadas acompañadas de ensalada', 'foto', 14, 
        (SELECT id FROM categorias WHERE categoria = 'Guisos caseros'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Perdiz escabechada', 'Perdiz escabechada acompañada de ensalada', 'foto', 20, 
        (SELECT id FROM categorias WHERE categoria = 'Guisos caseros'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Carrillada de ternera', 'Carrillada de ternera guisada', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Guisos caseros'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Pollo de corral', 'Pollo de corral guisado', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Guisos caseros'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Rabo de novillo', 'Rabo de novillo guisado', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Guisos caseros'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Lengua de ternera', 'Lengua de ternera guisada', 'foto', 14, 
        (SELECT id FROM categorias WHERE categoria = 'Guisos caseros'));

    -- PESCADOS
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Bacalao con tomate', 'Bacalao con tomate casero', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Bacalao al pilpil', 'descripcion', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Dorada a la plancha', 'Dorada fresca a la plancha acompañado de ensalada', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Lubina a la plancha', 'Lubina fresca a la plancha acompañado de ensalada', 'foto', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Merluza rellena de salmón', 'Merluza rebozada rellena de salmón acompañada de pimientos, huevo cocido y salsa casera', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Congrio a la plancha', 'Congrio a la plancha acompañado de ensalada', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Rodaballo a la plancha', 'Rodaballo a la plancha acompañado de ensalada', 'foto', 18, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Chicharro a la plancha', 'Chicharro a la plancha acompañado de ensalada', 'foto', 20, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Chipirones en su tinta', 'Chipirones en su tinta', 'chipirones_tinta', 15, 
        (SELECT id FROM categorias WHERE categoria = 'Pescados'));

    -- ALMUERZOS Y RACIONES
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Callos', 'Callos al estilo de la casa', 'callos', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Morro', 'Morro de cerdo al estilo de la casa', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Asadurilla', 'Asadurilla casera', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Manitas de Lechazo', 'Manitas de lechazo', 'manitas', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Oreja rebozada', 'Oreja rebozada con jamon york y queso', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Oreja a la plancha', 'Oreja a la plancha', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Manitas de cerdo', 'Manitas de cerdo guisadas', 'foto', 8, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Zamburiñas', 'Zamburiñas a la plancha', 'foto', 18, 
        (SELECT id FROM categorias WHERE categoria = 'Raciones'));

    -- POSTRES
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Flan de huevo', 'Flan de huevo casero', 'flan_huevo', 4.5, 
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Flan de queso', 'Flan de queso casero', 'flan_queso', 4.5, 
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Cuajada', 'Cuajada casera', 'cuajada', 4.5,
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Natillas', 'Natillas caseras', 'natillas', 4.5, 
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Crema Catalana', 'Crema Catalana casera', 'crema_catalana', 4.5, 
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Arroz con leche', 'Arroz con leche casero', 'arroz_leche', 4.5, 
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    INSERT INTO productos (nombre, descripcion, foto, precio, fk_categoria) 
    VALUES ('Tarta de queso', 'Tarta de queso casera', 'tarta_queso', 5, 
        (SELECT id FROM categorias WHERE categoria = 'Postres'));
    -- BUSCAR SI QUEDA ALGUN POSTRE MAS

-- TABLA VINOS
    -- CLARO RIBERA DEL DUERO
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Tierra Aranda', 'foto', 9, 
        (SELECT id FROM categorias WHERE categoria = 'Claro Ribera del duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Morozán', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Claro Ribera del duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Hoyo de la Vega', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Claro Ribera del duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Monte Pinadillo', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Claro Ribera del duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Viña Solorca', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Claro Ribera del duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Vegazar', 'foto', 10, 
        (SELECT id FROM categorias WHERE categoria = 'Claro Ribera del duero'), 'vino');
    
    -- BLANCOS, RUEDA Y VERDEJO
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Yllera Cinco', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Blanco, Rueda y Verdejo'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Verdejo de la casa', 'foto', 9, 
        (SELECT id FROM categorias WHERE categoria = 'Blanco, Rueda y Verdejo'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Doña Beatriz', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Blanco, Rueda y Verdejo'), 'vino');

    -- TINTO RIBERA DEL DUERO
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Meloso', 'foto', 9, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Eloy Escudero', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Balbás Roble', 'foto', 11, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Dominio de Cair', 'foto', 16, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Casajús Roble', 'foto', 13, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Flores de Callejo', 'foto', 14, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Figuero Roble', 'foto', 16, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Ceres Roble', 'foto', 17, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Valdehermoso', 'foto', 13, 
        (SELECT id FROM categorias WHERE categoria = 'Tinto Ribera del Duero'), 'vino');

    -- CRIANZA RIBERA DEL DUERO
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Pago de los Capellanes', 'foto', 30, 
        (SELECT id FROM categorias WHERE categoria = 'Crianza Ribera del Duero'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Pago de Carraovejas', 'foto', 40, 
        (SELECT id FROM categorias WHERE categoria = 'Crianza Ribera del Duero'), 'vino');
    
    -- OTRAS OPCIONES
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Vino de la casa tinto o claro', 'foto', 5, 
        (SELECT id FROM categorias WHERE categoria = 'Otras opciones'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Casera', 'foto', 2, 
        (SELECT id FROM categorias WHERE categoria = 'Otras opciones'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Agua 1.5L', 'foto', 3, 
        (SELECT id FROM categorias WHERE categoria = 'Otras opciones'), 'vino');
    INSERT INTO productos (nombre, foto, precio, fk_categoria, tipo) 
    VALUES ('Agua 0.5L', 'foto', 1.5, 
        (SELECT id FROM categorias WHERE categoria = 'Otras opciones'), 'vino');

-- -- TABLA CATEGORIAS_VINOS
--     -- CLARO RIBERA DEL DUERO
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Tierra Aranda'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Claro Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Morozán'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Claro Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Hoyo de la Vega'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Claro Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Monte Pinadillo'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Claro Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Viña Solorca'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Claro Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Vegazar'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Claro Ribera del Duero'));

--     -- BLANCO, RUEDA Y VERDEJO
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Yllera Cinco'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Blanco, Rueda y Verdejo'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Verdejo de la casa'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Blanco, Rueda y Verdejo'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Doña Beatriz'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Blanco, Rueda y Verdejo'));

--     -- TINTO RIBERA DEL DUERO
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Meloso'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Eloy Escudero'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Balbás Roble'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Dominio de Cair'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Casajús Roble'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Flores de Callejo'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Figuero Roble'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Ceres Roble'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Valdehermoso'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Tinto Ribera del Duero'));

--     -- CRIANZA RIBERA DEL DUERO
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Pago de los Capellanes'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Crianza Ribera del Duero'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Pago de Carraovejas'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Crianza Ribera del Duero'));

--     -- OTRAS OPCIONES
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Vino de la casa tinto o claro'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Otras opciones'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Casera'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Otras opciones'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Agua 1.5L'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Otras opciones'));
--     INSERT INTO categorias_vinos (fk_vinos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM vinos WHERE nombre = 'Agua 0.5L'),
--     (SELECT id FROM tipos_vino WHERE categoria = 'Otras opciones'));

-- TABLA CATEGORIAS_PRODUCTOS
--     -- ENTRANTES FRIOS
--     INSERT INTO productos (fk_categoria) 
--     VALUES ((SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Ensalada mixta\n(4p)'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Ensalada de escabechados'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Espárragos'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Lacón a la gallega'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Ibéricos\n(jamón y lomo)'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Ibéricos\n(jamón, lomo y queso)'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Ensalada de ventresca y pimiento'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Bacalao crudo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes frios'));
    
--     -- ENTRANTES CALIENTES
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Morcilla'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Chorizo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Picadillo casero'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Champiñón a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Pimientos rellenos de bacalao'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Revuelto de ajetes, setas y gambas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Revuelto de gulas con gambas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Croquetas caseras'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Calamares a la romana'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Sepia a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Mollejas con setas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Pulpo a la gallega'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Langostinos a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Gambas a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Almejas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Entrantes calientes'));

--     -- CARNES A LA PLANCHA
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Codornices a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Lomo adobado'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Bistec de ternera'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Secreto de cerdo DUROC'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Chuletillas de lechazo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Chuletón de ternera(500gr)'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Entrecot de ternera'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Solomillo de ternera'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Carnes'));
    
--     -- GUISOS CASEROS
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Codornices escabechadas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Guisos caseros'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Perdiz escabechada'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Guisos caseros'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Carrillada de ternera'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Guisos caseros'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Pollo de corral'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Guisos caseros'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Rabo de novillo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Guisos caseros'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Lengua de ternera'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Guisos caseros'));

--     -- PESCADOS
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Bacalao con tomate'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Bacalao al pilpil'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Dorada a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Lubina a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Merluza rellena de salmón'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Congrio a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Rodaballo a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Chicharro a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Chipirones en su tinta'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Pescados'));

--     -- RACIONES
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Callos'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Morro'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Asadurilla'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Manitas de lechazo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Oreja rebozada'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Oreja a la plancha'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Manitas de cerdo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Zamburiñas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Raciones'));

--     -- POSTRES
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Flan de huevo'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Flan de queso'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Cuajada'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Natillas'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Crema Catalana'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Arroz con leche'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
--     INSERT INTO categorias_productos (fk_productos, fk_categoria) 
--     VALUES (
--     (SELECT id FROM productos WHERE nombre = 'Tarta de queso'),
--     (SELECT id FROM tipos_producto WHERE categoria = 'Postres'));
