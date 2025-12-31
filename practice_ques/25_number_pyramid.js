// Write a program that prints a number pyramid
// Input: A positive number
// Output: Number Pyramid

// Example: 5 lines:
//            1
//           121
//          12321
//         1234321
//        123454321

// Solution Approach:
// for example for 5 input
// Use loop - 1 to 5
//     * In first line we need
//        -  4 spaces + 1
//        -  3 spaces + 12 + 1
//        -  2 spaces + 123 + 21
//        -  1 space + 1234 + 321
//        -  0 space + 12345 + 4321


// Method 1: using many for loop for each steps logic.

function numPyramid(inputNum) {

    // Line Loop
    for (let i = 1; i <= inputNum; i++) {
        let lineContent = "";

        // console.log(inputNum - i); // 4 to 0

        // Spaces Loop
        for (let space = 1; space <= inputNum - i; space++) {
            lineContent = lineContent + " ";
        };
        // console.log(lineContent, i) // Space check

        // Middle Numbers Loop
        for (let count = 1; count <= i; count++) {
            lineContent = lineContent + count;
        };
        // console.log(lineContent); // middle numbers check

        // Reverse Number count Loop
        for (let reverseCount = i - 1; reverseCount >= 1; reverseCount--) {
            lineContent = lineContent + reverseCount;
        };

        console.log(lineContent);
    };
};

numPyramid(5);
numPyramid(10);