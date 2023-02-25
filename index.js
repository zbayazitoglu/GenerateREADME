const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'Enter Title: ',
    'Enter Description: ',
    'Enter Installation: ',
    'Enter Usage: ',
    'Enter License (can choose an open source licence from "https://choosealicense.com/"): ',
    'Enter Contributing: ',
    'Enters Tests: ',
    'Enter Github Username: ',
    'Enter Email: '
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync(fileName, "utf8"));
        }
      });
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'inst',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'contrb',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        }
    ])
    .then((response) => {
        const readMePage = generateMarkdown(response);
        writeToFile('README.md',readMePage);
    
    });

}

// function call to initialize program
init();
