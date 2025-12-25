// Write a function that finds and prints the maximum element in an array of numbers. (Without Array Sort)

// Input: Array of numbers
// Return: Biggest number


// Method 1:
function maxNum(inputArray) {

    if (!inputArray || inputArray.length === 0) {
        throw new Error("We need some number in an array")
    } 
    else if(inputArray.some(i => typeof i !== "number" || Number.isNaN(i))){   // Here map won't work because map return an Array which is truthy value. That means this condition run always
        // some() -> validate
        throw new Error("All elements should be in numbers in an array.")
    }



    let bigNum = inputArray[0]

    for (let i = 1; i < inputArray.length; i++) {
        // console.log(inputArray[i]);
        // console.log(bigNum);

        if (bigNum < inputArray[i]) {
            bigNum = inputArray[i]
        };
    };
    return bigNum;
};

console.log(maxNum([1, 5, 10, 8]));
// console.log(maxNum([1, 5, 10, "8", 78]));

// Method 2: Using Math.max() & Spread Operator

function BigValue(NumArray) {

    const maxValue = Math.max(...NumArray)
    // console.log(maxValue);

    return maxValue;
}

console.log(BigValue([45, 78, 98, 56, 10, 4, 56]))