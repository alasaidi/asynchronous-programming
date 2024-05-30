import { fetchUrlBase } from '../api-calls/wiki-fetch-url.js';
import { renderSearchOutput } from '../compnents/render-search-output.js';

export const inputUrlValue = async (event) => {
    const searchValue = event.currentTarget.previousElementSibling.value;
    const root = document.getElementById('output');
    root.innerHTML = '';

    try {
        const wikiFetchUrl = await fetchUrlBase(searchValue);
        renderSearchOutput(wikiFetchUrl, root);
    } catch (err) {
        console.error(err);
    }
};
