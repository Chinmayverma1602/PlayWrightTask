// 6️ Vehicle Management using Abstract Class

class Vehicle {
    constructor(brand) {
        if (this.constructor === Vehicle) {
            throw new TypeError("Cannot instantiate abstract class Vehicle");
        }
        this.brand = brand;
    }

    start() {
        throw new Error("start() method must be implemented by subclass");
    }
}

class Car extends Vehicle {
    start() {
        console.log(`${this.brand} car is starting...`);
    }
}

const car1 = new Car("Tesla");
car1.start();

module.exports = { Vehicle, Car };
