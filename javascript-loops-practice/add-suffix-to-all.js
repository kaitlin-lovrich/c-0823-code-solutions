/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const result = [];
  for (const word of words) {
    result.push(word + suffix);
  }
  return result;
}
