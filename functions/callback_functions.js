/* --- Callback Functions in JS */

/*
    - A callback function is a function that is passed as an argument to another function and is executed within that function. 
    - It's a powerful technique used to handle asynchronous operations, events, and other dynamic scenarios in JavaScript.

    How Callback Functions Work:
    ----------------------------
    - Define the Callback Function: You create a function that performs the desired action.
    - Pass the Callback Function: You pass this function as an argument to another function.
    - Execution Within the Outer Function: The outer function, at a specific point, invokes the callback function, passing any necessary data.

    Key Use Cases of Callback Functions:
    ------------------------------------
    - Asynchronous Operations: Handling tasks that take time to complete, such as network requests, file I/O, or timers.
    - Event Handling: Responding to user interactions, like button clicks, mouse movements, or keypresses.
    - Error Handling: Managing errors and exceptions that may occur during asynchronous operations.
    - Functional Programming: Implementing functional programming paradigms, like higher-order functions and functional composition.

    Challenges with Callback Functions:
    -----------------------------------
    - Callback Hell: Asynchronous operations nested deeply can lead to complex and difficult-to-read code, often referred to as "callback hell."
    - Error Handling: Managing errors in nested callbacks can be challenging.
    
    Modern Alternatives to Callback Functions:
    -----------------------------------------
    To address the challenges of callback hell and error handling, modern JavaScript provides more elegant solutions:

    1) Promises: Represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
    2) Async/Await: A syntax that makes asynchronous code look more synchronous, simplifying the handling of asynchronous operations.
*/

// fetchData is the outer function that simulates an asynchronous operation (fetching data from a URL).
function fetchData(url, callback) {
  // Simulate asynchronous operation
  setTimeout(() => {
    const data = { name: "Alice", age: 30 };
    callback(data);
  }, 2000);
}

// processData is the callback function that will be executed once the data is fetched.
function processData(data) {
  console.log("Received data:", data);
}

// fetchData passes processData as an argument, and after 2 seconds, it invokes processData with the fetched data.
fetchData("https://api.example.com/data", processData);
