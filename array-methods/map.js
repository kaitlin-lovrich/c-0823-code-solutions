const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const map1 = prices.map((x) => {
  const priceObjects = {};
  priceObjects.price = x;
  priceObjects.salePrice = x / 2;
  return priceObjects;
});
console.log('Price Objects:', map1);

const map2 = prices.map((x) => `$${x.toFixed(2)}`);
console.log(map2);
