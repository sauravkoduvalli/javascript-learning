/* --- Recursion in JavaScript --- */

/*
    - Recursion is a technique where a function calls itself.
    - It’s useful for tasks that have repeated sub-tasks, like traversing tree structures or solving mathematical sequences.
*/

// Example (Factorial Calculation):
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(1));
