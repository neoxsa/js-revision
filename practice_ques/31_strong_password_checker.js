// Write a program that checks if the provided password is strong or not

// Input: A password string
// Output:
// - True if password string is strong
// - False if password string is not strong

// Strong Password:
// - Minimum 8 characters
// - One small case character a-z
// - One Big case character A-Z
// - One number 0-9
// - One special character => !@

// Examples : ashiSh1! = true, Asd!1 = false because of length

// Method 1:

function isStrongPassword(inputStr) {

    if (inputStr.length < 8) {
        return false;
    };

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChar = "@!";
    const numbers = "0123456789";

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;
    let hasNumbers = false;

    let result = true;

    for (let i = 0; i < inputStr.length; i++) {
        if (lower.includes(inputStr[i])) {
            hasLowerCase = true;
        } else if (upper.includes(inputStr[i])) {
            hasUpperCase = true;
        } else if (specialChar.includes(inputStr[i])) {
            hasSpecialChar = true;
        } else if (numbers.includes(inputStr[i])) {
            hasNumbers = true;
        };
    };

    if (!hasLowerCase || !hasUpperCase || !hasSpecialChar || !hasNumbers) {
        result = false;
    }

    return result;
}


console.log("is neoxs@8 strong: ", isStrongPassword("neoxs@8"));

console.log("is neoxsaa@8 strong: ", isStrongPassword("neoxsaa@8"));

console.log("is NEOXSAA@8 strong: ", isStrongPassword("NEOXSAA@8"));

console.log("is Neoxsaa@ strong: ", isStrongPassword("Neoxsaa@"));

console.log("is Neoxsaa8 strong: ", isStrongPassword("Neoxsaa8"));

console.log("is Neoxsaa@8 strong: ", isStrongPassword("Neoxsaa@8"));

console.log("is Neoxsaa!8 strong: ", isStrongPassword("Neoxsaa!8"));