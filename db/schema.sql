CREATE DATABASE burgers_db; 

USE burgers_db; 

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
  devoured Boolean NOT NULL, 
	PRIMARY KEY (id)
);

SELECT * FROM burgers; 