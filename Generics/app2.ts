// Generic Class Example

// defined a generic class BottleMaker1 with a constructor that takes a single argument key of type T.


class BottleMaker12<T> {
    constructor(public key: T) {}
}

let b3 = new BottleMaker12<string>("Hey");
let b4 = new BottleMaker12<number>(12); // Corrected the class name

console.log(b1);
console.log(b2);


// What's happening here?

// 1. class BottleMaker12<T>: This defines a generic class BottleMaker1 with a type parameter T.
// 2. constructor(public key: T) {}: The constructor takes a single argument key of type T and makes it a public property of the class.
// 3. let b3 = new BottleMaker1<string>("Hey"): You're creating an instance of BottleMaker1 with T set to string. The key property of b1 will be a string.
// 4. let b4 = new BottleMaker1<number>(12): You're creating another instance of BottleMaker1 with T set to number. The key property of b2 will be a number.

// Output:

// When you log b3 and b4 to the console, you'll see the following output:


// BottleMaker12 { key: 'Hey' }
// BottleMaker12 { key: 12 }


