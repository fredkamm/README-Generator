// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// console.log(inquirer);
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'project',
    },
    {
    type: 'input',
    message: 'Give a description about your project.',
    name: 'description',
    },
    {
    type: 'input',
    message: 'How to install your project?',
    name: 'install',
    },
    {
    type: 'input',
    message: 'How do you use your project?',
    name: 'usage',
    },
    {
    type: 'list',
    message: 'What license did you use?',
    name: 'license',
    choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
    },
    {
    type: 'input',
    message: 'Enter in your GitHub username',
    name: 'git',
    },
    {
    type: 'input',
    message: 'Enter in your email address',
    name: 'email',
    },
]   

inquirer
    .prompt([
     questions[0],
     questions[1],
     questions[2],
     questions[3],
     questions[4],
     questions[5],
     questions[6],
    ])
    .then((response) => {
        console.log(response)
        // fs.writeFile('log.md', JSON.stringify(response), (err) => {
        //     if (err === true) {
        //         console.log('error');
        //     }
        // })
    }
    );
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



