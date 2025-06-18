***** A journey for TypeScript *******
# installing -> npm i typescript -g
#  tsconfig.json->  tsc --init
# run code -> tsc app.ts or tsc
# run one time and they compile every time just like(nodemon) -> tsc --watch

*** every javascript code is valid typeScript *****


# basic types ****
//Basic types
# Primitive types (number, string, boolean)


//  Primitive types are the basic building blocks of TypeScript.
// - They include:
//     - number: represents numeric values, e.g., 42
//     - string: represents text values, e.g., "hello"
//     - boolean: represents boolean values, e.g., true or false
//     - null: represents the absence of any object value
//     - undefined: represents an uninitialized variable or a non-existent property


let num: number = 42;
let str: string = "hello";
let isAdmin: boolean = true;
let empty: null = null;
let notDefined: undefined = undefined;

# Arrays 

// - An array is a collection of values of the same type stored in a single variable.
// - In TypeScript, you can define an array using the [] syntax or the Array type.


let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];


# Enums 

// - Enums allow you to define a set of named values.
// - Enums are useful when you have a variable that can take on a limited number of possible values.


enum Color {
  Red,
  Green,
  Blue
}

let favoriteColor: Color = Color.Green;


enum UserRoles{
    Admin = "admin",
    GUEST = "guest",
    Super_admin = 'super_admin'
}

UserRoles.Admin

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}

StatusCodes.NOTFOUND


# tuples = fixed number


// In TypeScript, tuples are a type of array that has a fixed number of elements, and each element can have a different type. Tuples allow you to express an array with a fixed number of elements of specific types.

// Tuple Syntax:


// let tupleName: [type1, type2, type3, ...];



let person: [string, number];
person = ["John", 30];


// In this example, person is a tuple with two elements: a string and a number.

// Key Features:

// 1. Fixed Length: Tuples have a fixed number of elements.
// 2. Specific Types: Each element in a tuple can have a different type.
// 3. Order Matters: The order of elements in a tuple matters.

let arrr: [string,number] = ["sk", 22];


# Any, Unknown, Void, NULL, Undefined, Never


# 1. Any:
//     - The any type represents any JavaScript value.
//     - It’s a way to opt-out of type checking for a variable.
//     - Use it when you’re not sure what type of value a variable will hold, but be cautious as it can lead to runtime errors.


let data1: any = "Hello";
data1 = 42;
data1 = true;


# 2. Unknown:
//     - The unknown type is similar to any, but safer.
//     - A variable of type unknown can hold any value, but you need to perform type checking or assertions before using it.
//     - It’s useful when you want to ensure type safety without knowing the exact type.


let data2: unknown = "Hello";
if (typeof data2 === "string") {
  console.log(data2.toUpperCase());
}


# 3. Void:
//     - The void type represents the absence of any value at all.
//     - It’s typically used as the return type for functions that don’t return a value.


function logMessage(message: string): void {
  console.log(message);
}


# 4. Null:
//     - The null type represents the intentional absence of any object value.
//     - In TypeScript, null is often used in union types (e.g., string | null) to indicate that a variable might have no value.


let userInput1: string | null = null;
userInput1 = "Hello";


# 5. Undefined:
//     - The undefined type represents a variable that has been declared but not assigned a value.
//     - Like null, it’s often used in union types to indicate the absence of a value.


let userInput: string | undefined;
console.log(userInput); // undefined


# 6. Never:
//     - The never type represents values that never occur.
//     - It’s used for functions that always throw an error or never return (e.g., infinite loops).


function error(message: string): never {
  throw new Error(message);
}



# Interfaces

Interfaces are used to define the shape of an object, including the properties, methods, and their types. They are useful for defining contracts that must be implemented by classes or objects.

# Defining Interfaces

Here's an example of defining an interface:

interface Person {
  name: string;
  age: number;
  occupation?: string; // optional property
}

In this example, the Person interface has three properties: name, age, and occupation. The occupation property is optional, denoted by the ? symbol.

 # Using Interfaces to Define Object Shapes

You can use interfaces to define the shape of an object:

const person: Person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

In this example, the person object conforms to the Person interface.

# Extending Interfaces

You can extend interfaces using the extends keyword:

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  employeeId: 123,
  department: 'IT'
};

In this example, the Employee interface extends the Person interface and adds two new properties: employeeId and department.

# Type Aliases

Type aliases are used to give a new name to an existing type. They are useful for simplifying complex types and making them more readable.

# Defining Type Aliases

Here's an example of defining a type alias:

type StringOrNumber = string | number;

const id: StringOrNumber = '123';
const quantity: StringOrNumber = 10;

In this example, the StringOrNumber type alias represents a type that can be either a string or a number.

# Intersection Types

Intersection types are used to combine multiple types into a single type. They are useful for creating complex types that have multiple properties and methods.

# Defining Intersection Types

Here's an example of defining an intersection type:

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: 'John Doe',
  age: 30,
  employeeId: 123,
  department: 'IT'
};

In this example, the EmployeeDetails type is an intersection of the Person and Employee interfaces. It has all the properties of both interfaces.

# Benefits of Interfaces and Type Aliases

Using interfaces and type aliases provides several benefits, including:

- Improved code readability and maintainability
- Better error messages and type checking
- Increased code safety and reliability
- Simplified complex types and improved code reusability

By using interfaces and type aliases effectively, you can write more robust, maintainable, and scalable TypeScript code.

# Classes:
    - Define the structure and behavior of objects.
    - Are essentially templates or blueprints.
    - Can be used to create multiple objects.
# Objects:
    - Are instances of classes.
    - Have their own state (data) and behavior (methods).
    - Can be manipulated and interacted with.

#    Constructor
A constructor is a special method in a class that is used to initialize objects when they are created. It has the same name as the class and does not have a return type, not even void.

# Key Characteristics of Constructors
- Initialization: Constructors are used to initialize objects with default or initial values.
- Same Name as Class: Constructors have the same name as the class.
- No Return Type: Constructors do not have a return type, not even void.
- Called Automatically: Constructors are called automatically when an object is created.


Example
Here's an example of a constructor in TypeScript:


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

# "this" Keyword
The this keyword is a reference to the current object being used. It's like a pointer that says "I'm talking about myself".

# How it Works
When you use this inside a class, it refers to the instance of that class. You can use this to access properties and methods of the current object.

# Example

class Person {
  name: string;

  constructor(name: string) {
    this.name = name; // "this" refers to the Person object
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person = new Person("John");
person.sayHello(); // Output: Hello, my name is John

# Access Modifiers Notes
# Public
- Accessible from anywhere: Can be accessed from within and outside the class.
- No restrictions: Can be used freely without any limitations.

# Private
- Accessible only within the class: Can only be accessed from within the class itself.
- Hidden from outside: Not accessible from outside the class, providing data hiding and encapsulation.

# Protected
- Accessible within the class and its subclasses: Can be accessed from within the class and its subclasses.
- Not accessible from outside: Not accessible from outside the class or its subclasses, providing some level of data protection.

# Key Points
- Use public for: Properties and methods that need to be accessed from outside the class.
- Use private for: Properties and methods that should be hidden from outside the class.
- Use protected for: Properties and methods that should be accessible within the class and its subclasses.

# Best Practices
- Use access modifiers to control access: Use access modifiers to control access to properties and methods.
- Default to private: Default to private access modifier for properties and methods unless they need to be accessed from outside the class.
- Use protected for inheritance: Use protected access modifier for properties and methods that need to be accessed by subclasses.


# Getters and Setters Notes
# Getters
- Get the value of a property: Getters are used to retrieve the value of a property.
- *Defined using the get keyword*: Getters are defined using the get keyword followed by the property name.
- Return a value: Getters return a value, which is typically the value of the underlying property.

# Setters
- Set the value of a property: Setters are used to update the value of a property.
- *Defined using the set keyword*: Setters are defined using the set keyword followed by the property name.
- Take a value as a parameter: Setters take a value as a parameter, which is used to update the underlying property.


# Abstract Classes:

- An abstract class in TypeScript is a class that cannot be instantiated on its own and is designed to be inherited by other classes.
- Abstract classes are used to provide a partial implementation of a class, and they can contain both abstract and non-abstract methods.
- A class that extends an abstract class must implement all the abstract methods.

# Abstract Methods:

- An abstract method in TypeScript is a method declared without an implementation.
- Abstract methods are used to define a method signature that must be implemented by any class that extends the abstract class.
- Abstract methods are declared using the abstract keyword.



