/* exported filterOutStrings */
function filterOutStrings(values) {
  const result = [];
  for (const i of values) {
    if (typeof i !== 'string') {
      result.push(i);
    }
  }
  return result;
}
