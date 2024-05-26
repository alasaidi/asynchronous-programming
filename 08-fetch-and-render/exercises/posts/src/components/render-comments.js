/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderComments = (comments = {}) => {
    const container = document.createElement('div');
    container.id = 'comments-' + comments.id;
    container.className = 'comment';

    const commentEmail = document.createElement('h2');
    commentEmail.innerHTML = `comment by: ${comments.email}`;
    container.appendChild(commentEmail);

    return container;
};
