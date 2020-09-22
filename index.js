const imquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
// const questions = [
// ];

function devQuestions(){

    return inquirer.prompt(
    {
        type: 'input',
        message: 'What is the project name?',
        name:'title'
    },
    {
        type: 'input',
        message: 'Enter a description of the project.',
        name:'description'  
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project? Write NONE if no instructions.',
        name:'installation'
    },
    {
        type: 'input',
        message: 'How do you want your app to be used?',
        name:'usage'  
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name:'contribution'  
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name:'test'  
    },
    {
        type: 'checkbox',
        message: 'Select a license?',
        choices: [
            'Apache',
            'Boost',
            'MIT',
            'GNU GPLv3'
        ],
        name:'license'  
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name:'username'  
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name:'email'  
    },
    )
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
