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
// // Clear button
// clear.addEventListener("click", (event) => {
//     display.innerHTML = " ";
//     firstNum = 0;
//     storedNum = 0;
// })
// Displays the operators
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
var storedNum = 0;
var operator = ""; // Clear button

var clearDisplay = clear.addEventListener("click", function (event) {
  display.innerHTML = " ";
  firstNum = 0;
  storedNum = 0;
}); // Displays the numbers

var numberInput = numbers.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // console.log(display.innerHTML);
    display.innerHTML += event.target.value;
    firstNum = parseFloat(display.innerHTML);
    console.log("The first no.: " + firstNum);
  });
}); // Add operation
// add.addEventListener("click", function (event) {
//     display.innerHTML += event.target.value;
//     storedNum = firstNum;
//     firstNum = "";
// });
// Equals operation

equals.addEventListener("click", function (event) {
  calculatedNum = parseFloat(firstNum) + storedNum;
  display.innerHTML = calculatedNum;
}); // have switch case for the operations then store it and pass it in the equals function

var operatorInput = operators.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // display.innerHTML = event.target.value;
    operator = event.target.value; // button.classList.add("active");

    storedNum = firstNum;
    console.log("The stored no.: " + storedNum);
    firstNum = "";
    display.innerHTML = "";
  });
});
equals.addEventListener("click", function (event) {
  switch (operator) {
    case "+":
      console.log("The first no. is " + firstNum);
      console.log("The second no. is " + storedNum);
      calculatedNum = storedNum + firstNum;
      display.innerHTML = calculatedNum;
      break;

    case "-":
      console.log("The first no. is " + firstNum);
      console.log("The second no. is " + storedNum);
      calculatedNum = storedNum - firstNum;
      display.innerHTML = calculatedNum;
      break;

    case "*":
      console.log("The first no. is " + firstNum);
      console.log("The second no. is " + storedNum);
      calculatedNum = firstNum * storedNum;
      display.innerHTML = calculatedNum;
      break;

    case "/":
      console.log("The first no. is " + firstNum);
      console.log("The second no. is " + storedNum);
      calculatedNum = storedNum / firstNum; // returns decimal 

      display.innerHTML = calculatedNum;
      break;
  }
}); // store the number input displayed and button pushed
// calculate the 
// Output the answer