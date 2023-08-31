/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];
  for (const i of numbers) {
    if (i % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}
