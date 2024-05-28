import { fetchUrlBase } from '../api-calls/wiki-fetch-url.js';
import { renderSearchOutput } from '../compnents/render-search-output.js';

export const inputUrlValue = async (event) => {
    const seachValue = event.currentTarget.previousElementSibling.value;
    const wikiFetchUrl = await fetchUrlBase(seachValue);
    const root = document.getElementById('output');
    root.innerHTML = '';

    renderSearchOutput(wikiFetchUrl, root);
};
