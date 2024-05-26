import { renderComments } from './render-comments.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderPost = (post = {}, comments = []) => {
    const container = document.createElement('div');
    container.id = `post-${post.id}`;

    const postId = document.createElement('h1');
    postId.innerHTML = post.title;
    container.appendChild(postId);

    const postCode = document.createElement('code');
    postCode.innerHTML = `posted by user: ${post.id}`;
    container.appendChild(postCode);

    const postBody = document.createElement('p');
    postBody.innerHTML = post.body;
    container.appendChild(postBody);

    const renderedComments = comments
        .map(renderComments)
        .reduce((all, next) => {
            all.appendChild(next);
            return all;
        }, document.createElement('div'));
    container.appendChild(renderedComments);

    return container;
};
