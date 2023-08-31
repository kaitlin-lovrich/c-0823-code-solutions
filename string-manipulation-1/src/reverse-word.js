/* exported reverseWord */
function reverseWord(word) {
  let reversedWord = '';
  for (let i = word.length - 1; i > -1; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
