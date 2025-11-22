// Promise - It is an object represents the eventual completion (or failure) of an asynchronus oopperation and its resulting value.

// A promise have one of these states:
//1.) pending: initial state, neither fulfilled nor rejected.
//2.) fulfilled: meaining that the operation is completed successfully.
//3.) rejected: meaning that the operation rejected. 

// Example 1 :
const promiseOne = new Promise(function (resolve, reject) {

    // Do an async task
    // Database calls, cryptography tasks, network call, etc.
    setTimeout(() => {
        console.log('Async Task is complete')
    }, 2000)

    resolve(); //to perform the resolve task means to call the .then resolve task
})

// .then direct relation to the resolve
promiseOne.then(() => {

    console.log("Promise consumed")

})

// Example 2:
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
    }, 1000)
    resolve();
}).then(() => {
    console.log("Async 2 Resolved")
})

// Example 3:
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Henry", email: "henry@example.com" }); // the object in the resolve pass to the .then as user
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
});

// Example 4: 
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({ username: "hello", password: "world" })
        } else {
            reject("ERROR:: Something went wrong")
        }
    }, 1000);
})

// .then Chaining
promiseFour
    .then((user) => {
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"));

// Example 5:
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // const error = true
        const error = false
        if (!error) {
            resolve({ username: "javascript", email: "js@example.com" })
        } else {
            reject("Error: Js went wrong")
        }
    }, 1000)
})
// here using async/await instead of .then and .catch method to handle the promise
// async/await Drawback is cannot handle the errors  like .catch
// to handle the error gracefully -  Use try catch methods

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response)

    // with try & catch
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// Examples of API handling using promise and async/await both methods

// Promise Method: -
const apiPromise = new Promise((resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/todos'

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
})

apiPromise
    .then((data) => {
        // console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// Async/await Method:
async function consumeApiProm() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json() // putting await before the response because promise is still opending
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

consumeApiProm();

// Async/await Method with then and catch

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });