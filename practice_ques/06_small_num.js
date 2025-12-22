// 6: Write a function that finds and prints the smallest number among three given numbers.

// Input: 3 numbers
// Return: Smallest number
// Example -  3,1,6 -> 1 ; -1,-6,9 -> -6
// Math.min is not allowed


function smallNum(num1, num2, num3) {

    if (num1 < num2 && num1 < num3) {
        return num1
    } else if (num2 < num1 && num2 < num3) {
        return num2
    } else if (num3 < num1 && num3 < num2) {
        return num3
    }

    return num1
}

console.log(smallNum(4, -10, -8))
console.log(smallNum(1, 25, 1))
console.log(smallNum(1, 1, 0.2))
console.log(smallNum(2, -7, -7))
console.log(smallNum(3, 3, 1))
console.log(smallNum(3, 3, 4))


// OR 

// Better Readability:

function smallestNum(a, b, c) {
    let smallest = a;

    if (b < smallest) {
        smallest = b
    }

    if (c < smallest) {
        smallest = c
    }

    return smallest;
};

console.log("Smallest (1,2,4) : ", smallestNum(1, 2, 4))
console.log("Smallest (1,0,4) : ", smallestNum(1, 0, 4))
console.log("Smallest (0,0,4) : ", smallestNum(0, 0, 4))
console.log("Smallest (1, 2, -4) : ", smallestNum(1, 2, -4))
console.log("Smallest (-4, 2, -4) : ", smallestNum(-4, 2, -4))



// OR

// Array Sort: 
// clean and sort way to solve

function smallestBySort(a, b, c) {
    if (typeof a | typeof b | typeof c != "number") console.log("invalid number")

    let arr = [a, b, c];
    const newArr = arr.sort((a, b) => a - b)

    return newArr[0];
}

console.log("Small_Sort (2,4,1) :", smallestBySort(2, 4, 1));
console.log("Small_Sort (2,4,1) :", smallestBySort(2, 4, "1"));

