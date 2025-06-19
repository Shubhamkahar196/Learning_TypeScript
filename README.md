TypeScript Learning Repository

README.md

TypeScript Learning Repository

This repository contains examples and exercises for learning TypeScript. TypeScript is a statically typed, multi-paradigm programming language developed by Microsoft as a superset of JavaScript.

Topics Covered
- Basic Types: Number, String, Boolean, Array, Null, Undefined
- Classes and Objects: Defining classes, constructors, properties, methods
- Getters and Setters: Controlling access to object properties
- Interfaces: Defining contracts for objects
- Type Aliases: Creating aliases for types
- Static Members: Static properties and methods
- Abstract Classes: Abstract classes and methods
- Functions: Function types, function overloads
- Generics: Generic classes, interfaces, and functions
- Modules: Importing and exporting modules
- Type Assertion: Asserting types using the as keyword

Examples
Each topic has examples and exercises to help you learn and practice TypeScript.

Basic Types
- Number, String, Boolean, Array, Null, Undefined

Classes and Objects
- Defining classes, constructors, properties, methods


class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}


Getters and Setters
- Controlling access to object properties


class Person {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}


Interfaces
- Defining contracts for objects


interface Person {
    name: string;
    age: number;
}


Type Aliases
- Creating aliases for types


type Person = {
    name: string;
    age: number;
}


Static Members
- Static properties and methods


class Person {
    static count: number = 0;

    constructor() {
        Person.count++;
    }

    static getCount(): number {
        return Person.count;
    }
}


Abstract Classes
- Abstract classes and methods


abstract class Person {
    abstract getName(): string;
}

class Employee extends Person {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}


Functions
- Function types, function overloads


function add(x: number, y: number): number {
    return x + y;
}


Generics
- Generic classes, interfaces, and functions


class Container<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }
}


Modules
- Importing and exporting modules


// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// main.ts
import { add } from './math';
console.log(add(2, 3)); // Outputs: 5


Type Assertion
- Asserting types using the as keyword


let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;


Contributing
Feel free to contribute to this repository by adding more examples, exercises, or topics.

License
This repository is licensed under the MIT License.
