async function logUserObjs() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok) {
      const userObjects = await response.json();
      console.log('userObjects:', userObjects);
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.error(err);
  }
}

logUserObjs();

async function logPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (response.ok) {
      const pokemon = await response.json();
      console.log('pokemon:', pokemon);
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.error(err);
  }
}

logPokemon();
