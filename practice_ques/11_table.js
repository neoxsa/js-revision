// Write a function that generates and prints a multiplication table for a given number to a specified range

// Input: 2 Positive Numbers:
// Table of
// Table till
// Return: Nothing


// My Approach 
function table(numOf, numTill) {

    for (let i = numOf; i <= numOf; i++) {
        console.log(`Table of ${i}`);

        for (let j = 1; j <= numTill; j++) {
            console.log(`${i} X ${j} = ${i * j}`)
        };
    };
};

table(2, 10);
table(4, 10);
table(8, 20);

// Method 2: Simple Optimize way

function multiplicationTable(tableOf, tableTill) {

    if (typeof tableOf !== "number" || typeof tableTill !== "number") {
        throw new Error("Input should be in Positive Number.");
    } else if (!Number.isInteger(tableOf) || !Number.isInteger(tableTill)) {
        throw new Error("Input should not be in Decimal.");
    } else if (tableOf <= 0 || tableTill <= 0) {
        throw new Error("Input should be greater than 0");
    }

    console.log(`Table of ${tableOf}`);

    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} X ${i} = ${tableOf * i}`);
    };
};

multiplicationTable(10, 20);
// multiplicationTable(20, -20);
// multiplicationTable(20, 0);

// Method 3: Instead of multiplication; By Adding Value 

function tableM3(tableOf, tableTill) {
    console.log(`Table of ${tableOf}`);

    for (let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
        console.log(i);
    }
}

tableM3(4, 10);
