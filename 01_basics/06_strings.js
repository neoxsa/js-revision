let name = "neoxsa "
let repo = 3

// console.log(name + repo + " value");  // Not recommended

console.log(`Name is ${name}, repos ${repo}`);

let anotherName = new String("gnome-42")

// console.log(anotherName[0]);
// console.log(anotherName.__proto__);

// console.log(anotherName.length);
// console.log(anotherName.toUpperCase());
// console.log(anotherName.charAt(2));
// console.log(anotherName.trim());
// console.log(anotherName.indexOf('o'));

const newName = anotherName.substring(0, 3)
console.log(newName);

const changedName = anotherName.slice(-4, 9)
console.log(changedName);

const newString = "   neoxsa   "
// console.log(newString.trim());

const url = "https://google.com/download%20python"

console.log(url.replace("%20", "-"));
console.log(url.includes("python"));

console.log(anotherName.split("-"))