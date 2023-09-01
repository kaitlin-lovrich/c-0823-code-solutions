/* exported getKeys */
function getKeys(object) {
  const result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
