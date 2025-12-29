// Write a function that calculates and return the average of a set of numbers.

// Input: Array of positive integer numbers
// Return: Average of numbers

// Example:
// [1, 2, 4]: (1+2+4)/3 = 2.333..
// [1, 2, 7, 14]: (1+2+7+14)/4 = 6
// [1, 5, 7, 35]: (1+5+7+35)/4 = 12

// My Approach: 

function calculateAverage(inputArr) {
    
    if (Array.isArray(inputArr)) {
        throw new Error("Input should be an Array");
    } else if (inputArr.length === 0) {
        throw new Error("Array cannot be empty.")
    } else if (inputArr.some(i => typeof i !== "number")) {
        throw new Error("All elements are in number in an Array");
    };

    let sum = 0
    const totalNum = inputArr.length;

    for (let i = 0; i < inputArr.length; i++) {
        sum = sum + inputArr[i]
    };

    const average = sum / totalNum;

    return average;
}

console.log("Average of [1, 2, 4] is: ", calculateAverage([1, 2, 4]));
console.log("Average of [1, 2, 7, 14] is: ", calculateAverage([1, 2, 7, 14]));
console.log("Average of [1, 5, 7, 35] is: ", calculateAverage([1, 5, 7, 35]));
// console.log("Average of [1, '5'] is: ", calculateAverage([1, "5"]));