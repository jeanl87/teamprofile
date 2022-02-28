const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your team Manager's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((responseObject) => {
      const manager = new Manager(responseObject.managerName);
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Engineer",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the name of your github name?",
      },
    ])
    .then((responseObject) => {
      const engineer = new Engineer(responseObject.engineerName);
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Intern",
        message: "What is your Intern's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of your school?",
      },
    ])
    .then((responseObject) => {
      const intern = new Intern(responseObject.Name);
    });
}

createManager();
// createEngineer();
// createIntern();
