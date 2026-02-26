// 7️ Shape Area Calculator using Abstract Method

abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());

export { Shape, Circle };
