/* exported truncate */
function truncate(length, string) {
  const newString = string.substring(0, length) + '...';
  return newString;
}

// up to index 7 if length = 8
// .substring(inclusive, exclusive)
