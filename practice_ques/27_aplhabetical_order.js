// Write a program that checks if a given string is in aplhabeticapl order

// Input: A string
// Output: 
// - true if all characters are in alphabetical order
// - false if characters are NOT in alphabetical order

// Example:
// acegil = true
// abcdbe = false


// Method 1: by comparing the charcode of alpabets

function isInAlphabeticalOrder(inputStr) {
    
    inputStr = inputStr.toLowerCase().replace(/ /g, "");

    for (let i = 0; i < inputStr.length - 1; i++) {
        // console.log(inputStr[i], inputStr[i + 1]);

        if (inputStr[i] > inputStr[i + 1]) {
            return false;
        }
        return true;
    };
}


console.log("acfgk :", isInAlphabeticalOrder("acfgk"));
console.log("hello :", isInAlphabeticalOrder("hello"));
console.log("A bc D :", isInAlphabeticalOrder("A bc D"));
console.log("ne o x sa :", isInAlphabeticalOrder("ne o x sa"));