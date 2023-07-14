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
        message: 'How do you use your project?',
        name: 'usage',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Title input is required'
            }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GNU GPL v3.0', 'Mozilla 2.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of the four options')
                return false;
                }
        }
    },
    {
        type: 'input',
        message: 'Any shout outs you would like to give that helped you complete this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
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
function writeToFile(response) {
    
    const pageContent = generateMarkdown(response);
    fs.writeFile('generated_Readme.md', pageContent, (err) => {
        if (err === true) {
            console.log('error');
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)

            const pageContent = generateMarkdown(response);
            writeToFile(response)
        })
};

// Function call to initialize app
init();

