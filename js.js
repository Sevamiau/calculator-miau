const operators = document.querySelectorAll('.operator-button');
const buttons = document.querySelectorAll('.number-button');
const display = document.getElementById('display');
const clear = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals-button');

let secondNumber = null;
let firstNumber = null;
let operator = null;
let currentDisplayValue = '0';
let waitingForSecondNumber = false;



for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    const clickedNumber = buttons[i].textContent;

    if (waitingForSecondNumber) {
      
      if (display.textContent === '0' || display.textContent === firstNumber ) {
        display.textContent = clickedNumber;
      } else {
        display.textContent += clickedNumber;
      }
      secondNumber = display.textContent;
    } else {
      if (display.textContent === '0') {
        display.textContent = clickedNumber;
      } else {
        display.textContent += clickedNumber;
      }
      firstNumber = display.textContent;
    }
  });
}


equalsButton.addEventListener('click', () => {
  if (firstNumber !== null && operator !== null && display.textContent !== null) {
    secondNumber = display.textContent;

    if (operator === '/' && parseFloat(secondNumber) === 0) {
      updateDisplay('Error: Div by 0');
      firstNumber = null;
      operator = null;
      secondNumber = null;
      waitingForSecondNumber = false;

    } else {
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      updateDisplay(result);
    }
  }
})

operators.forEach(opButton => {
  opButton.addEventListener('click', () => {
    const clickedOperator = opButton.textContent;

    if (firstNumber !== null && operator !== null && display.textContent !== firstNumber) {

      secondNumber = display.textContent;

      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      updateDisplay(result);
      firstNumber = result;
      secondNumber = null;

    } else if (firstNumber === null && display.textContent !== '0') {
      
        firstNumber = display.textContent;

    } else if ( firstNumber !== null && operator === null) {
      
    }

    operator = clickedOperator;
    waitingForSecondNumber = true;

    
  })
})


clear.addEventListener('click', () => {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  currentDisplayValue = '0'; 
  waitingForSecondNumber = false;
  updateDisplay('0'); 
});

function updateDisplay(value) {
  currentDisplayValue = String(value);
  display.textContent = currentDisplayValue;
}

function add(a, b) {
return a + b ;
}
function substract(a, b) {
return a - b;
}
function multiply(a , b) {
return a * b;
}
function divide(a, b) {
return a / b;
}


function operate(operator, firstNumber, secondNumber){
    if (operator === '+'){
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return substract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}
