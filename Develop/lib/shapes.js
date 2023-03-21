class Shape {
    constructor() {
        this.color = '';

    }
    setColor(color) {
        this.color = color;
    }


}

class Triangle extends Shape {
    render() {
        return `<polygon points="50, 50, 100, 100, 0, 100" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="300" height="300" fill="${this.color}" />`
    }

}

module.exports = { Triangle, Circle, Square }