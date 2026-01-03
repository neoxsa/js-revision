// Write a program that checks if a given number is a perfect number.

// Perfect number : The sum of its proper divisors equals the number itself.

// Input: A positive integer

// Output: 
// - True if input number is a perfect number
// - False if input number is not a perfect number


// Perfect Numbers Examples:

// Perfect numbers are : 6, 28, 496, 8128

// - 6: 1,2,3 = 1+2+3 = 6 => True
// - 28: 1,2,4,7,14 = 28 => True
// - 30: 1,2,3,5,6,10,15 => False


// My Approach :

function isPerfectNum(inputNum) {

    if (typeof inputNum !== "number" || !Number.isInteger(inputNum)) {
        throw new Error(" Input must be in Positive Integer.")
    }

    let divisors = 0;

    for (let i = 1; i < inputNum; i++) {

        if (inputNum % i === 0) {
            divisors = divisors + i;
        };
    };

    if (divisors !== inputNum) {
        return false;
    };

    return true;

};

console.log("Is 6 Perfect Number: ", isPerfectNum(6));
console.log("Is 7 Perfect Number: ", isPerfectNum(7));
console.log("Is 28 Perfect Number: ", isPerfectNum(28));
console.log("Is 10 Perfect Number: ", isPerfectNum(10));
console.log("Is 496 Perfect Number: ", isPerfectNum(496));
console.log("Is 8128 Perfect Number: ", isPerfectNum(8128));
// console.log("Is 8128 Perfect Number: ", isPerfectNum("8128"));


// Method 1: using reducemethod or forEach loop

function isPerfectNum1(inputNum) {

    const perfectDivisors = [];
    for (let i = 1; i < inputNum; i++) {
        if (inputNum % i === 0) {
            perfectDivisors.push(i)
        };
    };

    let sum = 0;
    perfectDivisors.forEach(digit => sum = (sum + digit))
    //OR  with reduce method
    // let sum1 = perfectDivisors.reduce((acc, digit) => {
    //     acc += digit;

    //     return acc;
    // }, 0);
    // console.log(sum1);

    return sum === inputNum

};


console.log("Method 1: using reduce or forEach")
console.log("Is 6 Perfect Number: ", isPerfectNum1(6));