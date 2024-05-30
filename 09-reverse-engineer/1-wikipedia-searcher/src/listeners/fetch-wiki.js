import { inputUrlValue } from '../handlers/wiki-handler.js';

export const fetchWiki = (id = '') => {
    document.getElementById(id).addEventListener('click', inputUrlValue);
};
