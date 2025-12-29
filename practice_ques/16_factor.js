// Write a function that finds all the factors of a given number.

//Input: number, positive integer
// Return: Factor of a number

// Factor: Is a number that divides the given number evenly or exactly, leaving no reminder

// Example:
// 4: 1,2,4
// 14: 1,2,7,14
// 35: 1,5,7,35


// My Approach : for loop, Spread Operator, concat method 
function calculateFactors(inputNum) {

    if (!inputNum) {
        throw new Error("Input cannot be empty.")
    } else if (isNaN(inputNum)) {
        throw new Error("Input value must be a positive number.")
    } else if (!Number.isInteger(inputNum)) {
        throw new Error("Positive number should not be in decimal.")
    }

    let factorNumbers = [];

    for (let i = 1; i <= inputNum; i++) {

        if (inputNum % i === 0) {
            factorNumbers = [...factorNumbers].concat(i);
            // Or
            // factorNumbers.push(i); 
        };
    };
    return factorNumbers;
}

console.log("Factors of 4 are: ", calculateFactors(4));
console.log("Factors of 11 are: ", calculateFactors(11));
console.log("Factors of 14 are: ", calculateFactors(14));
console.log("Factors of 35 are: ", calculateFactors(35));

// console.log("Factors of "abc" are: ", calculateFactors("abc"))