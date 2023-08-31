/* exported tail */
function tail(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}
