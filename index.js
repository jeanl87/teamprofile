const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const generateWebpage = require("./src/webpage");
const fs = require("fs");
const path = require("path");
const teamMembers = [];

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
      teamMembers.push(manager);
      promptMenu();
    });
}

const promptMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an option to proceed:",
        choices: ["add an engineer", "add an intern", "finish building team"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
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
      teamMembers.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
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
      teamMembers.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {};

createManager();
