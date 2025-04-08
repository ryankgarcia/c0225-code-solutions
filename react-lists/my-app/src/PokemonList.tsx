export type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

// create a type Props with the property pokedex: and its type as Pokemon[]

// pass in pokedex as a Prop in your component. and give it a type of :Props

// return an unordered list with individual li's with the pokemon's name inside of curly braces

// do this using the map method (which accepts a function as its argument)

// (p) represents the function and ' => ' represents return.. we want to return individual li's
// so we add li elements and inside those li's we want {p.name} which is the pokemon's name

// last, we include a key for each pokemon to show each one has a unique identifier, and we include that inside
// the li element of each pokemon

export function PokemonList({ pokedex }: Props) {
  return (
    <ul>
      {pokedex.map((p) => (
        <li key={p.number}>{p.name}</li>
      ))}
    </ul>
  );
}
