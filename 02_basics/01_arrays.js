// Arrays

const myArr = [0, 1, 2, 3, 4]
const heroes = ["Batman", "Superman", "Wolverine"]

const myArr2 = new Array(5, 6, 7)
console.log(myArr[1]);

// Arrays Method :-
// myArr.push(65) // add value
// myArr.push(70)
// myArr.pop() // pop out the end value // no parameter need
// myArr.unshift("Start") // add from the start in the array
myArr.shift() // remove value from the start in the array

console.log(myArr.includes(2)) // Boolean data type

console.log(myArr.indexOf(10)) // -1 
console.log(myArr.join()) // convert to string

console.log(myArr);

//Splice & Slice

const arr0 = [0, 1, 2, 3, 4, 5, 6]
console.log("OG :", arr0)

const A = arr0.slice(1, 3) // copy section of an array
console.log("Slice :", A)
console.log("OG_A :", arr0)

const B = arr0.splice(1, 3) // remove the elements from an original array
console.log("Splice :", B)
console.log("OG_B", arr0)
