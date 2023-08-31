/* exported getIndexes */
function getIndexes(array) {
  const result = [];
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    result.push(num);
    num++;
  }
  return result;
}
