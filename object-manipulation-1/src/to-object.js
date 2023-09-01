/* exported toObject */
function toObject(keyValuePair) {
  const resultObj = {};
  resultObj[keyValuePair[0]] = keyValuePair[1];
  return resultObj;
}

// Doesnt work
// function toObject(keyValuePair){
//   const  resultObj = {};
//   for (let i = 0; i < keyValuePair.length; i ++){
//     resultObj[keyValuePair[i]] = keyValuePair[i + 1]
//   }
// };

// Doesnt work
// function toObject(keyValuePair){
//   const resultObj = {
//     keyValuePair[0] : keyValuePair[1],
//   };
//   return resultObj;
// };

// works
// function toObject(keyValuePair){
//   const prop = keyValuePair[0];
//   const resultObj = {};
//   resultObj[prop] = keyValuePair[1];
//   return resultObj;
// };

// Doesnt work
// function toObject(keyValuePair){
//   const prop = keyValuePair[0];
//   const resultObj = {
//     prop : keyValuePair[1],
//   };
//   return resultObj;
// };

// const prop = 'prop-string';
// const value = 'value-string'
// const obj = {
//   property : value,
// };
//  console.log(obj);
// console.log(obj.property)

// Not allowed?
// console.log(obj[property])
