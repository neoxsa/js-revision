// Write a program that checks if a number is Armstrong or not

// Input: A number
// Output: True if a number is Armstrong and False if number is not a Armstrong.

// Armstrong: Its a number that is equal to the sum of its own digits raised to the power if the number of digits.

// Example: 
// 153 = (1^3) + (5^3) + (3^3) = 1 + 125 + 27 = 153 = true
// 370 = (3^3) + (7^3) + (0^3) = 27 +  343 + 0 = 370 = false
// 243 = (2^3) + (4^3) + (3^3) = 8 + 64 + 27 = 99 = false

// Few more examples: 153, 370, 371, 407, 1634, 8208, 9474, 54748, 92727

// My Approach:

function isArmstrong(inputNum) {

    if (typeof inputNum !== "number" || Number.isNaN(inputNum)) {
        throw new Error("Input must be in Positive Number.")
    }

    inputNum = inputNum.toString();

    let result = 0

    for (let i = 0; i < inputNum.length; i++) {
        // console.log(inputNum[i]);
        result = result + Number(inputNum[i]) ** inputNum.length;
    };

    if (result === Number(inputNum)) {
        return true;
    } else {
        return false;
    }
};

console.log("Method 1: Armstrong Checker")
console.log("Is 153 Armstrong number: ", isArmstrong(153));
console.log("Is 370 Armstrong number: ", isArmstrong(370));
console.log("Is 371 Armstrong number: ", isArmstrong(371));
console.log("Is 243 Armstrong number: ", isArmstrong(243));
console.log("Is 407 Armstrong number: ", isArmstrong(407));
console.log("Is 1634 Armstrong number: ", isArmstrong(1634));
console.log("Is 8208 Armstrong number: ", isArmstrong(8208));
console.log("Is 9474 Armstrong number: ", isArmstrong(9474));
console.log("Is 54748 Armstrong number: ", isArmstrong(54748));
console.log("Is 92727 Armstrong number: ", isArmstrong(92727));
// console.log("Is 123456 Armstrong number: ", isArmstrong("123456"));


// Method 2: first making number to array by dropping last digit and assign to an Array. 

function isArmstrong2(inputNum) {

    if (typeof inputNum !== "number" || Number.isNaN(inputNum)) {
        throw new Error("Input must be in Positive Number.")
    }

    let number = inputNum;
    let arrNum = []
    let result = 0
    while (number > 0) {

        let lastDigit = number % 10;

        number = Math.floor(number / 10);

        arrNum.push(lastDigit);
    }

    // console.log(arrNum);

    arrNum.map(num => {
        // result = result + num**arrNum.length

        //OR

        result = result + Math.pow(num, arrNum.length);
    });


    return result === inputNum; // Shortcut check for True or False

    //OR

    // if (result === inputNum) {
    //     return true;
    // }

    // return false;
};

console.log("153 = ", isArmstrong2(153));
console.log("370 = ", isArmstrong2(370));
console.log("36947 = ", isArmstrong2(36947));
