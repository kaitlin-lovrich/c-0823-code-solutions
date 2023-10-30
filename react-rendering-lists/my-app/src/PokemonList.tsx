type PokemonListProps = {
  pokedex: Pokemon[]; // I had previously named Pokemon, Pokedex. I changed it to show it doesnt have to be the same as the prop
};

type Pokemon = {
  number: string;
  name: string;
};

export default function PokemonList({ pokedex }: PokemonListProps) {
  const pokedexList = pokedex.map((pokemon) => {
    return <li key={pokemon.number}>{pokemon.name}</li>;
  });

  return <ul>{pokedexList}</ul>;
}
