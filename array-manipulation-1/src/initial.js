/* exported initial */
function initial(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      result.push(array[i]);
    }
  }
  return result;
}
