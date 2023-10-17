import takeAChance from './take-a-chance.js';

takeAChance('Kaitlin')
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject.message);
  });
