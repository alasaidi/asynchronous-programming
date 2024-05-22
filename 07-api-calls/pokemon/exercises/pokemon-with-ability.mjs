import { ORIGIN } from '../config.js';

import 'whatwg-fetch';

export const pokemonWithAbility = async (ability = '') => {
  // --- generate and declare your resource's URL ---
  const URL = `${ORIGIN}/ability/${ability}`;

  // --- fetch the API data (this works!) ---
  const encodedURL = encodeURI(URL);

  try {
    const response = await fetch(encodedURL);

    if (!response.ok) {
      const message = response.statusText
        ? `${response.status}: ${response.statusText}\n-> ${URL}`
        : `HTTP error! status: ${response.status}\n-> ${URL}`;
      throw new Error(message);
    }

    const data = await response.json();
    const pokemonList = list(data);
    return pokemonList;
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
};

const list = (data) => {
  const pokemon = data.pokemon.map(({ pokemon }) => ({
    name: pokemon.name,
    url: pokemon.url,
  }));
  return pokemon;
};
