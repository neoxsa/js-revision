// Write a program that prints numbers from 1 to N, replacing
// - multiple of 3 with "Fizz"
// - multiple of 5 with "Buzz"
// - Multiples of both 3 & 5 with "FizzBuzz"

// Input: A Positive Number

// Example: 
// 36 : 1,2,Fizz,4,Buzz,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,........,Fizz(36)


// My Approach: two for-loops, push method or spread operator, modulus operator, condition checks

function fizzBuzz(inputNum) {

    if (typeof inputNum !== "number" || Number.isNaN(inputNum)) {
        throw new Error("Input must be in Positive Number.")
    } else if (inputNum < 1) {
        throw new Error("Negative number not allowed!")
    };

    let result = [];

    for (let i = 1; i <= inputNum; i++) {
        // result.push(i);
        // Or
        result = [...result, i];
    };

    for (let i = 0; i < result.length; i++) {
        if (result[i] % 3 === 0 && result[i] % 5 === 0) {
            result[i] = "FizzBuzz";
        } else if (result[i] % 3 === 0) {
            result[i] = "Fizz";
        } else if (result[i] % 5 === 0) {
            result[i] = "Buzz";
        }
    };

    return result;
};

console.log("Method 1: My Approach");
console.log(fizzBuzz(36));
// console.log(fizzBuzz("36"));



// Method 2:

function fizzBuzz2(inputNum) {

    if (typeof inputNum !== "number" || Number.isNaN(inputNum)) {
        throw new Error("Input must be in Positive Number.")
    } else if (inputNum < 1) {
        throw new Error("Negative number not allowed!")
    };

    for (let i = 1; i <= inputNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        };
    };
};

console.log("Method 1");
fizzBuzz2(15);
// fizzBuzz2("36");