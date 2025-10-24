// let score = "12abc"
// let score = null
// let score = undefined
let score = true  // 1

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "12" => 12
// "12abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0


// let isLoggedIn = 0 //false
// let isLoggedIn = 1 //true
// let isLoggedIn = "" // false
let isLoggedIn = "not empty" //true


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


let someNumber = 11

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)

// *********** Operations ************

let value = 5
let negValue = -value
// console.log(negValue);

console.log("add :", 1 + 1);
console.log("sub :", 2 - 2);
console.log("multiply :", 3 * 3);
console.log("power :", 4 ** 4);
console.log("divide :", 5 / 5);
console.log("reminder", 1 % 2);

let str1 = "hello "
let str2 = "world"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(2 + "1"); // 21
// console.log("3" + "4"); // 34
// console.log(1 + 1 + "8"); // 28
// console.log("8" + 1 + 1); // 811

// console.log((2 * 3) / 5 % 2);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 6

let gameCounter = 100
++gameCounter; //prefix operator
gameCounter++;  // postfix operator
console.log(gameCounter);

// prefix operator example:

let a = 2
const b = ++a

console.log(`a: ${a}, b: ${b}`);

// postfix operator example:

let x = 2
const y = x++

console.log(`x: ${x}, y: ${y}`);
