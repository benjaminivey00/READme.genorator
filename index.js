const imquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile)

function devQuestions(){

    return inquirer.prompt([
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
    // {
    //     type: 'checkbox',
    //     message: 'Select a license?',
    //     choices: [
    //         'Apache',
    //         'Boost',
    //         'MIT',
    //         'GNU GPLv3'
    //     ],
    //     name:'license'  
    // },
    {
        type: 'input',
        message: 'Do you have any questions?',
        name:'questions'  
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
    ]);
}

function generateMarkdown(data) {
    return `# ${data.title}
  
    # Table of Contents
  
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)

  
## Description:


    ${data.description}
    ## Installation:
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributors
    ${data.contribution}
    ## Test
    ${data.test}

    ## Questions
    ${data.questions}
    ${data.username}
    ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;

// function to initialize program
async function init() {
    try {
            const data = await devQuestions();

            const readME = generateMarkdown(data);

            await writeFileAsync("READ.md", readME);
            console.log('success');
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();
