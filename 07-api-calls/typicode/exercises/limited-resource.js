import { ORIGIN } from '../config.js';
import 'whatwg-fetch';

/**
 * Fetches a certain number of entries from one resource type.
 *
 * @async
 * @param {string} [resourceType=''] - The resource type to fetch.
 * @param {number} [limit=1] - The number of items to request.
 * @returns {Promise<array>} A promise that resolves to an array of resources with length `limit`.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const limitedResource = async (resourceType = '', limit = 3) => {
    // --- generate and declare your resource's URL ---
    const URL = `${ORIGIN}/${resourceType}?_limit=${limit}`;

    // --- fetch the API data (this works!) ---
    const encodedURL = encodeURI(URL);
    try {
        const response = await fetch(encodedURL);

        // --- throw an error if the response is not ok (this works!) ---
        if (!response.ok) {
            const message = response.statusText
                ? `${response.status}: ${response.statusText}\n-> ${URL}`
                : `HTTP error! status: ${response.status}\n-> ${URL}`;
            throw new Error(message);
        }
        /* --- parse the data if the response was ok (this works!) ---*/

        const data = await response.json();
        // --- return the final data ---
        return data;
        // console.log(data);
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
};
// await limitedResource('photos', 3);
// await limitedResource('todos', 4);
