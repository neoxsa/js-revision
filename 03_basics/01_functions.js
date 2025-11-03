function name() {
    console.log("N")
    console.log("E")
    console.log("O")
    console.log("X")
    console.log("S")
    console.log("A")
}
// name();

function addNums(num1, num2) {
    // let result = num1 + num2
    // return result;

    return num1 + num2
}

let result = addNums(1, 2)
console.log("Result", result);

function user(username = "Guest") {
    if (!username) {
        console.log("Please Login Again")
        return
    }
    return `Hello ${username}, Rediecting to Home`
}

console.log(user("Neoxsa"));

// Rest Operator 
function calculateCartPrice(val1, val2, ...nums) {  // Here the first two values are assigned in the val1 & val2 and the rest remian
    return nums
}
console.log(calculateCartPrice(500, 900, 1000, 200))

const products = {
    productName: "GPhone",
    price: 29999
}

function product(item) {
    return `Product name : ${item.productName} & price : ${item.price}`
}

// console.log(product(products));
console.log(product({
    productName: "JS Plus",
    price: 50000
}));

const newArray = [200, 100, 500]

function returnSecondValue(arr) {
    return arr[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([1, 3, 5, 8]));