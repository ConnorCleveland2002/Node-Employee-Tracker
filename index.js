const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "connorray798",
    database: "employees_db",
});

function init() {
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "Select an option:",
        choices: [
            "View employees",
            "View departments",
            "View roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee role",
            "Delete employee",
            "Exit",
        ],
    })
        .then(function (answer) {
            switch (answer.action) {
                case "View employees": {

                };
                case "View departments": {
                    const query
                };
                case "View roles": {
                    const query
                };
                case "Add employee": {
                    inquirer
                        .prompt([
                            {
                                name: "first_name",
                                type: "input",
                                message: "Enter First Name:",
                            },
                            {
                                name: "last_name",
                                type: "input",
                                message: "Enter Last Name:",
                            },
                            {
                                name: "manager",
                                type: "input",
                                message: "Enter Manager:",
                            },
                            {
                                name: "role",
                                type: "list",
                                choices: roleArray = [],
                                message: "Enter role:",
                            },
                        ])
                        .then(function (answer) {

                        },
                            connection.query(
                                "INSERT INTO employee SET ?",
                                {
                                    first_name: answer.first_name,
                                    last_name: answer.last_name,
                                    manager: answer.manager,
                                    role: role,
                                },
                                function (err) {
                                    console.log("Employee added...");
                                }
                            )
                        )
                };

                case "Add department": {
                    inquirer
                        .prompt([
                            {
                                name: "newDepartment",
                                type: "input",
                                message: "Input new Department:",
                            },
                        ])
                        .then(function (answer) {

                        });
                };
                case "Add a role": {
                    inquirer
                        .prompt([
                            {
                                name: "new_role",
                                type: "input",
                                message: "Enter the new role:",
                            },
                            {
                                name: "salary",
                                type: "input",
                                message: "Enter the Salary:",
                            },
                            {
                                name: "Department",
                                type: "list",
                                choices: deptArry = [],
                            },
                        ])
                        .then(function (answer) {
                            query(
                                "INSERT INTO role SET ?",
                                {
                                    title: answer.new_role,
                                    salary: answer.salary,
                                    department: department,
                                },
                                function (err, res) {
                                    console.log("New role added...");
                                }
                            );
                        })
                };
                case "Update an employee role": {

                };
                case "Delete an employee": {

                };
                case "Exit": {
                    end();
                };
            }
        });
};

init();