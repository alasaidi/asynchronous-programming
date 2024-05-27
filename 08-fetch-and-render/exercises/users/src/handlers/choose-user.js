import { typicodeResource } from '../api-calls/typicode-resource.js';
import { renderUser } from '../components/render-user.js';
// const state = {
//     user: [],
//     Todo: [],
// };
export const chooseUser = async (event) => {
    const userId = event.target.form.userId.value;

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const userPromise = typicodeResource('users', userId);
        const todosPromise = typicodeResource('users', userId, 'todos');

        const [user, todos] = await Promise.all([userPromise, todosPromise]);
        // state.user = user;
        // state.todos = todos;
        // console.log(state);
        const userElement = renderUser(user, todos);

        root.appendChild(userElement);
    } catch (err) {
        console.error(err);
    }
};
