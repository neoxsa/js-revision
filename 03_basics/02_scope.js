var c = 100 //Global Scope

if (true) {   //Block Scope
    let a = 200
    const b = 600
    // var c = 500
    console.log("Inner :", a)
}

// console.log(a); // due to scope it can't get access
// console.log(b); // due to scope it can't get access
// console.log(c); // var never follow the block-scope thats why avoid it to use 


// Nested Scope:

// function example : 
function one() {
    const username = "neoxsa"
    function two() {
        const website = "www.neoxsa.com"
        console.log("F2", username); // Here child func. can access the parent func. variable. 
        //  +++++++ Closures +++++++
    }
    // console.log(website); cannot get the access from the child func.

    two()
}
one()

// if statement example:

if (true) {
    const name = "YouTube"

    if (name === "YouTube") {
        const website = " youtube.com"

        console.log(name + website) // here get the access
    }
    // console.log(website); // Same here it cannot get access outside of the scope
}
// console.log(name) // not access


// ++++++++++++++ Interesting (Hoisting) ++++++++++++

console.log(addOne(5)) // Here addOne can execute normally before the function

function addOne(num) {
    return num + 1
}

// addOne(5) 


// **But Here - we hold the function in a variable 

addTwo(5) // // Here addTwo cannot execute because the execution call before the declaration of those function which are declare in a variable which can occur error  "Hoisting" 

const addTwo = function (num) {
    return num + 2
}

// addTwo(5) // After declaration execute normally


