// Literally Everything in js is object
//Array => Object, string => Object, function => Object

// Function is Object Ex:
function multiply5(num) {
    return num * 5;
}

multiply5.power = 2

console.log(multiply5(2)); // 10
console.log(multiply5.power); // 2  (Here it shows object behaviour)
console.log(multiply5.prototype); // It also have prototype

function createUser(username, price) {
    this.username = username
    this.price = price
}

// Creating a custom prototype (method))

// create Increment method
createUser.prototype.increment = function () {
    this.price++
}

// Create printMe method
createUser.prototype.printMe = function () {
    console.log(`Price is ${this.price}`);
}

// "new" Keyword create a new object called the function then return the value to the newly object
const js = new createUser("Js", 15);
const ts = new createUser("Ts", 30)


js.printMe();

ts.increment();
ts.printMe();
