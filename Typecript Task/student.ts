// 3️ Student Class Creation and Object Property/Method Access

class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const student1 = new Student("Chinmay", 22);
student1.greet();
console.log(student1.name);

export { Student };
