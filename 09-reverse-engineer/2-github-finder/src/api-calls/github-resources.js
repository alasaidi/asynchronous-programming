import { Base_url } from '../config.js';

export const githubResources = async (userName = '') => {
    const url = `${Base_url}${userName}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `HTTP error! status: ${response.status}\n-> ${URL}`,
            );
        }
        const resource = await response.json();
        return resource;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
};
