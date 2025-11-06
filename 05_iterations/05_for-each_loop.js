// for each loop

const lang = ["js", "py", "cpp", "java"]

// for each with normal fn
lang.forEach(function (val) {
    // console.log(val)
});

// for each with arrow fn
lang.forEach((val) => {
    // console.log(val)
})

// fn print using loop
function printMe(item) {
    console.log(`Print ${item}`);
}

lang.forEach(printMe);

// for each - parameters
lang.forEach((item, index, arr) => {
    // console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
})


// Array with Objects

const languages = [
    {
        name: "Javascript",
        format: "js"
    },
    {
        name: "Python",
        format: "py"
    },
    {
        name: "C++",
        format: "cpp"
    }
]

languages.forEach((lang) => {
    console.log(lang.name)
})