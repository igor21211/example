import { x, y, operator } from "./components/constants.js";
import Calculator from "./components/calculator.js";

if (isNaN(x) || isNaN(y) || !operator) {
  console.error(
    "Invalid input. Please provide valid numeric values and an operator."
  );
} else {
  const result = new Calculator(x, y, operator);
  console.log(result.result());
}

/* example;
node index.js 10 5 '+'
node index.js 10 5 '*'
node index.js 10 5 '/'
node index.js 10 5 '-'

wrong example

node index.js 10   '-'
node index.js    5 '-'
node index.js 11 5 '?'
 */
