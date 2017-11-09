DROP DATABASE IF EXISTS recipes_db;

CREATE DATABASE recipes_db;

USE recipes_db;

CREATE TABLE recipes (
    id INT(30) NOT NULL AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL,
    myFridge tinyint(1) NOT NULL DEFAULT "0",
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT(255) NOT NULL AUTO_INCREMENT,
    username VARCHAR(1000) NOT NULL,
    googleid VARCHAR(1000) NOT NULL,
    thumbnail VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);


SELECT * FROM recipes;