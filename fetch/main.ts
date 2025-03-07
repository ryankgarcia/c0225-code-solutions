interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchUserData(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as UserData[];
    console.log('userData:', data);
  } catch (error) {
    console.error('fetch failed!', error);
  }
}

async function fetchPokemonData(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const data = (await response.json()) as Pokemon;
    console.log('Pokemon Data:', data);
  } catch (error) {
    console.error('fetch failed!', error);
  }
}

fetchUserData();
fetchPokemonData();
