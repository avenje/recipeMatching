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

CREATE TABLE stock(
    id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL DEFAULT "food",
    pantry BOOLEAN NOT NULL DEFAULT 0,
    spice BOOLEAN NOT NULL DEFAULT 0,
    fridge BOOLEAN NOT NULL DEFAULT 0,
    include BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);


SELECT * FROM recipes;