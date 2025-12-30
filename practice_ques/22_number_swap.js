// Write a program that swap two numbers

// Input: Two number a & b
// Output: Interchange the values of a & b

// Example: 
// Input: a = 5, b = 6
// Output: a = 6, b = 5


// Method 1: Here taking third variable to store b value

let a = 5
let b = 6

console.log(`before swap a:${a} & b:${b}`);

// a = b
// b = a // here b assign 6 value instead of 5 because asynchronous behaviour


let c = b

b = a
a = c

console.log(`M1: After swap a:${a} & b:${b}`);


// Method 2: without third variable

a = a + b // 5 + 6 = 11
b = a - b // 11 - 6 = 5
a = a - b // 11 - 5 = 6

console.log(`M2: After swap a:${a} & b:${b}`);