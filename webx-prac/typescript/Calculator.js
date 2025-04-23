"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionFloat("Enter First Number: ");
var num2 = readlineSync.questionFloat("Enter Second Number: ");
console.log("Select Operation: ");
console.log("1. Addition (+)");
console.log("2. Subtraction (-)");
console.log("3. Multiplication (*)");
console.log("4. Division (/)");
var operation = readlineSync.questionInt("Enter your choice (1-4): ");
var result;
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
