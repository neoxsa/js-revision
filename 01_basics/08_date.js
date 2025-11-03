// Date

let date = new Date()
console.log(date.toString());
console.log(date.toLocaleString()) // mm/dd/yyy, hh:mm:ss AM/PM
console.log(date.toDateString()) // DDD MMM dd YYYY
console.log(date.toISOString()) // 2025-10-28T18:05:09.056Z
console.log(date.toJSON()) // 2025-10-28T18:05:09.056Z
console.log(date.toLocaleDateString()) // mm/dd/yyy   // To customise format it check line:34
console.log(date.toLocaleTimeString()) // hh:mm:ss AM/PM
console.log(date.toTimeString()) // HH:mm:ss GMT (Standard)

// let createdDate = new Date(2000, 0, 16)
// let createdDate = new Date(2000, 0, 16, 5,30)
// console.log(createdDate)

let createdDate = new Date("2025-08-12")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now() // Current Date
console.log(myTimeStamp);  // in milliseconds
console.log(createdDate.getTime()); // in milliseconds
console.log(Math.floor(Date.now() / 1000)); // conversion from millisec to sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // Here Months start from 0 ; end to 11
console.log(newDate.getDay()); // from 1 to 7 (Wednesday)

console.log(`${newDate.getDay()} and the time`);

let dateFormat = newDate.toLocaleDateString('default', {
    weekdays: 'long',
    dateStyle: "full",

})
let timeFormat = newDate.toLocaleTimeString('default', {
  hour: "2-digit",

})
let day = newDate.getDay();

let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(dateFormat);
console.log(timeFormat);
console.log(daylist[day])
