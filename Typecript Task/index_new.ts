// Main index file - Imports and runs all examples

import { assignRole } from "./roleManager";
import { processPayment } from "./paymentSystem";
import { Student } from "./student";
import { BankAccount } from "./bankAccount";
import { Employee, Manager } from "./employeeManagement";
import { Vehicle, Car } from "./vehicleManagement";
import { Shape, Circle } from "./shapeCalculator";
import { User } from "./user";
import { fetchProducts } from "./productFetch";
import { fetchUsers } from "./userFetch";

// Run all examples
console.log("=== Running TypeScript Examples ===\n");

// 1. Role Manager
console.log("1. User Role Manager:");
assignRole("editor");

// 2. Payment System
console.log("\n2. Payment System:");
processPayment({ amount: 1000, method: "creditCard" });

// 3. Student
console.log("\n3. Student Class:");
const student = new Student("Priya", 20);
student.greet();

// 4. Bank Account
console.log("\n4. Bank Account:");
const account = new BankAccount("Raj", 5000, "Current");
account.deposit(1500);

// 5. Employee Management
console.log("\n5. Employee Management:");
const employee = new Manager("Amit", 60000, "HR");
employee.getDetails();
employee.getManagerDetails();

// 6. Vehicle Management
console.log("\n6. Vehicle Management:");
const vehicle = new Car("BMW");
vehicle.start();

// 7. Shape Calculator
console.log("\n7. Shape Calculator:");
const shape = new Circle(7);
console.log("Circle Area:", shape.calculateArea().toFixed(2));

// 8. User Module
console.log("\n8. User Module:");
const user = new User("Chinmay");
console.log("Username:", user.getUsername());

// 9. Product Fetch
console.log("\n9. Product Fetch (Promises):");
fetchProducts();

// 10. User Fetch
console.log("\n10. User Fetch (Async/Await):");
fetchUsers();
