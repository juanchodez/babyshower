CREATE DATABASE babyshower;

USE babyshower;

CREATE TABLE personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    asistencia VARCHAR(2)
);

CREATE TABLE regalos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cover VARCHAR(100) NOT NULL,
    regalo VARCHAR(100) NOT NULL
);

CREATE TABLE asistentes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cover VARCHAR(100) NOT NULL,
    regalo VARCHAR(100) NOT NULL,
    asistencia VARCHAR(2)
);

SELECT * FROM personas;