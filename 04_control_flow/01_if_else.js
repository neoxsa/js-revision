const isLoggedIn = true
const temp = 40

if (temp == 40) {
    console.log("less than 50");
} else {
    console.log("greater than 50");
}
console.log("executed");
//  <,>,==,===,=>,<=,!=, !=== //Conditional Check

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`the power is ${power}`);
}
// console.log(`Power is ${power}`) // not worked because power is not in global scope

const balance = 1000

if (balance < 200) {
    console.log("less than 200");
} else if (balance < 500) {
    console.log("less than 500");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("balance is equal to 1000 or greater")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course")
} else if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in")
}