import { Base_url } from '../config.js';

export const fetchUrlBase = async (value = '') => {
    var params = {
        action: 'query',
        list: 'search',
        prop: 'info',
        format: 'json',
        srsearch: value,
        srlimit: '5',
        inprop: 'url',
        utf8: '',
        origin: '*',
    };

    let url = Base_url + '?';
    Object.keys(params).forEach(function (key) {
        url += '&' + key + '=' + params[key];
    });

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }
    const result = await response.json();

    return await result.query.search;
};
