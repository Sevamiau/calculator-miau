// const num1 = 
// const num2 =
const operator = document.getElementsByClassName('operator-button');
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;

}

function clearDisplay(){
    display.value = "";

}


function add(a, b) {
    return a + b;
}


function substract(a,b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}



function operate(operator, num1, num2) {

    if (operator === '+') {
        return add(num1 + num2);
    } else if (operator === '-') {
        return substract(num1, num2);
    } else if(operator === '*') {
        return multiply(num1 * num2);
    } else if (operator === '/') {
        return divide(num1 / num2);
    } 
}