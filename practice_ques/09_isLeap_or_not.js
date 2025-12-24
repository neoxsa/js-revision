// Write a function that tells if provided year is a leap or not

// Input : A number, positive integer -> 1900, 2023, 2033

// Return : true if leap year, false if not leap year

// Leap year: 
// -> Every 4th year is a leap year 
// -> Leap year has 366 days
// -> Normal year has 365 days
// -> February has 28 days or 29 days
// -> Ignoring the exception of 1700, 1800 and 1900 which are not leap year

function isLeapYear(year) {
    if (typeof year !== "number") {
        throw new Error("Invalid input value.")
    } else {
        return (year % 4) === 0;
    };

};

console.log(isLeapYear(2023));