/* exported capitalizeWord */
function capitalizeWord(word) {
  const first = word[0].toUpperCase();
  const rest = word.substring(1).toLowerCase();
  let newWord = '';
  const js = /[javascript]/;

  if (js.test(word.toLowerCase())) {
    newWord += 'JavaScript';
    return newWord;
  } else {
    newWord += first + rest;
    return newWord;
  }
}
// const first = word[0].toUpperCase();
// const rest = word.substring(1).toLowerCase();
