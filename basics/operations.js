/* --- opartions in JS --- */

/*
    - Operators are special symbols that perform specific operations on operands. 
    - In JavaScript, operators are used to manipulate variables and values.

    Types of Operators
    ------------------
    1) Arithmetic Operator: 
        - Used to perform arithmetic operations.
        - Examples: Addition(+), subtraction(-), Multiplication(*), Division(/), Modulus(%), Increment(++), Decrement(--)

    2) Assignment Operator:
        - Used to assign values to variables.
        - Examples: Assignment(=), Add and assign(+=), subtract and assign(-=), Multiply and assign(*=), Divide and assign(/=)

    3) Logicacl Operator:
        - Used to combine conditions.
        - Examples: && (AND), || (OR), ! (NOT)

    4) Comparison Operator:
        - Used to compare values.
        - Examples: equal to(==), not equal to(!=), Strict equal to(===), Strict not equal to(!==), greater than(>), less than(<), greater than or equal to(>=), less than or eqaual to(<=).

    5) Bitwise Operator:
        - Used to manipulate bits of numbers.
        - Examples: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left shift), >> (Right shift), >>> (Unsigned right shift)

    6) Ternary Operator:
        - A concise way to write conditional expressions.
        - Syntax: condition ? expression1 : expression2

    7) String Operator:
        - Used to manipulate strings.
        - Examples: + (Concatenation)
*/

// Arithmetic Operators
let x = 10, y = 5;
let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2
let remainder = x % y; // 0

// Assignment Operators
let z = 10;
z += 5; // z is now 15
z -= 2; // z is now 13

// Comparison Operators
let a = 10, b = 5;
let isEqual = a == b; // false
let isNotEqual = a != b; // true
let isStrictlyEqual = a === b; // false (different data types)
let isStrictlyNotEqual = a !== b; // true

// Logical Operators
let isRaining = true;
let isSunny = false;
let canGoOut = !isRaining && isSunny; // false

// Bitwise Operators
let p = 5, q = 3;
let result = p & q; // 1 (bitwise AND)


// Ternary Operator
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor";

// String Operators
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"