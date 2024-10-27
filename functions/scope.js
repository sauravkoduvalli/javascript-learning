/* --- Scope in Javascript --- */

/*
    - Scope in JavaScript refers to the visibility and accessibility of variables within different parts of your code.

    Types of Scope:
        1) Global Scope:
            - Variables declared outside any function or block have global scope.
            - They are accessible from anywhere in the code.
            
        2) Local Scope:
            - Variables declared within a function have local scope.
            - They are only accessible within that function.

        3) Block Scope:
            - Introduced in ES6 with let and const keywords.
            - Variables declared within a block (like a for loop or an if statement) are only accessible within that block.

    Important Considerations:
    -------------------------
    - Variable Shadowing: 
        - If a variable with the same name is declared in both global and local scopes, the local variable takes precedence within the function.
    - Function Scope: 
        - In older JavaScript versions, variables declared with var within a function have function scope. 
        - This means they are accessible throughout the function, including nested functions. 
        - However, it's generally recommended to use let and const to avoid accidental variable reassignments.
    - Hoisting: 
        - In JavaScript, variable and function declarations are hoisted to the top of their scope. 
        - However, only the declarations are hoisted, not their initializations.

    Best Practices:
    ---------------
    - Use 'let' and 'const' for most variable declarations to ensure block scoping and prevent accidental reassignments.
    - Use var sparingly, and only when necessary for older JavaScript compatibility.
    - Minimize the use of global variables as they can lead to naming conflicts and make code harder to maintain.
    - Use clear and descriptive variable names to improve code readability.
*/

let globalVariable = "I'm global";

function myFunction() {
  let localVariable = "I'm local";
  console.log(globalVariable); // Accessible
  console.log(localVariable); // Accessible
}

myFunction();
console.log(globalVariable); // Accessible
// console.log(localVariable); // Not accessible