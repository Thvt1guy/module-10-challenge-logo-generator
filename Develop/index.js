const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./utils/generateSVG');

const questions = [{
    type: 'input',
    name: 'file',
    message: 'what will be your file name? [DO NOT INCLUDE ".svg" IN YOUR INPUT]'
},
{
    type: 'input',
    name: 'text',
    message: 'What will be your text?'
},
{
    type: 'input',
    name: 'text-color',
    message: 'What will be your text color?'
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape.',
    choices: ['Circle','Triangle','Square'],
},
{
    type: 'input',
    name: 'shape-color',
    message: 'What will be your shape\'s color?'
}
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log(data);
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(`${answers.file}.svg`, generateSVG(answers))
        })
}

init();