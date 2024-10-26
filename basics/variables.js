/* --- Variables in JS --- */

/*
    - A variable is a container that stores data values. 
    - In JavaScript, you declare a variable using the 'let', 'const', or 'var' keyword.

    1) let keyword:
        - Declares a block-scoped variable. Variables declared with let are accessible within the block where they are declared, including any nested blocks.
        - Cannot be redeclared within the same scope.
        - Can be reassigned.
        - Can be hoisted, but they are not initialized until the line where they are declared, leading to the Temporal Dead Zone (TDZ).
    2) const keyword:
        - Declares a block-scoped constant.
        - Cannot be redeclared within the same scope.
        - Must be assigned a value during declaration. The value cannot be reassigned later.
        - Can be hoisted, but they are also subject to the TDZ.
        
    3) var keyword:
        - Declares a functional or global-scoped variable. meaing they are accessible within the function where they are declared, and any nested functions within that scope.
        - Can be redeclared within the same scope.
        - Can be reassigned.
        - Can be hoisted to the top of their scope, meaning they can be used before they are declared.
        - It is generally not recommended to use var keyword to avoid potential scoping, instead use let and const keywords.

    Hoisting
    --------
    - Hoisting is a mechanism where variable and function declarations are moved to the top of their scope before code execution. 
    - This means you can use a variable or function before it's declared in your code. 
    - Function declarations are hoisted entirely, including their body.   
    - Variable declarations (using var, let, or const) are also hoisted, but their assignments are not.
    - 'var' variables are initialized with undefined during hoisting.
    - 'let' and 'const' variables are not initialized, and accessing them before declaration leads to a ReferenceError due to the Temporal Dead Zone (TDZ).

    Temporal Dead Zone (TDZ)
    -----------------------
    - The TDZ is a mechanism to prevent accidental use of variables before they are properly declared and initialized. 
    - It helps avoid potential bugs and unexpected behavior.

*/

// var variable example
function varFunction() {
  x = 10;
  var x; // hoisted to the top of the scope
  if (true) {
    var x = 20; // Redeclaration and reassinging allowed
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

// let variable example
function letFuntion() {
  // varibale 'i' declared inside the below function/block cannot be accessed outside of it.
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }

  // declare varibale i with initialized value 111
  let i = 111;
  // redeclaring the i variable with another value since reasssinging is possible.
  i = 222;
  // try to redeclare a variabl with same name i within the same scope which is not possible for let variables, hence the ReferenceError
  // let i = 222; // uncomment this line.
  console.log(i);

  // x variable declared with let is used before initialisation.
  // Accessing x before it's initialized within the TDZ throws a ReferenceError.
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
}

// const variable example
function constFunction() {
  const PI = 3.14159; // should be initialised when declaring.
  // try to reassign, which is not possible.
  PI = 3.15; // TypeError: Assignment to constant variable.
}

varFunction();
letFuntion();
constFunction();
