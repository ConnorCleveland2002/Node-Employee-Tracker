USE employees_db;

INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Engineer', 80000, 1),
('Accoutant', 70000, 2),
('Lawyer', 90000, 3),
('Sales', 20000, 4),
('Manager', 1000000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bobby', 'McKermit', 1, 142),
('Harold', 'Potman', 2, 757),
('Jessica', 'Albania', 3, 385),
('Georges', 'Clooner', 4, 943),
('Baroque', 'Obamna', 5, 011);