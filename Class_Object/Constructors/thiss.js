"use strict";
//  We define a class Abcd with a property name and a method changeSomeStuff.
class abcd {
    constructor() {
        this.name = "sk";
    }
    // - The changeSomeStuff method uses this to access the name property of the current object.
    changeSomeStuff() {
        console.log(this.name);
        // - When we create an instance of the Abcd class and call the changeSomeStuff method, it logs the value of name to the console.
    }
}
