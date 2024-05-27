import { inputUrlValue } from '../handlers/wikiHandler.js';

export const fetchWiki = (id = '') => {
    document.getElementById(id).addEventListener('click', inputUrlValue);
};
