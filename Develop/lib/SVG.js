class Svg {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
    }

    render() {
        return `<svg version="1.1" width="400" height="110" xmlns="http://www.w3.org/2000/svg"> ${this.shape} ${this.text} </svg>`
    }

    setText(message, color){
        this.text = `<text x="20" y="35" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    
    }

    setShape(shape){
        this.shape = shape.render();
    }
}

module.exports = Svg;