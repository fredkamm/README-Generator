// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Title input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'Give a description about your project.',
        name: 'description',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Title input is required'
            }
        },
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
        type: 'input',
        message: 'Any shout outs you would like to give that helped you complete this project?',
        name: 'contributors',
    },
    {
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
    },
    {
        type: 'list',
        message: 'What badges have you earned?',
        name: 'badges',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
    },
    {
        type: 'input',
        message: 'Enter in your GitHub username',
        name: 'git',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Title input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'Enter in your email address',
        name: 'email',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Title input is required'
            }
        },
    },
]


// TODO: Create a function to write README file
function writeToFile() {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const pageContent = generateMarkdown(response);
    
            fs.writeFile('generated_Readme.md', pageContent, (err) => {
                if (err === true) {
                    console.log('error');
                }
            })
        })
};

// Function call to initialize app
init();



