const name = "Hello"

// Object Literal
const user = {
    name: "neoxsa",
    isLoggedIn: true,
    loginCount: 7,

    userDetails: function () {
        console.log(name); // Here it takes name global context
        console.log(this.name); //name from the current context 
        console.log(this);
    }
}

console.log(user.name);
console.log(user.userDetails());
console.log(this) // {} Global Context in Node and In Browser shows window object in global scope

//  What if create more than one user
// Then use Class and constructor to create users


// Constructor Function use - "new" keyword
// Constructor is needed to create a new Instance (new Empty Object)

function userCreate(username, isLoggedIn, loginCount) {

    // key/var  = parameters
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount
    this.greetings = function () {
        console.log(`Welcome, ${this.username}`)
    }

    return this  // returning the the values to the global scope
}

const userOne = new userCreate("neoxsa", true, 20)
const userTwo = new userCreate("ada", false, 1)

console.log(userOne);
console.log(userTwo); //without new keyword the existing user detail overwrite with the new user detail.
console.log(userOne.constructor); // userOne Reference which is userCreate

