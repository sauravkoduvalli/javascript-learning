/* --- Immediately Invoked Function Expressions (IIFE) --- */

/*
    - A JavaScript function that is executed immediately after it's defined.
    - It's a common technique used to create a private scope for variables and functions, preventing them from polluting the global namespace.   
    - Syntax:   (function() {
                    // Code to be executed
                })();
    - Function Expression: The first pair of parentheses () creates a function expression.
    - Invocation: The second pair of parentheses () immediately invokes the function.

    Why Use IIFEs?
    -------------
    - Private Scope: Variables and functions declared within an IIFE are not accessible from outside the function, preventing naming conflicts.   
    - Module Pattern: IIFEs can be used to create modules, encapsulating code and exposing only necessary parts.   
    - Data Privacy: Sensitive data can be kept private within the IIFE's scope.   

    
*/

const CounterModule = (function () {
  // Private variable
  let counter = 0;

  // Public functions
  return {
    increment() {
      counter++;
      console.log(`Counter: ${counter}`);
    },
    decrement() {
      counter--;
      console.log(`Counter: ${counter}`);
    },
    getValue() {
      console.log(`Current Value: ${counter}`);
      return counter;
    },
  };
})();

// Trying to access `counter` directly should fail
console.log(CounterModule.counter); // Output: undefined

// Using the CounterModule
CounterModule.increment(); // Output: Counter: 1
CounterModule.increment(); // Output: Counter: 2
CounterModule.getValue(); // Output: Current Value: 2
CounterModule.decrement(); // Output: Counter: 1
CounterModule.getValue(); // Output: Current Value: 1
