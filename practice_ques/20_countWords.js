// Write a function that counts and returns the number of words in a sentence.

// Input: A Sentence
// Return: Number of Words

// Example: 
// "This is a sentence": 4
// "What is the date today": 5


//My Approach & M 1: Using for-loop, split method, length

function wordsCounter(inputSentence) {
    inputSentence = inputSentence.trim(); // removing starting and ending unwanted spaces
    // console.log(inputSentence);

    const eachWords = inputSentence.split(" ");
    const filterExtraSpace = eachWords.filter((word) => word !== '') // Remove spaces inside the sentence.

    return filterExtraSpace.length;
};

console.log(wordsCounter("Hello world again"));
console.log(wordsCounter("This is a sentence"));
console.log(wordsCounter("What is the date today?"));
console.log(wordsCounter("What is   the date     today?"));
console.log(wordsCounter("     What is the date today?    "));

