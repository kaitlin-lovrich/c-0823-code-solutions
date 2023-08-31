/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// 1.
// Create index.html
// 2.
// Read about while loops
// 3.
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
// 4.
// Test ^ in console
// 5.
// Review the += addition-assignment operator in the MDN Web docs.
// 6.
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
// 7.
// Test ^ in console
// 8.
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count < times + 1) {
    repeated += word + ' ';
    count++;
  }
  return repeated;
}
// 9.
// Test ^ in console
// 10.
// Read about foor loops
// 11.
// Read about the ++ increment operator on MDN.
// 12.
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
// 13.
// Test ^ in console
// 14.
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
// 15.
// Test ^ in console
// 16.
// Read about for in loops
// 17.
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
// 18.
// Test ^ in console
// 19.
function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
// 20.
// Test ^ in console
