
const userEmail = []

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// falsy values :
// "", false, 0, -0, BigInt 0n, 

// truthy values:
// [], true, "false", "0", " ", {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// let val1 = 1 ?? 3
// val1 = null ?? 2
// val1 = undefined ?? 5
val1 = null ?? 10 ?? 30

console.log(val1);

// Ternay Operator

// condition ? true : false

const isActive = true

!isActive ? console.log("offline") : console.log("online");
