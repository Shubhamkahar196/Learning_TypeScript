"use strict";
class User {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new User("shubham", 25);
console.log(u1.name); // Output: shubham
u1.name = "Rahul";
console.log(u1.name); // Output: Rahul
// - Getters and setters allow controlled access to the _name property.
// - The get keyword defines a getter that returns the value of _name.
// - The set keyword defines a setter that updates the value of _name.
// - Using u1.name calls the getter, while assigning a value to u1.name calls the setter.
// - This approach encapsulates the _name property and provides a clean interface for accessing and modifying it.
