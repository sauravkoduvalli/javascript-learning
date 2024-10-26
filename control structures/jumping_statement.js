/* --- Jumping Statements --- */

/*
    - Jumping statements allow you to control the flow of execution within a loop or conditional block. 
    - They are used to break out of a loop or skip to the next iteration.

    1) break Statement: 
        - Immediately terminates the innermost loop or switch statement.
        - Often used to exit a loop prematurely when a certain condition is met.
    2) continue Statement:
        - Skips the current iteration of a loop and moves to the next iteration.
        - Useful for skipping certain iterations based on a specific condition.
*/

// break statement
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i reaches 5
  }
  console.log(i);
}

// continue statement
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue; // Skip even numbers
  }
  if (numbers[i] > 5) {
    break; // Stop processing after 5
  }
  console.log(numbers[i]);
}
