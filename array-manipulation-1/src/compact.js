/* exported compact */
function compact(array) {
  const result = [];
  for (const i of array) {
    if (
      i !== false &&
      i !== null &&
      Number.isNaN(i) === false &&
      i !== 0 &&
      i !== undefined &&
      i !== ''
    ) {
      result.push(i);
    }
  }
  return result;
}
