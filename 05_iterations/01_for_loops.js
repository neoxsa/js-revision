for (let i = 0; i <= 10; i++) {
    const element = i

    if (element == 7) {
        console.log(`Index is ${i}`);
    }

    console.log(element);
};


// loop inside a loop // Question = Print Tables

for (let i = 2; i <= 10; i++) {

    console.log(`Table of ${i}`)

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }

};

// Array example:
const myArr = ["batman", "superman", "flash"]
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
};

// Keywords in Loop  // Uses: for pagination, stop the loop at a specific condition
// Break:
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Index no. :", i)
        break; // to break the loop
    };
    console.log(`Index Value ${i}`);
};

// Continue:

for (let i = 1; i <= 20; i++) {
    //here skip the value in conndition
    if (i == 5) {
        console.log(`Value detected ${i}`);
        continue; // skip the current value then continue the loop again
    };
    console.log("Index :",i);
}
