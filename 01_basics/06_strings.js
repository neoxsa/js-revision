let name = "neoxsa"
let repo = 3

// console.log(name + repo + " value");  // Not recommended

console.log(`Name is ${name}, repos ${repo}`);

let anotherName = new String("gnome-42")

// console.log(anotherName[0]);
// console.log(anotherName.__proto__);
console.log(name.concat(repo));
console.log(name.fixed());
// console.log(anotherName.length);
// console.log(anotherName.toUpperCase());
// console.log(anotherName.charAt(2)); // o
// console.log(anotherName.indexOf('o')); // 2

const newName = anotherName.substring(3, 4) // start as per index value , the end value always neglect (not count)
console.log(newName); //m

const changedName = anotherName.slice(3, -1) // if confusion then always minus the neg value to the length value
console.log(changedName);

const newString = "   neoxsa   "
console.log(newString.trim());

const url = "https://google.com/download%20python"

console.log(url.replace("%20", "-"));
console.log(url.includes("python"));

console.log(anotherName.split("-"))