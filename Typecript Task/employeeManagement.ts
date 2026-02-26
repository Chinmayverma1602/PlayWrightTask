// 5️ Employee Management using Inheritance

class Employee {
    constructor(public name: string, public salary: number) {}

    getDetails(): void {
        console.log(`Employee: ${this.name}, Salary: ₹${this.salary}`);
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    getManagerDetails(): void {
        console.log(`${this.name} manages ${this.department}`);
    }
}

const manager1 = new Manager("Rahul", 80000, "IT");
manager1.getDetails();
manager1.getManagerDetails();

export { Employee, Manager };
