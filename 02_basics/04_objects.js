// const gptUser = new Object()

const gptUser = {}

gptUser.id = "321654"
gptUser.username = "monday"
gptUser.isLoggedIn = true

console.log(gptUser);

const regularUser = {
    email: "monday@weekday.com",
    fullName: {
        firstName: "Mon",
        lastName: "Day",
    }
}

// console.log(regularUser.fullName?.firstName)

// Joint 2 objects:
const obj1 = {
    username: "user1",
    email: "user1@admin.com",
    isLoggedIn: false
}

const obj2 = {
    address: "H. no. 23A, Street-2, Delhi ",
    phone: "7894561230"
}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)

const allUsers = [
    {
        username: "user1",
        email: "user1@test.com"
    },
    {
        username: "user2",
        email: "user2@test.com"
    },
    {
        username: "user3",
        email: "user3@test.com"
    },
    {
        username: "user4",
        email: "user4@test.com"
    }
]

console.log(allUsers[0].email);

console.log(gptUser)

console.log(Object.keys(gptUser))
console.log(Object.values(gptUser))
console.log(Object.entries(gptUser))
console.log(gptUser.hasOwnProperty('username'))

// Destructure in Obj
const course = {
    courseName: "Js Course",
    Price: 999,
    courseInstructor: "Hitesh"
}

const { courseInstructor: instructor } = course //Destructing

console.log(instructor);

// APIs mostly in these Format -
// JSON :
// {
//     "name": "neoxsa",
//     "skill" "js",
//     "fullName": "NeoXsa"
// }

// Arrays:
// [
//     {},
//     {},
//     {},
// ]


