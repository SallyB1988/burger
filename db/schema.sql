DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	eaten BOOLEAN,
	PRIMARY KEY (id)
);