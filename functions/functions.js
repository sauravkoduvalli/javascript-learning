/* --- Functions in JavaScript --- */

/*
    - A function allows to encapsulate code that performs a specific task.
    - Functions help to organize the code, make it reusable, and improve readability.

    Function declaration
    --------------------
    - A function declaration defines a named function. 
    - This type of function is hoisted, meaning it can be called before it appears in the code.
    - syntax: function functionName(parameters) {
                return result;
              }

    Function Expression
    -------------------
    - A function expression defines a function and assigns it to a variable. 
    - Unlike function declarations, function expressions are not hoisted, so they can only be called after they are defined.
    - syntax: const functionName = function(parameter) {
                return result;
              }

    Arrow Functions
    ---------------
    - Arrow functions provide a shorter syntax for writing functions and are particularly useful for inline or small functions.
    - This is introduced in Javascript ES6.
    - syntax: const functionName = (parameters) => {
                return result;
              };

    Parameters and Arguments
    ------------------------
    Parameter: variables defined within the function declaration.
    Argument: values passed to the function when it is called.

    Default Parameters
    ------------------
    - JS introduced this feature in ES6, which allows setting default values for function parameters.
    - So if an argument isn’t provided, the default value is used.

    Function Return Value
    ---------------------
    - The return statement specifies the value to be sent back from the function.
    - If no return statement is present, the function implicitly returns undefined.

    Rest Parameters
    ---------------
    - Rest parameters allow a function to accept an indefinite number of arguments as an array, using the syntax (...).

    Higher-Order Functions
    ----------------------
    - A higher-order function is a function that accepts other functions as arguments, returns a function, or both.
    - Higher-order functions are common in JavaScript and are used for tasks like event handling, data transformation, and more.
    - Examples: map(), filter(), reduce(), forEach().

*/

// Function declaration example
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// function expression example
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(10, 3));

// Arrow Functions example
const multiply = (a, b) => a * b;
console.log(multiply(3, 2));

// Default parameter example
const printCarName = function (name = "Lamborgini Uruz") {
  return console.log(`Car name is: ${name}`);
};
printCarName("Range Rover sport");

// rest parameter example
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Higher-order function examples
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map((number) => number * number);
console.log(square);
const findSum = numbers.reduce((total, number) => total + number, 0);
console.log(findSum);
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
