// You've defined a generic function abcd that takes a single argument a of type T
function abcd<T>(a: T){}

abcd<string>("sk");
abcd<number>(12)

// What's happening here?

// 1. function abcd<T>(a: T): This defines a generic function abcd that takes a type parameter T. The function has one argument a of type T.
// 2. abcd<string>("sk"): You're calling the abcd function with a string argument "sk". By specifying <string>, you're telling TypeScript that T should be string for this function call.
// 3. abcd<number>(12): Similarly, you're calling the abcd function with a number argument 12. By specifying <number>, you're telling TypeScript that T should be number for this function call.
