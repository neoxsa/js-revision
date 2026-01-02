// Write a program that checks if two given strings are Anagrams of each other

// Input: Two Strings
// Outout:
// - true if two string are anagrams
// - false if two string are not anagrams

// Anagram is a word that's formed by rearranging the letters of another word
// Examples:
// - cat, act
// - elbow, below
// - night, thing
// - hearts, earth
// - pools, spool

// My Approach: Using for loop, includes method, length, conditional checks (if-else)

function areAnagrams(inputStr1, inputStr2) {

    inputStr1 = inputStr1.toLowerCase();
    inputStr2 = inputStr2.toLowerCase();

    let matchingChars = "";

    for (let i = 0; i < inputStr1.length; i++) {
        if (inputStr1.includes(inputStr2[i])) {
            matchingChars = matchingChars + inputStr2[i];
        };
    };

    if (matchingChars.length === inputStr1.length) {
        return true;
    } else {
        return false;
    };
};

console.log("neo, one : ", areAnagrams("neo", "one"));
console.log("one, two : ", areAnagrams("one", "two"));
console.log("track, rack : ", areAnagrams("track", "rack"));
console.log("speed, skit : ", areAnagrams("speed", "skit"));
console.log("elbow, below : ", areAnagrams("elbow", "below"));
console.log("night, thing : ", areAnagrams("night", "thing"));
console.log("Heart, Earth : ", areAnagrams("Heart", "Earth"));
console.log("Pools, Spool : ", areAnagrams("Pools", "Spool"));


// Method 1:  
// - check if length are equal or not.
// - Make a list of all characters and count.
// - pools -> p:1, o:2, l:1, s:1
// - spool -> s:1, p:1, o:2, l:1
// - Make a loop and compare for exact matches.

function areAnagrams2(inputStr1, inputStr2) {

    if (inputStr1.length !== inputStr2.length) {
        return false;
    }

    const charsInS1 = {};
    const charsInS2 = {};

    for (let char of inputStr1) {
        // if (!charsInS1[char]) {
        //     charsInS1[char] = 0
        // };
        // charsInS1[char] = charsInS1[char] + 1;


        // OR 
        // Short Cut code
        charsInS1[char] = (charsInS1[char] || 0) + 1;
    }

    for (let char of inputStr2) {
        if (!charsInS2[char]) {
            charsInS2[char] = 0
        };
        charsInS2[char] = charsInS2[char] + 1;


        // OR 

        // charsInS2[char] = (charsInS2[char] || 0) + 1;

    };

    for (let key in charsInS1) {
        // console.log(key);

        if (charsInS1[key] === charsInS2[key]) {
            return true;
        }
        return false;
    };

};

console.log(areAnagrams2("cat", "act"));
console.log(areAnagrams2("clock", "block"));