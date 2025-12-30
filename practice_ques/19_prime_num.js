// Write a function that tells if the given number is prime or not.

// Input: A Number
// Return: true if prime and false if not prime

// Prime number: A number that can only be divided by itself and 1 without remainders


//My Approach: for loop, push method, length, comparison
function isPrime(inputNum) {
    //checks
    if (typeof inputNum !== "number" || Number.isNaN(inputNum)) {
        throw new Error("Input must be a number.");
    } else if (!Number.isInteger(inputNum)) {
        throw new Error("Input should not be in decimal.")
    }

    //logic
    let numbers = [];

    for (let i = 2; i <= inputNum; i++) {
        if (inputNum % i === 0) {
            numbers.push(i)
        }
    };

    if (numbers.length === 1) {
        return true;
    } else {
        return false;
    };
};

console.log("IS PRIME NUMBER MA1:")
console.log("Is 4 prime number: ", isPrime(4));
console.log("Is 5 prime number: ", isPrime(5));
console.log("Is 14 prime number: ", isPrime(14));
console.log("Is 7 prime number: ", isPrime(7));
console.log("Is 12 prime number: ", isPrime(12));
console.log("Is 11 prime number: ", isPrime(11));
console.log("Is 97 prime number: ", isPrime(97));

// console.log("Is 'abc prime number: ", isPrime("abc"));

//Method 2: Using for loop, break method

function isPrime2(inputNum) {

    let result = true;

    for (let i = 2; i < inputNum; i++) {
        if (inputNum % i === 0) {

            result = false;

            // console.log(i);
            break; // Here to stop the code after detect the remainder is 0 (Optimization). 
        }
    }
    return result;
};

console.log("IS PRIME NUMBER M2:")
console.log("Is 4 prime number: ", isPrime2(4));
console.log("Is 5 prime number: ", isPrime2(5));
console.log("Is 14 prime number: ", isPrime2(14));
console.log("Is 7 prime number: ", isPrime2(7));
console.log("Is 12 prime number: ", isPrime2(12));
console.log("Is 11 prime number: ", isPrime2(11));
console.log("Is 97 prime number: ", isPrime2(97));

// Method 3: More Optimize Way: Here check with only odd numbers.

function isPrime3(inputNum) {

    let result = true;

    if (inputNum === 2) {
        result = true;
    } else if (inputNum % 2 === 0) {
        result = false;
    }

    if (result) {
        for (let i = 3; i < inputNum; i = i + 2) {
            if (inputNum % i === 0) {
                result = false;
                break;
            };
        };
    };
    return result;
};

console.log("IS PRIME NUMBER M3:")
console.log("Is 2 prime number: ", isPrime3(2));
console.log("Is 4 prime number: ", isPrime3(4));
console.log("Is 5 prime number: ", isPrime3(5));
console.log("Is 14 prime number: ", isPrime3(14));
console.log("Is 7 prime number: ", isPrime3(7));
console.log("Is 12 prime number: ", isPrime3(12));
console.log("Is 11 prime number: ", isPrime3(11));
console.log("Is 97 prime number: ", isPrime3(97));
