const accountId = 7845
let accountEmail = "user1@gmail.com"
var accountPassword = "qwerty"
accountCity = "New Delhi"
let accountState;

// accountId = 12 // not allowed for const
accountEmail = "user22@gmail.com"
accountPassword = "12345"
accountCity = "Jaipur"

/* 
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])