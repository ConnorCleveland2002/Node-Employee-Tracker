DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
id INT auto_increment,
name VARCHAR(30),
primary key (id)
);

CREATE TABLE role (
id INT auto_increment,
title VARCHAR(30),
salary decimal,
department_id INT,
primary key (id)
);

CREATE TABLE employee (
id INT auto_increment,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
primary key (id)
);