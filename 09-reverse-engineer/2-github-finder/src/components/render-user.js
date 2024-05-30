import { info } from './render-info.js';
import { profile } from './render-profile.js';

export const renderUser = (user, root) => {
    const container = document.createElement('div');
    container.classList.add('card', 'card-body', 'mb-3');

    const containerRow = document.createElement('div');
    containerRow.classList.add('row');
    container.appendChild(containerRow);
    // create the col md 3 row

    const row = profile(user);
    containerRow.appendChild(row);

    // create the col md 9 row
    const rowColMd = info(user);
    containerRow.appendChild(rowColMd);

    root.appendChild(container);
};
