import { chooseUser } from '../handlers/choose-user.js';

export const fetchUser = (id = '') => {
    document.getElementById(id).addEventListener('click', chooseUser);
};
