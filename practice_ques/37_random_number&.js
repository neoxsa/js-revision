// Write a program that generates  random number.

// Input: Max Number
// Output: 
// - Random number between 1 and Max Number

// Method 1:
function randomNumber(inputNum) {
    const random = Math.floor(Math.random() * inputNum + 1);

    return random;
}

console.log(randomNumber(987));

// Method 2: give random numbers between minimum and maximum number

function randomNumber1(minimum, maximum) {
    let min = minimum // Included
    let max = maximum // Not Include

    let j = 0
    while (j < 20) {
        console.log(Math.floor(Math.random() * (max - min) + min));
        j++
    }
}

console.log(randomNumber1(1, 1000));