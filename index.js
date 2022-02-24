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
        message: "What is your Manager's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {},
    ])
    .then((responseObject) => {
      const manager = new Manager(responseObject.managerName);
      console.log(manager);
    });
}
createManager();
