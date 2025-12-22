// 4: Write a function that calculates and prints the area of a rectangle given its length and width

function area(l, b) {

    if (l <= 0 || b <= 0 ) {
        throw new RangeError("Negative or Zero value not allowed!")
    } else if (l === null || b === null || l === undefined || b === undefined) {
        throw new RangeError("No values are given")
    } else if (isNaN(l) || isNaN(b)) {
        throw new Error("Length and Breadth should be in numbers.")
    } else {
        const area = l * b;

        console.log(`Area of a rectangle: length * breadth = (${l} X ${b}) = ${area}`)
    }

}

// area(5, 8);
// area(Infinity, NaN)
// area(null, 5) //0
// area(null, Infinity) //NaN
// area("l", "b") //NaN
// area(-5, 9);
