type PokemonListProps = {
  pokedex: Pokedex[];
};

type Pokedex = {
  number: string;
  name: string;
};

export default function PokemonList({ pokedex }: PokemonListProps) {
  const pokedexList = pokedex.map((pokemon) => {
    return <li key={pokemon.number}>{pokemon.name}</li>;
  });

  return <ul>{pokedexList}</ul>;
}
