// Write a function that calculates and prints the simple interest on a loan amount.

// Input:
// Principal Amount
// Interest Rate (Yearly)
// Time Duration (How many years)

// Return: Interest Amount
// Simple Interest  = (Principal*Interest Rate*Time Duration)/100

// Examples: 
// 1000, 5%, 1 year = (1000*5*1)/100 = 50
// 20000, 10%, 5 = (20000*10*5)/100 = 10000

// My Approach: 
function calculateSI(principalAmount, interestRateYearly, durationInYearly) {
    if (isNaN(principalAmount) || isNaN(interestRateYearly) || isNaN(durationInYearly)) {
        throw new Error("All input value should be in Positive Number.")
    } else if (!Number.isInteger(durationInYearly)) {
        throw new Error("Time Duration should not be in decimal.")
    }

    let simpleInterest = (principalAmount * interestRateYearly * durationInYearly) / 100;


    return simpleInterest.toFixed(2);

}

console.log("Simple Interest of (PA = 1000, IR = 5%, TD = 1year) is: ",calculateSI(1000, 5, 1));
console.log("Simple Interest of (PA = 20000, IR = 10%, TD = 5year) is: ",calculateSI(20000, 10, 5));
console.log("Simple Interest of (PA = 100000.99, IR = 8.755%, TD = 5year) is: ",calculateSI(100000.99, 8.755, 5));
