const inquirer = require('inquirer');
const Manager = require('./Manager');
const prompts = require('./prompts');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fileGenerator = require('./fileGenerator');
let employees = [];
function askManagerQuestions() {
    inquirer.prompt(prompts.managerQuestions).then((response) => {
        employees.push(new Manager(response.name, response.id, response.email, response.officeNumber));
        showMenuOptions();
    })
}

function askInternQuestions() {
    inquirer.prompt(prompts.internQuestions).then((response) => {
        employees.push(new Intern(response.name, response.id, response.email, response.school));
        showMenuOptions();
    })
}

function askEngineerQuestions() {
    inquirer.prompt(prompts.engineerQuestions).then((response) => {
        employees.push(new Engineer(response.name, response.id, response.email, response.username));
        showMenuOptions();
    })
}

function showMenuOptions() {
    inquirer.prompt(prompts.menuOptions).then((response) => {
        if(response.menuChoice === 'Finish') {
            fileGenerator.generateFile(employees);
        } else if(response.menuChoice === 'Add an Engineer') {
            askEngineerQuestions();
        } else {
            askInternQuestions();
        }
        
    })
}



function runProgram() {
    askManagerQuestions();
}

exports.runProgram = runProgram;