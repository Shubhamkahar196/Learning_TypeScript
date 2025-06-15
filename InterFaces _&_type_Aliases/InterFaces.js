"use strict";
// Interfaces
// In this example, the Person interface has three properties: name, age, and occupation. The occupation property is optional, denoted by the ? symbol.
// Using Interfaces to Define Object Shapes
// You can use interfaces to define the shape of an object:
const person1 = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};
const employee1 = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer',
    employeeId: 123,
    department: 'IT'
};
const id = '123';
const quantity = 10;
const employee = {
    name: 'John Doe',
    age: 30,
    employeeId: 123,
    department: 'IT'
};
// In this example, the EmployeeDetails type is an intersection of the Person and Employee interfaces. It has all the properties of both interfaces.
