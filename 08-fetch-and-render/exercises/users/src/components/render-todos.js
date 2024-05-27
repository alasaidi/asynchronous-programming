/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderTodos = (todos = {}) => {
    const container = document.createElement('div');
    container.id = 'todo-' + todos.id;
    container.className = 'todo';

    const checkbx = document.createElement('input');
    checkbx.setAttribute('type', 'checkbox');
    checkbx.checked = todos.completed;
    container.appendChild(checkbx);
    const codeTodos = document.createElement('code');
    codeTodos.innerHTML = todos.title;
    container.appendChild(codeTodos);

    return container;
};
