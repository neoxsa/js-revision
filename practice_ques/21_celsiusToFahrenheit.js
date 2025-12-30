// Write a function that converts a temperature in Celsius to Fahrenheit.

// Input: Temperature in Celsius
// Return: Temp in Fahrenheit

// Formula: (temp in degrees Celsius(C)*9/5) + 32

// Example: 
//  27 degrees = (27 * 9/5) + 32 = 80.6 Fahrenheit
// 34 degrees = (34 * 9/5) + 32 = 93.2 Fahrenheit

//My Approach: 

function tempConversion(inputNum) {

    if (typeof inputNum !== "number") {
        throw new Error("Input must be in Number.")
    }

    let toFahrenheit = (inputNum * 9 / 5) + 32
    let result = Math.round(toFahrenheit); // roundoff number

    return result;
};


console.log("Temp 36 degree Celsius: ", tempConversion(36), "in Fahrenheit");
console.log("Temp 27 degree Celsius: ", tempConversion(27), "in Fahrenheit");
console.log("Temp 34 degree Celsius: ", tempConversion(34), "in Fahrenheit");
// console.log("Temp 25 degree Celsius: ", tempConversion("25"), "in Fahrenheit");