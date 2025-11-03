
const user = {
    username: "neoxsa",
    price: 399,

    isLoggedIn: function () {
        console.log(`Hello ${this.username}, Welcome to the website.`) // Here using this keyword to get the access of username // Without this "username is not defined"

        console.log(this)  // full object including isLoggedIn function
    }
}

user.isLoggedIn()
// user.username = "Ada"
// user.isLoggedIn()

console.log(this) // Empty Obj. or no context in global in node.js but In Web Browser the this keyword in global have window object


// Checking if this works with function directly

// function coffee() {
//     const name = "black"
//     console.log(this) // only "this" in a function gives object of many keys and values
//     console.log(this.name)
// }
// coffee() //undefined


// const coffee = function() { //func. in a variable
//     const name = "black"
//     console.log(this.name);
// }
// coffee() //Here is also undefined

// In arrow function
const coffee = () => {
    const name = "black"
    console.log(this.name); // Arrow functions don’t have their own this binding; they lexically inherit "this" from their outer scope.
}
coffee() // undefined

// Basic Arrow Function:
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// arrowfunc(1, 5)

// Implicit Return / one-line  arrow func.
const addTwo = (num1, num2) => num1+ num2  // OR
// const addTwo = (num1, num2) => (num1+ num2)

const obj = (num1, num2) => ({username: "neoxsa"})

console.log(obj(1,5));