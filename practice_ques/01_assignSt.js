// Assign the students according there name length
//Houses : Gryffindor (length:5),  Hufflepuff (length: 7), Ravenclaw (length:9), Slytherin (length:10 +)


let students = ["Alex", "Franklin", "Cyrus", "Alfredo", "Lucy", "Christopher", "John", "Chritiano", "Sylvestor", "Typescripts"]


let Gryffindor = [];
let Hufflepuff = [];
let Ravenclaw = [];
let Slytherin = [];

students.map(student => {
    if (student.length <= 5) {
        Gryffindor.push(student)
    } else if (student.length <= 7) {
        Hufflepuff.push(student)
    } else if (student.length <= 9) {
        Ravenclaw.push(student)
    } else {
        Slytherin.push(student)
    }
})

console.log("G:", Gryffindor, "H:", Hufflepuff, "R:", Ravenclaw, "S:", Slytherin)
