//  Immediately Invoked Function Expressions (IIFE) :

// Wrapping the function with parenthesis () then execute () 
// Note: Remember always end it with ; other wise it won't know when to stop

(function DBStart() {
    // Named IIFE
    console.log("DB Start");
})();


(() => { 
    console.log("DB connected");
})(); // Also works with arrow functions

// same works like normal function passing parameter
((name)=>{
  console.log(`Username is ${name}`)  
})('Neoxsa');