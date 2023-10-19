// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    if (operation === '+') {
      return `${x} + ${y} = ${x + y}`;
    } else if (operation === '-') {
      return `${x} - ${y} = ${x - y}`;
    } else if (operation === '*') {
      return `${x} * ${y} = ${x * y}`;
    } else if (operation === '/') {
      return `${x} / ${y} = ${x / y}`;
    } else {
      console.log('Please enter a valid operation');
    }
}
// COLLECT FIRST NUMBER FROM USER
let x = parseInt(prompt('What is your first number?'));
// COLLECT SECOND NUMBER FROM USER
let y = parseInt(prompt('What is your second number?'));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt('What operation do you want to perform? Choose +, - , *, /');
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
window.alert(calculate(x, y, operation));