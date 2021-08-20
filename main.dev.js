"use strict";

// Get the user input and display it (from the buttons)
var display = document.querySelector(".display__text");
var operators = document.querySelectorAll(".operator");
var numbers = document.querySelectorAll(".number");
var clear = document.querySelector(".c__keypad");
var subtract = document.querySelector(".subtract__keypad");
var add = document.querySelector(".add__keypad");
var multiply = document.querySelector(".multiply__keypad");
var equals = document.querySelector(".equals__keypad");
var userInp = document.querySelector(".seven__keypad"); // add.addEventListener("click", (event) => {
//     display.innerHTML += event.target.value;
// });
// Displays the numbers
// const numberInput = numbers.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//     display.innerHTML += event.target.value;
//     });
// });
// Clear button

clear.addEventListener("click", function (event) {
  display.innerHTML = " ";
}); // Displays the operators
// operators.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//     display.innerHTML += event.target.value;
//     });
// });
// Stores 
// const 
//  when a number is put in and an operator is keyed in then store

var calculatedNum = 0;
var firstNum = 0;
var storedNum = 0; // Displays the numbers

var numberInput = numbers.forEach(function (button) {
  button.addEventListener("click", function (event) {
    display.innerHTML += event.target.value;
    firstNum = parseFloat(event.target.value);
  });
}); // Add operation

add.addEventListener("click", function (event) {
  display.innerHTML += event.target.value;
  storedNum = firstNum;
  firstNum = "";
}); // Equals operation

equals.addEventListener("click", function (event) {
  calculatedNum = parseFloat(firstNum) + storedNum;
  display.innerHTML = calculatedNum;
}); // store the number input displayed and button pushed
// calculate the 
// Output the answer