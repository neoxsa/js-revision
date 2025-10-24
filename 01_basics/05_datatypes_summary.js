// Primitive Data types:

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const num = 12
const anotherNum = 12.2
const isLoggedIn = false
const value = null
let upcomingVal;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNum = 789456123123456n

// Reference (non-primitive data types)
// types : Arrays, Objects, Functions

const heros = ["batman", "superman", "wolverine", "ironman"]

const myObj = {
    name: "neoxsa",
    email: "user@example.com"
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof anotherId); // symbol
console.log(typeof bigNum); // bigint
console.log(typeof myObj); // object
console.log(typeof myFunction); // function



// *************** Stack & Heap memory ****************

// Stack (Primitive) & Heap (Non-Primitive)

let name = "Google"

let anotherName = name
anotherName = "Bing"

console.log( "Changed name:", anotherName)
console.log("Again Name:" , name)  // Here the the name not changed because Call by value (Store in Stack, make copy in stack)

let user1 = {
    name: "amazon",
    email: "user@flipkart.com"
}
let user2 = user1

user1.email = "user@amazon.com"

console.log(user1.email)
console.log(user2.email) // Here the emails are changed because Call by reference (Store in Heap)