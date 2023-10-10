const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((element) => console.log(element));
values.forEach((element, index) => {
  const reverseIndex = values.length - 1 - index;
  console.log(values[reverseIndex]);
});
