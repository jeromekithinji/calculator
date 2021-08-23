// Get the user input and display it (from the buttons)
const display = document.querySelector(".display__text");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".c__keypad");
const subtract = document.querySelector(".subtract__keypad");
const add = document.querySelector(".add__keypad");
const multiply = document.querySelector(".multiply__keypad");
const equals = document.querySelector(".equals__keypad");
const userInp = document.querySelector(".seven__keypad");


// add.addEventListener("click", (event) => {
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
let calculatedNum = 0;
let firstNum = 0; 
let storedNum = 0;
let operator = "";

// Clear button
const clearDisplay = clear.addEventListener("click", (event) => {
    display.innerHTML = " ";
    firstNum = 0;
    storedNum = 0;
})

// Displays the numbers
const numberInput = numbers.forEach(function (button) {
    button.addEventListener("click", function (event) {
    // console.log(display.innerHTML);
    display.innerHTML += event.target.value;
    firstNum = parseFloat(display.innerHTML);
    console.log("The first no.: " + firstNum);
    });
});


// Add operation
// add.addEventListener("click", function (event) {
//     display.innerHTML += event.target.value;
//     storedNum = firstNum;
//     firstNum = "";
// });

// Equals operation
equals.addEventListener("click", function (event) {
    calculatedNum = parseFloat(firstNum) + storedNum;
    display.innerHTML = calculatedNum;
});

// have switch case for the operations then store it and pass it in the equals function

const operatorInput = operators.forEach(function (button) {
    button.addEventListener("click", function (event) {
    // display.innerHTML = event.target.value;
    operator = event.target.value;
    storedNum = firstNum;
    console.log("The stored no.: " + storedNum);
    firstNum = "";
    display.innerHTML = "";
    });
});



equals.addEventListener("click", function (event) {
    switch(operator){
        case("+"): 
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum);
            calculatedNum = storedNum + firstNum; 
            display.innerHTML = calculatedNum;
            break;
        case("-"):
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum); 
            calculatedNum = storedNum - firstNum; 
            display.innerHTML = calculatedNum;
            break;
        case("*"):
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum); 
            calculatedNum = firstNum * storedNum; 
            display.innerHTML = calculatedNum;
            break;
        case("/"): 
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum);
            calculatedNum = storedNum / firstNum; // returns decimal 
            display.innerHTML = calculatedNum;
            break;
    }
});




// store the number input displayed and button pushed

// calculate the 
// Output the answer