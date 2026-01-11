// Write a program that finds all occurrences of a given word in a big string.

// Input: Big string, word to find

// Output: Array of all starting indexes where the word exists in the Big string


// Examples:
// Big String: "This is a big string with the world big repeated in the big string."
// Word to find : big
// Output: [10, 35, 55]

// Method 1:

const big = "This is a big string with the world big repeated in the big string."
const word = "big"

function wordIndexFinder(inputBig, inputWord) {
    // console.log(inputBig, inputWord);

    let index = inputBig.indexOf(inputWord)

    const wordAtIndex = []

    while (index !== -1) {
        wordAtIndex.push(index);

        index = inputBig.indexOf(inputWord, index + 1)

    }

    return wordAtIndex;

}

console.log(wordIndexFinder(big, word));
console.log(wordIndexFinder(big, "small"));
console.log(wordIndexFinder("big and small", "small"));
