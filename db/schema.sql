-- DROP DATABASE IF EXISTS recipes_db;

CREATE DATABASE recipes_db;

USE recipes_db;

DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id INT(30) NOT NULL AUTO_INCREMENT,
    -- burger_name
    ingredient_name VARCHAR(50) NOT NULL,
    -- devoured
    myFridge tinyint(1) NOT NULL DEFAULT "0",
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM recipes;