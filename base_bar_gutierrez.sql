-- Creamos la base de datos
CREATE DATABASE IF NOT EXISTS bar_gutierrez;
USE bar_gutierrez;

-- Creamos las tablas
-- TABLA MESAS
CREATE TABLE IF NOT EXISTS mesas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre CHAR(40) NOT NULL,
    estado BINARY NOT NULL,
    capacidad INT NOT NULL
) ENGINE = INNODB;

-- TABLA CATEGORIAS_PRODUCTOS (o simplemente CATEGORIAS)
CREATE TABLE IF NOT EXISTS categorias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoria CHAR(40) NOT NULL
) ENGINE = INNODB;

-- TABLA PRODUCTOS
CREATE TABLE IF NOT EXISTS productos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre CHAR(60) NOT NULL,
    descripcion CHAR(140) NOT NULL,
    foto CHAR(100) NOT NULL,
    precio INT NOT NULL,
    fk_categoria INT NOT NULL,
    tipo ENUM('plato', 'vino') NOT NULL DEFAULT 'plato',
    FOREIGN KEY (fk_categoria) REFERENCES categorias (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA USUARIOS
CREATE TABLE IF NOT EXISTS usuarios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    admin BINARY(1) NOT NULL,
    nombre CHAR(40) NOT NULL,
    email CHAR(50) NOT NULL UNIQUE,
    password CHAR(255) NOT NULL,
    activo BINARY(1) NOT NULL,
    telefono CHAR(9) NOT NULL
) ENGINE = INNODB;

-- TABLA ESTADOS
CREATE TABLE IF NOT EXISTS estados (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(20) NOT NULL,
    observaciones CHAR(100) NULL
) ENGINE = INNODB;

-- TABLA PEDIDOS
CREATE TABLE IF NOT EXISTS pedidos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    producto CHAR(50) NOT NULL,
    fecha_pedido DATETIME NOT NULL,
    cantidad INT NOT NULL,
    precio INT NOT NULL,
    fecha_recogida DATETIME NOT NULL,
    fk_cliente INT NOT NULL,
    observaciones CHAR(100) NOT NULL,
    fk_estado INT NOT NULL,
    FOREIGN KEY (fk_cliente) REFERENCES usuarios (id)
    ON UPDATE CASCADE
    FOREIGN KEY (fk_estado) REFERENCES estados (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA DETALLE_PEDIDO
CREATE TABLE IF NOT EXISTS detalle_pedido (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_pedido INT NOT NULL,
    fk_producto INT NOT NULL,
    cantidad INT NOT NULL,
    observaciones CHAR(50) NULL,
    FOREIGN KEY (fk_pedido) REFERENCES pedidos (id)
    ON UPDATE CASCADE,
    FOREIGN KEY (fk_producto) REFERENCES productos (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA RESERVAS
CREATE TABLE IF NOT EXISTS reservas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_cliente INT NOT NULL,
    fk_mesa INT NOT NULL,
    num_personas INT NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (fk_cliente) REFERENCES usuarios (id)
    ON UPDATE CASCADE,
    FOREIGN KEY (fk_mesa) REFERENCES mesas (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;
