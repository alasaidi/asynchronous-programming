import { renderTodos } from './render-todos.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderUser = (user = {}, todos = []) => {
    const container = document.createElement('div');
    container.id = `user-${user.id}`;

    const postId = document.createElement('h1');
    postId.innerHTML = user.username;
    container.appendChild(postId);

    const userName = document.createElement('p');
    userName.innerHTML = `user name: ${user.name}`;
    container.appendChild(userName);

    const userEmail = document.createElement('p');
    userEmail.innerHTML = `user email: ${user.email}`;
    container.appendChild(userEmail);

    const renderedTodos = todos.map(renderTodos).reduce((all, next) => {
        all.appendChild(next);
        return all;
    }, document.createElement('div'));
    container.appendChild(renderedTodos);

    return container;
};
