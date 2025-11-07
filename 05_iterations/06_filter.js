const code = ["js", "py", "cpp"]

// Not Return if in variable
const value = code.forEach((item) => {
    console.log(item);
    return
})
 
//console.log(value); //undefined

// Filter :
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filterNum = num.filter((val) => {
//     return val > 5
// })
// console.log(filterNum);

const newNum = []

num.forEach((num) => {
    // if (num > 5) {
    //      newNum.push(num)
    // }
})

console.log(newNum);

// Books Object ex:

let books = [
    { name: 'Shadows of Tomorrow', genre: 'fiction', publish: 2005, edition: 2015 },
    { name: 'Quantum Realities', genre: 'science', publish: 2012, edition: 2018 },
    { name: 'Echoes of the Past', genre: 'history', publish: 1998, edition: 2004 },
    { name: 'Digital Dreams', genre: 'technology', publish: 2016, edition: 2021 },
    { name: 'The Silent Code', genre: 'thriller', publish: 2010, edition: 2017 },
    { name: 'Mystic Horizons', genre: 'fantasy', publish: 2003, edition: 2011 },
    { name: 'The Hidden Algorithm', genre: 'technology', publish: 2018, edition: 2022 },
    { name: 'Whispers in the Void', genre: 'horror', publish: 2007, edition: 2014 },
    { name: 'Fragments of Truth', genre: 'philosophy', publish: 1995, edition: 2001 }
];


let selectedBk = books.filter((bk) => bk.genre === 'fiction');

selectedBk = books.filter((bk) => {
    return bk.genre === 'technology' && bk.publish > 2000
});

console.log(selectedBk);