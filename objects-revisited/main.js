const business = {
  opens: '9am',
  closes: '9pm',
  totalEmployees: 3,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    kaitlin: {
      position: 'President',
      daysOfWeekWorking: ['T', 'W', 'Th'],
    },
    kathy: {
      position: 'Vice President',
      daysOfWeekWorking: ['M', 'T', 'W'],
    },
    julie: {
      position: 'CEO',
      daysOfWeekWorking: ['W', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  const daysOpen = business.daysOpen;
  daysOpen.unshift('S');
  daysOpen.push('Sa');
  business.employees.kaitlin.daysOfWeekWorking.unshift('S');
  business.employees.kaitlin.daysOfWeekWorking.push('Sa');
  business.employees.kathy.daysOfWeekWorking.unshift('S');
  business.employees.kathy.daysOfWeekWorking.push('Sa');
  business.employees.julie.daysOfWeekWorking.unshift('S');
  business.employees.julie.daysOfWeekWorking.push('Sa');
}
addWeekends();

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    for (let i = 0; i < 4; i++) {
      business.employess[xhr.response[i].name] = { position: 'Lacky' };
      console.log(xhr.response[i].name);
    }
    console.log(xhr.response);
  });
  xhr.send();
}
addEmployees();

console.log('business:', business);
