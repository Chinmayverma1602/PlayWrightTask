// 7️ Shape Area Calculator using Abstract Method

class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new TypeError("Cannot instantiate abstract class Shape");
        }
    }

    calculateArea() {
        throw new Error("calculateArea() method must be implemented by subclass");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());

module.exports = { Shape, Circle };
