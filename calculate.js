let num1 = Number(prompt("Enter first number"));
let operator = prompt("Enter arithmetic operator e.g    +    -    /    *");
let num2 = Number(prompt("Enter second number"));
let result;

if (operator === "+") {
  alert((result = num1 + num2));
} else if (operator === "-") {
  alert((result = num1 - num2));
} else if (operator === "/") {
  alert((result = num1 / num2));
} else if (operator === "*") {
  alert((result = num1 * num2));
}
