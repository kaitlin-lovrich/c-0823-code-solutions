/* exported capitalize */
function capitalize(word) {
  const first = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  const cap = first + restOfWord;
  return cap;
}
