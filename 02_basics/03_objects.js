// Singleton ==> object build by constructor
// Object.create()


// Object Literals ==> object build in var
// let user = {}

const mySymb = Symbol("ID")

let JsUser = {
    username: "neoxsa",
    "full name": "NeoXsa",
    age: "22",
    email: "neoxsa@user.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"],
    [mySymb]: "122345",
    "object": {
        id: "78945",
        isAcitve: false
    }

}
//Two ways to get keys from obj: simply with . but in some cases use []
// console.log(JsUser.username);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["object"].isAcitve);
// console.log(JsUser[mySymb])


JsUser.email = "admin@admin.com"
// console.log(JsUser.email);
// Object.freeze(JsUser) // to freeze the object
JsUser.email = "neoxsa@admin.com"

// console.log(JsUser);


// Add another key
JsUser.greetings = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greetings())

JsUser.greetingsTwo = function(){
    console.log(`Hello, ${this.username}`);
    console.log(`Hi, ${this["full name"]}`);
}
console.log(JsUser.greetingsTwo());
