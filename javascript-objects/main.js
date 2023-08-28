const student = {
  firstName: 'Katlin',
  lastName: 'Lovrich',
  age: 27,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Barber';
console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Rivian',
  model: 'R1T',
  year: 2023,
};

vehicle['color'] = 'pink';
vehicle['isConvertable'] = false;
console.log("vehicle['color']:", vehicle['color']);
console.log("vehicle['isConvertable']", vehicle['isConvertable']);
console.log('vehicle object:', vehicle);

const pet = {
  name: 'Rise',
  type: 'horse',
};

delete pet.name;
delete pet.type;
console.log('pet object:', pet);
