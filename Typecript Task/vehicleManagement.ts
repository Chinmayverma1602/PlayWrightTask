// 6️ Vehicle Management using Abstract Class

abstract class Vehicle {
    constructor(public brand: string) {}
    abstract start(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log(`${this.brand} car is starting...`);
    }
}

const car1 = new Car("Tesla");
car1.start();

export { Vehicle, Car };
