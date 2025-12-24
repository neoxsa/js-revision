// Write a function that calculates and prints the sum of the digits of a given

// Input: A number, positive integer -> 12, 34, 123, 1234
// Return: sum of all digits
// Example: 
// 12 = 1 + 2 = 3
// 23 = 2 + 3 = 5
// 456 = 4 + 5 + 6 = 15

function numberSum(num) {
    if (typeof num === "string" || num <= 0) {
        throw new Error("Input number should be a Positive Number.")
    };
    const newNum = num.toString();
    let sumResult = "";

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
// console.log(numberSum("14"));
// console.log(numberSum(-98));

