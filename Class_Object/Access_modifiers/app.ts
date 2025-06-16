
class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }

  private checkAge() {
    console.log(`You are ${this.age} years old`);
  }

  public test() {
    this.checkAge(); // Okay, can access private method within the class
  }
}

class Employee extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }

  public testAddress() {
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


