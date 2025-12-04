// Remember Everything in js is object
//Array => Object, string => Object, function => Object



let myHeroes = ["thor", "spiderman"]

const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidyPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Is .neoxsa method work on heropower object and any other object present here ?
// Here instead of using heroPower.prototype.neoxsa = function(){}
// Object to make it applicable on all declared objects not only for heroPower 

Object.prototype.neoxsa = function () {
    console.log("neoxsa is present in all objects")
}

heroPower.neoxsa();

// can i access the heroPower:object if i make method for Array also

Array.prototype.heyNeoxsa = function () {
    console.log("Hello Neoxsa")
}

myHeroes.neoxsa()  // this will work because Object is parent of all objects
myHeroes.heyNeoxsa() // this will work because myHeroes is an Array
// heroPower.heyNeoxsa() // not going to work because it applicable on the Arrays

// ****************************
const name = "Neoxsa    " // length is 10 including spaces

// console.log(name.trim().length) 
// console.log(name.trueLength()) // Ques: Create a custom method which gives trueLength of name 

String.prototype.trueLength = function () {
    console.log(this)
    console.log(`True Length is : ${this.trim().length}`)
}

name.trueLength();
"js    ".trueLength();
"hey   ".trueLength();


// ****** Inheritance *******

const User = {

}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeacherSupport   // using __proto__ we can get access to the TeacherSupport properties.
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeacherSupport, Teacher) // Here TeacherSupport get the access of TeacherSupport properties