// Write a program that calculates the tip amounts based on the bill total and percentages entered by the user

// Input: Total amount, Tip percentages
// Output: Different Tip amounts

// Example:
// Input: 
// - Amount: 1000
// - Tip percentages: [5,10,15]

// Output: Different tip amounts
// {5: 50, 10: 100, 15: 150}
// [50, 100, 150]

// My Approach:

function tipCalculate(amount, tipPercentages, locale, currency) {

    if (typeof amount !== "number") {
        throw new Error("Amount should be in numbers")
    } else if (!Array.isArray(tipPercentages) || tipPercentages.some(n => typeof n !== "number")) {
        throw new Error("Accept only Numbers in an Array")
    }

    let tipAmount = [];
    let tipAmountPerPercentage = {};

    tipPercentages.forEach(percent => {


        // Adding Rupees Symbol Format
        const formatter = Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency
        });


        if (!tipAmountPerPercentage[percent]) {
            tipAmountPerPercentage[percent] = 0
        }
        tipAmountPerPercentage[percent] = formatter.format(((amount / 100) * percent));


        tipAmount.push(formatter.format((amount / 100) * percent));
    });

    return { tipAmountPerPercentage, tipAmount };
};

 
console.log("Amount: 1000, Tip: 5%, 10%, 15%", tipCalculate(1000, [5, 10, 15], "en-IN", "INR"));

console.log("Amount: 1000, Tip: 5%, 10%, 15%", tipCalculate(994, [5, 10, 15], "en-US", "USD"));

console.log("Amount: 1000, Tip: 5%, 10%, 15%", tipCalculate(20000, [2, 5, 10], "en-UK", "GBP"));

// console.log("Amount: 1000, Tip: 5%, 10%, 15%", tipCalculate("qwerty", [2, 5, 10], "en-IN","INR"));

// console.log("Amount: 1000, Tip: 5%, 10%, 15%", tipCalculate(20000, [2, "b", 10], "en-IN","INR"));