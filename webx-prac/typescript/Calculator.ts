import * as readlineSync from "readline-sync";

let num1: number = readlineSync.questionFloat("Enter First Number: ");
let num2: number = readlineSync.questionFloat("Enter Second Number: ");

console.log("Select Operation: ");
console.log("1. Addition (+)");
console.log("2. Subtraction (-)");
console.log("3. Multiplication (*)");
console.log("4. Division (/)");

let operation: number = readlineSync.questionInt("Enter your choice (1-4): ");

let result: number;

switch (operation) {
  case 1:
    result = num1 + num2;
    console.log("Result: " + result);
    break;
  case 2:
    result = num1 - num2;
    console.log("Result: " + result);
    break;
  case 3:
    result = num1 * num2;
    console.log("Result: " + result);
    break;
  case 4:
    result = num1 / num2;
    console.log("Result: " + result);
    break;
  default:
    console.log("Choose a valid operation (1-4).");
}
