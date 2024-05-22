import { ORIGIN } from '../config.js';
import 'whatwg-fetch';
/**
 * Returns a selected array of pokemon in order.
 *
 * @async
 * @param {number} [limit=1] - The number of pokemon to return.
 * @param {number} [offset=0] - How far down the order of pokemon to begin the list.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonInOrder = async (limit = 10, offset = 10) => {
    // --- generate and declare your resource's URL ---
    // docs: https://pokeapi.co/docs/v2#resource-listspagination-section
    const URL = `${ORIGIN}/ability/?limit=${limit}&offset=${offset}`;
    const encodedURL = encodeURI(URL);
    try {
        // --- fetch the API data (this works!) ---

        const response = await fetch(encodedURL);
        if (!response.ok) {
            const message = response.statusText
                ? `${response.status}: ${response.statusText}\n-> ${URL}`
                : `HTTP error! status: ${response.status}\n-> ${URL}`;
            throw new Error(message);
        }
        const data = await response.json();

        // --- process the fetched data (if necessary) ---
        //  you do not need to use `await` below this comment
        //  you can refactor this to a separate logic function and test it
        const pokemon = list(data);
        /* --- parse the data if the response was ok (this works!) ---*/

        // --- return the final data ---
        return pokemon;
        // console.log(pokemon);
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
