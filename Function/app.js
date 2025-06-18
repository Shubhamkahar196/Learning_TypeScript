function abcd(name, age, cb) {
    cb("hey");
}
abcd("harsh", 25, function (arg) {
    console.log("abcd");
});
// 1. We define a function abcd that takes three parameters:
//     - name: a string
//     - age: a number
//     - cb: a callback function that takes a string argument (arg) and returns void (i.e., doesn't return any value)
// 2. Inside the abcd function, we call the cb function with the argument "hey".
// 3. We then call the abcd function with three arguments:
//     - "harsh" as the name
//     - 25 as the age
//     - A callback function that takes a string argument arg and logs "abcd" to the console
