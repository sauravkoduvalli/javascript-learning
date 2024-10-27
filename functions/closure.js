/* --- Closures in JavaScript --- */

/*
    - A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned.
    - This concept is crucial for understanding advanced JavaScript techniques, such as modules, currying, and memoization.   

    Key Points:
    -----------
    - Closures allow you to create private variables that can only be accessed and modified by the inner function.
    - They are often used to create modules, where functions and variables are encapsulated within a closure to prevent naming conflicts and provide a clean API.
    - Closures can also be used to implement techniques like currying and memoization.

*/

// Defines a variable and a nested inner function.
function outerFunction() {
  let count = 0;
  // Accesses and uses the variable from the outer function's scope.
  function innerFunction() {
    count++;
    console.log(count);
  }
  return innerFunction;
}
// When the outer function returns, the inner function retains a reference to the outer function's scope, including the variable.
const myFunction = outerFunction();

myFunction(); // Output: 1
myFunction(); // Output: 2
myFunction2(); // Output: 1

// Practical usecase: Creating a counter function
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
// Each call to createCounter() creates a new closure with its own private count variable. This allows you to have multiple independent counters.
console.log(counter1()); // count: 1
console.log(counter1()); // count: 2
console.log(counter2()); // count: 1
