// types assertion
// type castig
// non-null assertion 

// Type Assertion

// Type assertion is a way to tell TypeScript that you know more about the type of a value than it does. It's like casting in other languages, but it doesn't perform any runtime checks.

let someValue1: unknown = "this is a string";
let strLength: number = (someValue1 as string).length;
console.log(strLength);


// In this example, someValue is of type unknown, but we're asserting that it's a string using the as keyword.

// Type Casting

// Type casting is similar to type assertion, but it's more commonly used in the context of converting a value from one type to another.


let someValue: any = "123";
let numValue: number = parseInt(someValue);


// In this example, someValue is of type any, and we're using the parseInt function to convert it to a number.

// Non-Null Assertion Operator

// The non-null assertion operator (!) is used to tell TypeScript that a value is not null or undefined.


let name1: string | null = "John";
console.log(name1!.toUpperCase()); // No error


// In this example, name is a string that can be null, but we're using the non-null assertion operator to tell TypeScript that it's not null.


