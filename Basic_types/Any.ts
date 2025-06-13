//Any, Unknown, Void, NULL, Undefined, Never


// 1. Any:
//     - The any type represents any JavaScript value.
//     - It’s a way to opt-out of type checking for a variable.
//     - Use it when you’re not sure what type of value a variable will hold, but be cautious as it can lead to runtime errors.


let data1: any = "Hello";
data1 = 42;
data1 = true;


// 2. Unknown:
//     - The unknown type is similar to any, but safer.
//     - A variable of type unknown can hold any value, but you need to perform type checking or assertions before using it.
//     - It’s useful when you want to ensure type safety without knowing the exact type.


let data2: unknown = "Hello";
if (typeof data2 === "string") {
  console.log(data2.toUpperCase());
}


// 3. Void:
//     - The void type represents the absence of any value at all.
//     - It’s typically used as the return type for functions that don’t return a value.


function logMessage(message: string): void {
  console.log(message);
}


// 4. Null:
//     - The null type represents the intentional absence of any object value.
//     - In TypeScript, null is often used in union types (e.g., string | null) to indicate that a variable might have no value.


let userInput1: string | null = null;
userInput1 = "Hello";


// 5. Undefined:
//     - The undefined type represents a variable that has been declared but not assigned a value.
//     - Like null, it’s often used in union types to indicate the absence of a value.


let userInput: string | undefined;
console.log(userInput); // undefined


// 6. Never:
//     - The never type represents values that never occur.
//     - It’s used for functions that always throw an error or never return (e.g., infinite loops).


function error(message: string): never {
  throw new Error(message);
}

