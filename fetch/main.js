"use strict";
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = (await response.json());
        console.log('userData:', data);
    }
    catch (error) {
        console.log('Error:', error);
    }
}
fetchUserData();
async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = (await response.json());
        console.log('Pokemon Data:', data);
    }
    catch (error) {
        console.log('Error:', error);
    }
}
fetchPokemonData();
