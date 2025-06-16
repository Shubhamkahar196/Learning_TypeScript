"use strict";
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
    checkAge() {
        console.log(`You are ${this.age} years old`);
    }
    test() {
        this.checkAge(); // Okay, can access private method within the class
    }
}
class Employee extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
    testAddress() {
        console.log(this.address); // Okay, can access protected property within subclass
    }
}
let person11 = new Person("John", 30, "New York");
console.log(person11.name); // Okay, public property
// console.log(person1.age); // Error, age is private
// console.log(person1.address); // Error, address is protected
person11.sayHello(); // Okay, public method
// person1.checkAge(); // Error, checkAge is private
person11.test(); // Okay, public method that calls private method
let employee112 = new Employee("Jane", 25, "Los Angeles");
employee.testAddress(); // Okay
