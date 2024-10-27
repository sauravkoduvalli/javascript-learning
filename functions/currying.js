/* --- Function Currying --- */

/*
    - A technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. 
    - This allows you to create specialized functions from a more general function by "pre-filling" certain arguments.

    Why Use Currying?
    -----------------
    - Reusability: You can create new functions from a base function by fixing some arguments.
    - Modularity: It breaks down a function into smaller parts.
    - Customization: It allows partial application of functions, where you pass some arguments initially and pass the rest later.
*/

//Adding Numbers
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3)); // Output: 6


// Real-World Use Case
function log(level) {
  return function (message) {
    console.log(`[${level}] ${message}`);
  };
}

const errorLog = log("ERROR");
const infoLog = log("INFO");

errorLog("Something went wrong!"); // Output: [ERROR] Something went wrong!
infoLog("The operation was successful."); // Output: [INFO] The operation was successful.
