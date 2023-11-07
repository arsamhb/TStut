"use strict";
class employee {
    constructor(name, salary = 10000, stack, level) {
        this.name = name;
        this.salary = salary;
        this.stack = stack;
        this.level = level;
        this.paySalary = () => {
            console.log(`the salary of ${this.name} is ${this.salary}`);
        };
        this.name = name;
        this.salary = salary;
        this.stack = stack;
        this.level = level;
    }
}
const arsam = new employee("arasm", 12000, ["react", "html", "css"], "junior");
arsam.paySalary();
