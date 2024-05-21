import { ORIGIN } from '../config.js';
import fetch from 'node-fetch';

/**
 * Returns an array of all Pokemon with a specific ability.
 *
 * @async
 * @param {string} [ability=''] - The ability to request.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonWithAbility = async (ability = '') => {
    // --- generate and declare your resource's URL ---
    // docs: https://pokeapi.co/docs/v2#abilities
    const URL = `${ORIGIN}/ability/${ability}`;
    try {
        // --- fetch the API data (this works!) ---
        const encodedURL = encodeURI(URL);
        const response = await fetch(encodedURL);
        /* --- parse the data if the response was ok (this works!) ---*/
        const data = await response.json();

        // --- process the fetched data (if necessary) ---
        //  you do not need to use `await` below this comment
        //  you can refactor this to a separate logic function and test it
        const pokemon = data.pokemon.map(({ pokemon }) => ({
            name: pokemon.name,
            url: pokemon.url,
        }));

        // --- return the final data ---
        console.log(pokemon);
        // return pokemon;
    } catch {
        // --- throw an error if the response is not ok (this works!) ---

        const message = response.statusText
            ? `${response.status}: ${response.statusText}\n-> ${URL}`
            : `HTTP error! status: ${response.status}\n-> ${URL}`;
        throw new Error(message);
    }
};
await pokemonWithAbility('volt-absorb');
