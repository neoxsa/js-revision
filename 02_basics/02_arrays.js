const marvel_heroes = ["Spiderman", "Thor", "Hulk"] 
const dc_heroes = ["Batman", "Superman", "Flash"]

// ***push**
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // [ 'Spiderman', 'Thor', 'Hulk', [ 'Batman', 'Superman', 'Flash' ] ]
// console.log(marvel_heroes[3][0]); // Batman

// **concat** 
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// **spread operator**
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

// **flat**
const another_array = [1, 2, 3, [4, 5, 6], [8, [9, 10]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

// **isArray,from,of**
const array2 = Array.isArray("NeoXsa") // to Check array
console.log(array2);

const array3 = Array.from("NeoXsa") // convert into array
console.log(array3);

const array4 = Array.from({ name: "neoxsa" }) // interesting 
console.log(array4);

let score1 = 0
let score2 = 50
let score3 = 100

let array5 = Array.of(score1, score2, score3) //elements to array
console.log(array5);
