
// Write a function that tells if a given number is even or odd.

function checkNum(num) {

    return typeof num != "number" ? (console.log('Please, Enter a valid number')) : num % 2 === 0 ? (console.log(`${num} is even`)) : (console.log(`${num} is odd`))

    //OR

    // if (typeof num !== "number") {
    //     console.log('Please, Enter a Valid Number.')
    // } else if (num % 2 === 0) {
    //     console.log(`${num} is even`)
    // } else {
    //     console.log(`${num} is odd`)
    // }
}

checkNum(2);
checkNum("a");
checkNum(0);
checkNum(13);


// OR

// Switch

function checkNum2(num) {
  switch (true) {
        case (typeof num !== "number"):
            console.log('Not a vaild number')
            break;
        case (num % 2 === 0):
            console.log(`${num} is even`);
            break;
        case (num % 2 != 0):
            console.log(`${num} is odd`);
            break;
        default:
            console.log('Operation Finished.')
            break;
    }
}

checkNum2(2)