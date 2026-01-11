// Write a program that takes input from the user
// Prompt the user to enter their name
// Save it to a variable and print it
// Solution : Install package "prompt-sync"

const prompt = require('prompt-sync')();

const nameOfTheUser = prompt('Please tell your name: ');

console.log(nameOfTheUser);