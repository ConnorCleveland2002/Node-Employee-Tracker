const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require("console.table");

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
        message: "Select Action:",
        choices: [
            "View employees",
            "View departments",
            "View roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee role",
            "Exit",
        ],
    })
        .then(function (answer) {
            switch (answer.start) {
                case "View employees": {
                    query = "SELECT * FROM employees";
                    connection.query(query, function (err, res) {
                        console.table(res);
                        init();
                    })
                    break;
                };

                case "View departments": {
                    query = "SELECT * FROM departments";
                    connection.query(query, function (err, res) {
                        console.table(res);
                        init();
                    })
                    break;
                };

                case "View roles": {
                    query = "SELECT * FROM roles";
                    connection.query(query, function (err, res) {
                        console.table(res);
                        init();
                    })
                    break;
                };

                case "Add employee": {
                    connection.query(
                        "SELECT * FROM roles", function (err, res) {
                            inquirer.prompt([
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
                                    name: "manager_id",
                                    type: "input",
                                    message: "Enter Manager:",
                                },
                                {
                                    name: "role",
                                    type: "list",
                                    choices:
                                        function () {
                                            let roleArray = [];
                                            for (let i = 0; i < res.length; i++) {
                                                roleArray.push(res[i].title);
                                            }
                                            return roleArray;
                                        },
                                    message: "Enter role:",
                                },
                            ])
                                .then(function (answer) {
                                    let role_id;
                                    for (let e = 0; e < res.length; e++) {
                                        if (res[e].title == answer.role) {
                                            role_id = res[e].id;
                                        }
                                    }
                                    connection.query(
                                        "INSERT INTO employees SET ?",
                                        {
                                            first_name: answer.first_name,
                                            last_name: answer.last_name,
                                            manager_id: answer.manager_id,
                                            role_id: role_id,
                                        },
                                        init()
                                    )
                                })
                        })
                    break;
                };

                case "Add department": {
                    inquirer.prompt([
                        {
                            name: "newDepartment",
                            type: "input",
                            message: "Enter Department:",
                        },
                    ])
                        .then(function (answer) {
                            connection.query(
                                "INSERT INTO departments SET ?",
                                {
                                    name: answer.newDepartment,
                                });
                            let query = "SELECT * FROM departments";
                            connection.query(query,
                                init()
                            );
                        });
                    break;
                };

                case "Add role": {
                    connection.query(
                        "SELECT * FROM departments",
                        function (err, res) {
                            inquirer
                                .prompt([
                                    {
                                        name: "new_role",
                                        type: "input",
                                        message: "Enter Role:",
                                    },
                                    {
                                        name: "salary",
                                        type: "input",
                                        message: "Enter Salary:",
                                    },
                                    {
                                        name: "department",
                                        type: "list",
                                        choices: function () {
                                            let deptArry = [];
                                            for (let i = 0; i < res.length; i++) {
                                                deptArry.push(res[i].name);
                                            }
                                            return deptArry;
                                        },
                                        message: "Enter Department:"
                                    },
                                ])
                                .then(function (answer) {
                                    let department_id;
                                    for (let e = 0; e < res.length; e++) {
                                        if (res[e].name == answer.departments) {
                                            department_id = res[e].id;
                                        }
                                    }
                                    connection.query(
                                        "INSERT INTO roles SET ?",
                                        {
                                            title: answer.new_role,
                                            salary: answer.salary,
                                            department_id: department_id,
                                        },
                                        init()
                                    );
                                })
                        })
                    break;
                };

                case "Update employee role": {
                    init();
                    break;
                }

                case "Exit": {
                    connection.end();
                };
            }
        });
};

init();