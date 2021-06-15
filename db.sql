USE employees_db;

INSERT INTO departments (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Engineer', 80000, 1),
('Accoutant', 70000, 2),
('Lawyer', 90000, 3),
('Sales', 20000, 4),
('Manager', 1000000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Bobby', 'McKermit', 1, 'Obamna'),
('Harold', 'Potman', 2, 'Obamna'),
('Jessica', 'Albania', 3, 'Obamna'),
('Georges', 'Clooner', 4, 'Obamna'),
('Baroque', 'Obamna', 5, 'null');