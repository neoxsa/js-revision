// Write a function that calculates and prints the sum of the digits of a given

// Input: A number, positive integer -> 12, 34, 123, 1234
// Return: sum of all digits
// Example: 
// 12 = 1 + 2 = 3
// 23 = 2 + 3 = 5
// 456 = 4 + 5 + 6 = 15


// Method 1: My Approach using for loop
function numberSum(num) {
    if (typeof num === "string" || num < 0) {
        throw new Error("Input number should be a Positive Number.")
    } else if (!Number.isInteger(num)) {
        throw new Error("Input number should be in Decimal.")
    };

    const newNum = num.toString();
    let sumResult = 0;

    for (let i = 0; i < newNum.length; i++) {
        // console.log(newNum[i]);
        sumResult = Number(sumResult) + Number(newNum[i]);
    };

    return sumResult;
};

console.log("Sum of input Digit 12 is:", numberSum(12));
console.log("Sum of input Digit 34 is:", numberSum(34));
console.log("Sum of input Digit 123 is:", numberSum(123));
console.log("Sum of input Digit 1234 is:", numberSum(1234));
// console.log("Sum of input Digit 123 is:", numberSum(12.3)); 
// console.log(numberSum("14"));
// console.log(numberSum(-98));



// Method 2: Using split and forEach loop

function calculateSumOfDigits(inputNum) {
    if (typeof inputNum !== "number") {
        throw new Error("Input should be in numbers.")
    } else if (!Number.isInteger(inputNum)) {
        throw new Error("Input should not in decimal.")
    }

    const inputNumAsString = inputNum.toString()
    const splitNumString = inputNumAsString.split("");
    console.log(splitNumString)

    let Sum = 0;

    splitNumString.forEach(n => {
        Sum = Sum + parseInt(n);
    })

    return Sum;
}

console.log("M2: Sum of Digits of 12 is :", calculateSumOfDigits(12));


// Method 3: Without Converting input to string

function calculateSumOfDigits2(inputNum) {

    let number = inputNum;
    let sum = 0;
    
    while (number > 0) {
        // console.log(inputNum % 10); // Remainder
        // console.log(Math.floor(inputNum / 10));
    }
        let lastNum = number % 10
        number = Math.floor(number / 10);
        // console.log("new: ", number, "last: ", lastNum)

        sum = sum + lastNum;
    }

    return sum;


console.log("M3: Sum of Digits of 12 is :",calculateSumOfDigits2(12));
console.log("M3: Sum of Digits of 43 is :",calculateSumOfDigits2(43));
console.log("M3: Sum of Digits of 432 is :",calculateSumOfDigits2(432));