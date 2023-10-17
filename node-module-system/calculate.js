import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , n1, operator, n2] = process.argv;

const num1 = Number(n1);
const num2 = Number(n2);

if (isNaN(num1)) {
  console.error('Not a number', n1);
  process.exit(1); // The 1 throws the error and shows an x in the console rather than a blue dot
}
if (isNaN(num2)) {
  console.error('Not a number', n2);
  process.exit(1); // The 1 throws the error and shows an x in the console rather than a blue dot
}

let result;

switch (operator) {
  case 'plus':
  case '+':
    result = add(num1, num2);
    break;
  case 'minus':
  case '-':
    result = subtract(num1, num2);
    break;
  case 'times':
  case '*':
    result = multiply(num1, num2);
    break;
  case 'over':
  case '/':
    result = divide(num1, num2);
    break;
  default:
    result = `Unknown operator ${operator}`;
    process.exit(1); // The 1 throws the error and shows an x in the console rather than a blue dot
    console.log(result);
}

// why do you need to write 1?
