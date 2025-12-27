//  Write a function that returns the result of raising a given number to a specified power.

// Input: Two numbers = Base & Exponent

// Return: Base to the power of exponent
//ex: 
// 2,3 : 2*2*2 = 8
// 5,4 : 5*5*5*5 = 625

// Without using Math.pow() method


// My approach

function calculatePower(base, expo) {

    if (typeof base !== "number" || typeof expo !== "number") {
        throw new Error("Invalid value, Value should be in Positive Number");
    }
    else if (base === undefined || expo === undefined) {
        throw new Error("Base and Exponent value both are required, Cannot be empty!")
    }
    else if (base < 0 || expo < 0) {
        throw new Error("Input should be in Positive Number")
    } else if (!Number.isInteger(base) || !Number.isInteger(expo)) {
        throw new Error("Input numbers should not be in decimal value.")
    }


    let result = 1;
    for (let i = 1; i <= expo; i++) {
        result = result * base
    }
    return result;
}

console.log(calculatePower(5, 2));
console.log(calculatePower(5, 0));
console.log(calculatePower(0, 2)); 
// console.log(calculatePower(4)); 
