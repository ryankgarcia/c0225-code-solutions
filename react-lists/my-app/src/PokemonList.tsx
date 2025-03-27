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

// (p) represents the function and => represents return.. we want to return individual li's
// so we add li elements and inside those li's we want p.name which is the pokemon's name

export function PokemonList({ pokedex }: Props) {
  return (
    <ul>
      {pokedex.map((p) => (
        <li>{p.name}</li>
      ))}
    </ul>
  );
}
