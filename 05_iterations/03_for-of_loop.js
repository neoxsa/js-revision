//  for of => Array specific loop

// ["", "", ""]
// [{}, {}, {}]

//  Array ex:
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// String ex:
const greetings = "Hello World!"
for (const message of greetings) {
    if (message == " ") {
        continue;
    }
    // console.log(message);
}

// Map => an object

const map = new Map()

map.set('IN', 'India')
map.set('AU', 'Australia')
map.set('UK', 'United Kingdom')
// console.log(map)

for (const [keys, value] of map) {
        console.log(`Code: ${keys} & Country: ${value}`);
}

// Object ex:

const names = {
    name1: "alice",
    name2: "neo",
    name3: "ada"
}

for (const name of names) {
    console.log(name)
}
// Here this method not working for names Object