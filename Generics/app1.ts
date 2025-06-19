//  defined a generic interface Halua with three properties: name, age, and key. The key property is of type T, which is a type parameter.


interface Halua<T> {
    name: string;
    age: number;
    key: T;
}

function abcd(obj: Halua<string>) {
    obj.key.length
}

abcd({ name: "sk", age: 25, key: "ahjsj" });


// What's happening here?

// 1. interface Halua<T>: This defines a generic interface Halua with a type parameter T. The interface has three properties: name (string), age (number), and key (of type T).
// 2. function abcd(obj: Halua<string>): This defines a function abcd that takes an object obj of type Halua<string>. By specifying <string>, you're telling TypeScript that the key property of the obj should be a string.
// 3. obj.key.length: Inside the function, you're accessing the length property of obj.key, which is valid because obj.key is a string.
// 4. abcd({ name: "sk", age: 25, key: "ahjsj" }): You're calling the abcd function with an object that conforms to the Halua<string> type. The key property is a string, so it has a length property.

