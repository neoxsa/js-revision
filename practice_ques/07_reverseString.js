// Write a function that returns the reverse of a string


// with Loop

function revStr(str) {
    // console.log(str[0]);

    if (typeof str !== "string") throw new Error("Enter a string value")

    let result = ""

    for (let i = str.length - 1; i >= 0; i--) {
        // result = result + str[i];
        // or
        result += str[i];
    }

    return result;

}

console.log(revStr("NeoXsa"))
console.log(revStr(123456))


// With Reverse Method

function reverseString(str) {
    typeof str !== "string" && console.error("No number allowed")

    const newStr = str.split("").reverse().join("")
    console.log(typeof newStr);
    return newStr;
}


console.log("New R. String is ", reverseString("Google"))

// console.log("New R. String is ", reverseString("=-#$%!"))

// console.log("New R. String is ", reverseString(12))