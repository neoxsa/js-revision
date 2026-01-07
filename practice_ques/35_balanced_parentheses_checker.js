// Write a program that checks if a given string of parentheses is balanced and well-formed.

// Input: A String
// Output: 
//  - True if parentheses is balanced
// - False if parentheses is not balanced

// What are parentheses
// - [] => Square bracket
// - {} => Curly bracket
// - () => Circular bracket

// What is a balanced parentheses
// - Every opening parenthesis has a corresponding closing 
// - Parenthesis must be closed in the correct order

// Examples:
// [{()}] => Balanced
// {() => Unbalanced
// [{(})] => Unbalanced


// Method 1: 
// Logic:
// - We will make an object with all combination of starting and closing brackets {}, (), []
// - Loop through all the characters
// - If character is an opening bracket, add it to an array
// - If character is a closing bracket, extract last element from array and check if it is the correct closing bracket

const parentheses = {
    '{': '}',
    '(': ')',
    '[': ']'
}

// console.log(parentheses['{']) // Output: }
// console.log(parentheses['(']) // Output: )
// console.log(parentheses['[']) // Output: ]


function isParenthesesBalanced(inputStr) {

    const parenthesesArray = [];

    for (let i = 0; i < inputStr.length; i++) {

        const char = inputStr[i]

        if (parentheses[char]) {
            parenthesesArray.push(char);
        }
        else if (char === "]" || char === "}" || char === ")") { // If any closing present then do this

            const lastOpeningParenthesis = parenthesesArray.pop() // gives last open bracket 

            if (parentheses[lastOpeningParenthesis] !== char) {
                return false;
            }
        }
    }
    
    // console.log(parenthesesArray) // [ '[', '{', '(' ]
    // console.log(parenthesesArray.pop()) // (
    // console.log(parenthesesArray) // [ '[', '{' ]


    console.log(parenthesesArray)
    if (parenthesesArray.length === 0) {

        return true;
    }

    return false;

};


console.log("Is parentheses balanced '[{()}]' : ", isParenthesesBalanced("[{()}]"))

console.log("Is parentheses balanced '([)]' : ", isParenthesesBalanced("([)]"))

console.log("Is parentheses balanced '([' : ", isParenthesesBalanced("{[]"))
