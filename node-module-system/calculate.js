import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

switch (process.argv[3]) {
  case 'plus':
  case '+':
    console.log(add(process.argv[2], process.argv[4]));
    break;
  case 'minus':
  case '-':
    console.log(subtract(process.argv[2], process.argv[4]));
    break;
  case 'times':
  case '*':
    console.log(multiply(process.argv[2], process.argv[4]));
    break;
  case 'over':
  case '/':
    console.log(divide(process.argv[2], process.argv[4]));
    break;
}
