// 5️ Employee Management using Inheritance

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        console.log(`Employee: ${this.name}, Salary: ₹${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    getManagerDetails() {
        console.log(`${this.name} manages ${this.department}`);
    }
}

const manager1 = new Manager("Rahul", 80000, "IT");
manager1.getDetails();
manager1.getManagerDetails();

module.exports = { Employee, Manager };
