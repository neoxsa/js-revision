const num = [1, 2, 3, 4]


// Syntax: num.reduce((accumulator, currentValue) => accumulator + currentValue , initialValue)
const total = num.reduce((total, val) => total + val, 0)
console.log(total);


const sum = num.reduce(function (acc, currVal) {
    console.log(`Accumulator: ${acc} & Current Value: ${currVal}`);

    return acc + currVal
}, 0);

console.log(sum);

//  Shopping Cart Ex:

const shoppingCart = [
    {
        product: "Note-Book",
        price: 1200,
        qty: 3
    },
    {
        product: "Utensils",
        price: 500,
        qty: 1
    },
    {
        product: "Shirt",
        price: 999,
        qty: 1

    },
]

const totalPrice = shoppingCart.reduce((total, product) => total + (product.price * product.qty), 0);
console.log("Total Price: ", Number(totalPrice).toFixed(2));
