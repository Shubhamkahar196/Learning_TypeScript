

// - We define a BottleMaker class with a constructor that takes two parameters: name and price.
class BottleMaker{
    
// - The public access modifier makes the properties name and price publicly accessible.
    constructor(public name: string, public price: number){}
}


// - We create two instances of the BottleMaker class, b1 and b2, using the new keyword.
let b1 = new BottleMaker("milton", 1200);
let b2 = new BottleMaker("thermos", 1000);

// - We can access the properties of each instance using dot notation.
console.log(b1.name);
console.log(b2.price)