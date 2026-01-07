// Write a program to find all palindromic substrings within a given string.

// Input: A String
// Output: Array of all palindromic substrings

// Palindrome example: radar,madam

// Input: radar => ["radar"]
// Input: bradarasdmadama => ["radar", "madam"]

// Input: neoxsa => []


// My Approach

function isPalindrome(inputStr) {

    for (let i = 0; i < inputStr.length / 2; i++) {

        // console.log(inputStr[i], inputStr[inputStr.length -1 -i])

        if (inputStr[i] !== inputStr[inputStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


function palindromicSubstrings(inputStr) {

    //console.log(inputStr.slice(1, 5)) // 1 index to string.length + 1 => "adar" of input "radar"

    let result = [];

    for (let i = 0; i < inputStr.length; i++) {
        for (let j = i + 1; j <= inputStr.length; j++) {
            // console.log(i,j);

            const substr = inputStr.slice(i, j);

            if (isPalindrome(substr) && substr.length > 1) {
                result.push(substr);
            }

        }

    }

    const removeDuplicate = [...new Set(result.filter((item, index) => result.indexOf(item) === index))];

    return removeDuplicate;
};

console.log("palindromic of 'radar' :", palindromicSubstrings("radar"));

console.log("palindromic of 'madam' :", palindromicSubstrings("madam"));

console.log("palindromic of 'bradarasdmadama' :", palindromicSubstrings("bradarasdmadama"));