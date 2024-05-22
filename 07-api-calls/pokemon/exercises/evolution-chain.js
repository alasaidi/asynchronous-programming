import { ORIGIN } from '../config.js';
import 'whatwg-fetch';

/**
 * Returns an array of pokemon in an evolution chain.
 *
 * @async
 * @param {number} [chainId=1] - The evolution chain's id to fetch.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const evolutionChain = async (chainId = 1) => {
    // --- generate and declare your resource's URL ---
    // docs: https://pokeapi.co/docs/v2#evolution-section
    const URL = `${ORIGIN}/evolution-chain/${chainId}`;

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
        /* --- parse the data if the response was ok (this works!) ---*/
        const data = await response.json();

        // --- process the fetched data (if necessary) ---
        //  you do not need to use `await` below this comment
        //  you can refactor this to a separate logic function and test it
        const pokemon = [];

        // Handle case where species is not present
        if (data.chain.species) {
            pokemon.push(data.chain.species); // Initial pokemon
        }

        // Use map for initial species if available
        pokemon.push(
            ...data.chain.evolves_to.map((evolve) => ({
                name: evolve.species.name,
                url: evolve.species.url,
            })),
        );

        // Check if there are more evolutions
        if (data.chain.evolves_to.length > 0) {
            // Recursive function to handle remaining evolutions (optional)
            // You can implement a recursive function here if needed
        }

        // --- return the final data ---
        return pokemon;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
};
