/* --- Data types in JS --- */

/*
    - JavaScript is a dynamically typed language, meaning you don't need to declare the data type of a variable explicitly. 
    - The interpreter automatically determines the data type based on the value assigned to the variable.
    - Data types are categorised into 2:
        1) Primitive: Number, BigInt, String, boolean, Undefined, Null, Symbol.
        2) Non-primitive: Object.

    Primitive data types
    --------------------
    1) Number: Represents numeric values, both integers and floating-point numbers. JS can also represent special numeric values such as Infinity, -Infinity, and NaN (Not-a-Number).
    2) BigInt: A type of number that can represent very large or very small integers beyond the range of the regular number data type.
    3) String: Represents a sequence of characters.
    4) Boolean: Represents a logical value, either true or false.
    5) Undefined: Represents a variable that has been declared but not yet assigned a value.
    6) Null: Represents the intentional absence of any object value.
    7) Symbol: Represents a unique and immutable identifier.

    Non-Primitive data types
    ------------------------
    1) Object: Represents a collection of key-value pairs.
*/

// number
let age = 25;
let price = 9.99;

let number1 = 3 / 0;
console.log(number1);  // Infinity
let number2 = -3 / 0;
console.log(number2);  // -Infinity
// strings can't be divided by numbers
let number3 = "abc" / 3; 
console.log(number3);  // NaN

// BigInt 
let value1 = 900719925124740998n;

// string
let name = "Alice";
let message = "Hello, world!";

// boolean
let isStudent = true;
let isRaining = false;

// undefined
let x; // x is undefined

// null
let y = null;

// symbol
let id = Symbol("myId");

// object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
