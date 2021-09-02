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

// When a number is put in and an operator is keyed in then store
let calculatedNum = 0;
let firstNum = 0; 
let storedNum = 0;
let operator = "";

// Clear button functionality
const clearDisplay = clear.addEventListener("click", (event) => {
    display.innerHTML = " ";
    firstNum = 0;
    storedNum = 0;
})

// Displays the numbers when clicked
const numberInput = numbers.forEach(function (button) {
    button.addEventListener("click", function (event) {
    // console.log(display.innerHTML);
    display.innerHTML += event.target.value;
    firstNum = parseFloat(display.innerHTML);
    console.log("The first no.: " + firstNum);
    });
});

// Reads the operators
const operatorInput = operators.forEach(function (button) {
    button.addEventListener("click", function (event) {
    // display.innerHTML = event.target.value;
    operator = event.target.value;
    button.classList.add("active");
    storedNum = firstNum;
    console.log("The stored no.: " + storedNum);
    firstNum = "";
    display.innerHTML = "";
    });
});


// Calcualtes the expression
equals.addEventListener("click", function (event) {
    switch(operator){
        case("+"): 
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum);
            calculatedNum = storedNum + firstNum; 
            display.innerHTML = calculatedNum;
            firstNum = calculatedNum;
            break;
        case("-"):
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum); 
            calculatedNum = storedNum - firstNum; 
            display.innerHTML = calculatedNum;
            firstNum = calculatedNum;
            break;
        case("*"):
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum); 
            calculatedNum = firstNum * storedNum; 
            display.innerHTML = calculatedNum;
            firstNum = calculatedNum;
            break;
        case("/"): 
            console.log("The first no. is " + firstNum);
            console.log("The second no. is " + storedNum);
            calculatedNum = storedNum / firstNum; 
            display.innerHTML = calculatedNum;
            firstNum = calculatedNum;
            break;
    }
});



































// Add validation like 2 decimals, having a zero in the begining of a number
// ability to change the operators when it's already been clicked
// Add a xero in the beginning
// add a shake feature if it's wrong
// add some sort of animation
// keyboard input apart from the touch input
// add a del button to remove one number or operator (screenInput.innerHTML = screenInput.innerText.slice(0, -1);)