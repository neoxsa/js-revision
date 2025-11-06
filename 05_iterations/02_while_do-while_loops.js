// while loop
let index = 0

while (index <= 10) {
    console.log(`value is : ${index}`);
    index = index + 1
};

// for even numbers
let i = 2

while (i <= 10) {
    console.log(`${i} is Even number`);

    i = i + 2
}

// Array example:

let myArr = ["google", "bing", "yahoo"]

let arr = 0

while (arr < myArr.length) {
    console.log(`Seacrh in ${myArr[arr]}`);
    arr + 1
};


//**do while loop:** In do-while the condition check at last after execution of code.

let value = 1
//let value = 11  // In this value the loop won't execute because of condition check after execution

do {
    console.log("Executed code", value);
    value++
} while (value <= 10);
