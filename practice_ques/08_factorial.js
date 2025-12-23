// Write a function that calculate factorial of a given number.

// Input : A number, positive integer
// return: Factorial of that number


// METHOD 1: Using for loop
function calculateFactorial(num) {

    if (typeof num !== "number") {
        throw new Error("Input must be in positive number.");
    } else if (num < 0) {
        throw new Error("Invalid Input::Number must be in positive.");
    }

    let result = 1;
    for (let i = num; i >= 1; i--) {
        // console.log(i);

        result = result * i
        // result *= i
    };
    return result;
};

console.log("Factorial of 4! is : ", calculateFactorial(4));
console.log("Factorial of 0! is : ", calculateFactorial(0));
console.log("Factorial of 1! is : ", calculateFactorial(1));


// console.log("Factorial of -1! is : ", calculateFactorial(-1));
// console.log("Factorial of string of 1 is : ", calculateFactorial("1"));


// METHOD 2: Recursion

function calculateFactorialOfRecursion(num) {

    console.log("Input Number is :", num);

    if (typeof num !== "number") {
        throw new Error("Input must be in positive number.");
    } else if (num < 0) {
        throw new Error("Invalid Input::Number must be in positive.");
    }

    if (num === 0 || num === 1) {
        return 1;
    }


    return num * calculateFactorialOfRecursion(num - 1);
    //return 4 * calculateFactorialOfRecursion(3); 4 * 6    
    //return 3 * calculateFactorialOfRecursion(2); 3 * 2    
    //return 2 * calculateFactorialOfRecursion(1); 2 * 1     

};

console.log("Recursion Method:")
console.log(calculateFactorialOfRecursion(4));
