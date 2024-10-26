/* --- Control Structures in JavaScript --- */

/*
    - Control structures allow you to control the flow of execution in your JavaScript code. 
    - They enable you to make decisions, repeat actions, and execute specific code blocks based on certain conditions.

    Categorise into 3 catergories
    1) Conditional Statements:
        - Conditional statements allow you to execute different code blocks based on specific conditions. 
        - They help you make decisions within your program's flow.

        1) if statement: Executes a block of code if a given condition is true.
        2) if-else statement: Executes one block of code if a condition is true, and another if it's false.
        3) if-else-if statement: Allows you to check multiple conditions and execute different code blocks based on the first true condition.
        4) switch statement: A switch statement is a control flow statement that allows you to execute different code blocks based on the value of an expression. 

    2) Iterative statements:
        - Iterative statements allow you to repeat a block of code multiple times.

        1) For Loop: Repeats a block of code a specific number of times.
        2) While Loop: Repeats a block of code as long as a specified condition is true.
        3) Do-While Loop: Executes a block of code at least once, and then repeats as long as a specified condition is true.
*/

// if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// if-else statement
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine.");
}

// if-else-if statement
let grade = 85;
if (grade >= 90) {
  console.log("Excellent!");
} else if (grade >= 80) {
  console.log("Very Good");
} else if (grade >= 70) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}

// switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("Weekend is here!");
    break;
  default:
    console.log("Midweek blues...");
}

// for loop example
// initialise a variable with starting value 0.
// loop will execute until the value of i is less than 5 by incremneting value by 1 and print the value
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// while loop example
// initialise a variable with value 0.
// loop will execute the block of statement whne the value of varible is less than 5.
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// do-while loop example
// initialise a variable with value 0.
// execute the block only once and increment the value by one each time checking the condition value is less than 5.
let i = 0;
do {
    console.log("i:", i);
    i++;
} while (i < 5);
