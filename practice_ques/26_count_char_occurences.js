// Write a program that counts the occurrences of each character in a given string.

// Input: A string
// Output: Count of each character in the string

// Example: 
// "NeoXsa Vyrxen"
// n: 2
// e: 2
// o: 1
// x: 2
// s: 1
// a: 1
// " ": 1
// v: 1
// y: 1
// r: 1


// Method 1 : Using for-loop

function characterCounter(inputStr) {

    inputStr = inputStr.toLowerCase();

    let characters = [];

    for (let i = 0; i < inputStr.length; i++) {

        if (!characters[inputStr[i]]) {
            characters[inputStr[i]] = 0;
        }

        characters[inputStr[i]] = characters[inputStr[i]] + 1;
    };
    return characters;
};

console.log(characterCounter("NeoXsa Vyrxen"));


// Method 2: Using Reduce


function characterCounter2(inputStr) {

    inputStr = inputStr.toLowerCase();

    let splittedString = inputStr.split("");

    const result = splittedString.reduce((acc, char) => {
        // console.log(char);

        if (!acc[char]) {
            acc[char] = 0;
        }

        acc[char] = acc[char] + 1;

        return acc;
    }, {});

    return result;
};

console.log(characterCounter2("Hello World!"));