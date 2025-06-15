

// Interfaces

// Interfaces are used to define the shape of an object, including the properties, methods, and their types. They are useful for defining contracts that must be implemented by classes or objects.

// Defining Interfaces


interface Person {
  name: string;
  age: number;
  occupation?: string; // optional property
}

// In this example, the Person interface has three properties: name, age, and occupation. The occupation property is optional, denoted by the ? symbol.

// Using Interfaces to Define Object Shapes

// You can use interfaces to define the shape of an object:

const person1: Person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

// In this example, the person object conforms to the Person interface.

// Extending Interfaces

// You can extend interfaces using the extends keyword:

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee1: Employee = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  employeeId: 123,
  department: 'IT'
};

// In this example, the Employee interface extends the Person interface and adds two new properties: employeeId and department.

// Type Aliases

// Type aliases are used to give a new name to an existing type. They are useful for simplifying complex types and making them more readable.

// Defining Type Aliases


type StringOrNumber = string | number;

const id: StringOrNumber = '123';
const quantity: StringOrNumber = 10;

// In this example, the StringOrNumber type alias represents a type that can be either a string or a number.

// Intersection Types

// Intersection types are used to combine multiple types into a single type. They are useful for creating complex types that have multiple properties and methods.

// Defining Intersection Types


interface Person2 {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeDetails = Person2 & Employee;

const employee: EmployeeDetails = {
  name: 'John Doe',
  age: 30,
  employeeId: 123,
  department: 'IT'
};

// In this example, the EmployeeDetails type is an intersection of the Person and Employee interfaces. It has all the properties of both interfaces.
