/* exported reverse */
function reverse(array) {
  const result = [];
  for (let i = array.length - 1; i > -1; i--) {
    result.push(array[i]);
  }
  return result;
}
