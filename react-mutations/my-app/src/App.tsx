import { useState } from 'react';
import { Pokemon, PokemonList } from './PokemonList';

const initialPokedex: Pokemon[] = [
  { id: 1, name: 'Bulbasaur' },
  { id: 4, name: 'Charmander' },
  { id: 7, name: 'Squirtle' },
  { id: 25, name: 'Pikachu' },
  { id: 39, name: 'Jigglypuff' },
];

const addPokemon = { id: 40, name: 'Fakemon' };
const updatePokemon = { id: 25, name: 'Peek-a-boo' };
const removePokemon = { id: 4, name: 'Charmander' };

export function App() {
  const [pokedex, setPokedex] = useState(initialPokedex); // this is state

  function handleAdd(toAdd: Pokemon): void {
    const newArr = [...pokedex, toAdd];
    setPokedex(newArr);
  }

  function handleUpdate(toUpdate: Pokemon): void {
    const newArr = pokedex.map((p) => (p.id === toUpdate.id ? toUpdate : p));
    setPokedex(newArr);
  }

  function handleRemove(toRemove: number): void {
    const newArr = pokedex.filter((r) => (r.id !== toRemove ? true : false));
    setPokedex(newArr);
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={() => handleAdd(addPokemon)}>Add</button>
      <button onClick={() => handleUpdate(updatePokemon)}>Update</button>
      <button onClick={() => handleRemove(removePokemon.id)}>Remove</button>
    </div>
  );
}
