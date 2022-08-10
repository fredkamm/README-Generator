const fs = require('fs')
const inquirer = require('inquirer')
const index = require('./index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  
  ## Description
  ### ${response.description}
  
  ## Table of Contents
  ###  * [Installation](#instal)
  ###  * [Usage](#usage)
  ###  * [Contributors](#contributors)
  ###  * [License](#license)
  ###  * [Badges](#badges)
  ###  * [Questions](#questions)

  ## Installation
  ### ${response.install}

  ## Usage
  ### ${response.usage}

  ## Contributors
  ### ${response.contributors}

  ## License
  ### ${response.license}

  ## Badges  
  ### ${response.badges}

  ## Questions
  ### Any questions please contact me via:
  ### Github: https://github.com/${response.git}
  ### OR
  ### Email: ${response.email}

`;
}

module.exports = generateMarkdown;
