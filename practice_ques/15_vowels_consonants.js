// Write a function that counts and prints the numbers of vowels and consonants in a given string

// Input: String
// Return: Vowel and Consonant count
// Vowel: a e i o u
//Consonant: All other character than vowel
// Example:
// "Hello World" => 3 Vowels & 7 Consonants

// My Approach: for loop, includes, replaceAll
function counter(inputStr) {

    inputStr = inputStr.toLowerCase().replaceAll(" ", "")
    console.log("input cleanup is ", inputStr)
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";

    let calculatedVowels = "";
    let calculatedConsonants = "";

    for (let i = 0; i < inputStr.length; i++) {
        // console.log(inputStr[i]);
        if (vowels.includes(inputStr[i])) {
            // console.log("Vowels: ", inputStr[i]);
            calculatedVowels = calculatedVowels + inputStr[i]

        } else if (consonants.includes(inputStr[i])) {
            // console.log("Consonants: ", inputStr[i]);
            calculatedConsonants = calculatedConsonants + inputStr[i]
        } else {
            console.log(`${inputStr[i]} is neither vowel or consonant`)
        }
    }
    // console.log("Vowels : ", calculatedVowels, "Consonants : ", calculatedConsonants);

    console.log(`${inputStr} : ${calculatedVowels.length} vowels & ${calculatedConsonants.length} consonants`);
}
counter("Hello World Again");
counter("Neoxsa");

