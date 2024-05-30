import { githubResources } from '../api-calls/github-resources.js';
import { renderUser } from '../components/render-user.js';

export const chooseUser = async (event) => {
    const searchValue = event.target
        .closest('.card-body')
        .querySelector('input').value;

    const root = document.getElementById('profile');
    root.innerHTML = '';

    try {
        const userResponse = await githubResources(searchValue);
        renderUser(userResponse, root);
    } catch (err) {
        console.error(err);
    }
};
