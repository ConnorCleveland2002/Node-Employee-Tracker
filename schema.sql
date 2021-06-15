DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employees (
id INT auto_increment,
first_name VARCHAR(30),
last_name VARCHAR(30),
manager_id VARCHAR(30),
role_id INT,
primary key (id)
);

CREATE TABLE departments (
id INT auto_increment,
name VARCHAR(30),
primary key (id)
);

CREATE TABLE roles (
id INT auto_increment,
title VARCHAR(30),
salary decimal,
department_id INT,
primary key (id)
);