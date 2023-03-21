const {Triangle, Circle, Square} = require('../shapes');

describe('Triangle', ()=>{
    describe('render', () =>{
        it('should render a Triangle', () =>{
            const answer = `<polygon points="150, 18 244, 182 56, 182" fill="" />`;
            const render = new Triangle();
            expect(render.render()).toEqual(answer)
        })
    })

    describe('setColor', () =>{
        it('should set color to blue', () =>{
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})

describe('Circle', ()=>{
    describe('render', () =>{
        it('should render a Circle', () =>{
            const answer = `<circle cx="150" cy="100" r="80" fill="" />`;
            const render = new Circle();
            expect(render.render()).toEqual(answer)
        })
    })
})

describe('Square', ()=>{
    describe('render', () =>{
        it('should render a Square', () =>{
            const answer = `<rect width="250" height="250" fill="" />`;
            const render = new Square();
            expect(render.render()).toEqual(answer)
        })
    })
})