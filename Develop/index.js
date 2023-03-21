const fs = require('fs');
const inquirer = require('inquirer');
const Svg = require('./lib/SVG');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [{
    type: 'input',
    name: 'text',
    message: 'What will be your text?'
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
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;

            switch (shapeType) {
                case "triangle":
                    shape = new Triangle()
                    break;
                case 'circle':
                    shape = new Circle()
                    break
                default:
                    shape = new Square()
            }
            shape.setColor(shapeColor)
            const svg = new Svg();
            svg.setText(text, textColor)
            svg.setShape(shape)
            return writeToFile(`generate.svg`, svg.render())
        })
}

init();