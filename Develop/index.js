const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const Svg = require('./lib/SVG');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What will be your .svg document title?'
},
{
    type: 'maxlength-input',
    name: 'text',
    message: 'What will be your text?',
    maxLength: 3
},
{
    type: 'input',
    name: 'textColor',
    message: 'What will be your text color?'
},
{
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape.',
    choices: ['Circle', 'Triangle', 'Square'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'What will be your shape\'s color?'
}
]

function writeToFile(fileName, data) {
    fs.writeFile('C:\\Users\\Derrick\\bootcamp\\Classwork\\Day 32 Homework 3-12-23 module-10-challenge\\module-10-challenge-logo-generator\\Develop\\examples\\' + fileName, data, (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log(data);
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then(({ title, text, textColor, shapeType, shapeColor }) => {
            let shape;

            switch (shapeType) {
                case "Triangle":
                    shape = new Triangle()
                    break;
                case 'Circle':
                    shape = new Circle()
                    break
                default:
                    shape = new Square()
            }
            shape.setColor(shapeColor)
            const svg = new Svg();
            svg.setText(text, textColor)
            svg.setShape(shape)
            return writeToFile(`${title}.svg`, svg.render())
        })
}

init();