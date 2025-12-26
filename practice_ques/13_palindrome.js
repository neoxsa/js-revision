// Write a function that checks if a string is palindrome or not.

// Input: A string
// Return: boolean, true if palindrome and false if not

// Example: 
// madam
// level
// abba


// My Approach:

function isPalindrome(inputStr) {
    if (!inputStr || typeof inputStr !== "string") {
        throw new Error("Input must be in String.");
    }

    let reverseString = inputStr.split("").reverse().join("");

    if (reverseString !== inputStr) {
        return false;
    } else {
        return true;
    };
};

console.log("Is Madam Palindrome: ", isPalindrome("madam"));
console.log("Is abba Palindrome: ", isPalindrome("abba"));
console.log("Is level Palindrome: ", isPalindrome("level"));
// console.log(isPalindrome(123456));


// Method 2: By using - for loop

function isPalindromeM2(inputString) {
    // console.log(inputString);

    for (let i = 0; i <= inputString.length / 2; i++) {
        // console.log(inputString[i], inputString[inputString.length - 1 - i]);

        if (inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false;
        };

        return true;
    };
    // console.log(inputString);

};

console.log("Hello", isPalindromeM2("Hello"));
console.log("Madam", isPalindromeM2("Madam"));
console.log("level", isPalindromeM2("level"));
console.log("abba", isPalindromeM2("abba"));


// Method 3: 

function isPalindromeM3(inputString) {

    inputString = inputString.toLowerCase()

    let start = 0;
    let end = inputString.length - 1;

    for (start, end; start < end; start++, end--) {
        // console.log(start, end);

        if (inputString[start] !== inputString[end]) {
            return false;
        }
        return true;
    }
}

console.log("world ", isPalindromeM3("world"));
console.log("level ", isPalindromeM3("Level"));
