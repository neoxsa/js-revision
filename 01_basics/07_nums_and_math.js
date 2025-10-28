const score = 400
console.log(score);

const balance = new Number("100")
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 123.567

console.log(otherNum.toPrecision(4)) // round-off  according to the given length value

const follower = 1000000
console.log(follower.toLocaleString('en-In')) // by default US standard / Here Indian Standard

// for DSA or competitive exam
// user browser js engine type Number and check some methods for that function (ex: Number.MIN_VALUE, etc)


// ************ Maths ***************

// console.log(Math); // object
// console.log(Math.abs(-2)); // neg value to positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(3.1));
// console.log(Math.floor(6.9));
// console.log(Math.min(4, 2, 5, 1));
// console.log(Math.max(1, 4, 6, 9));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.ceil((Math.random() * 10) + 1));


// Note :- (dice example 6 side)
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
