--Creating Database
CREATE DATABASE nodemysql;

--using the database
use nodemysql;

-- creating table
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    numThrows INT NOT NULL AUTO_INCREMENT,
    won INT AUTO_INCREMENT,
    loose INT AUTO_INCREMENT
);

--show tables
SHOW TABLES;

--describe the table
describe customer;
