export const profile = (user) => {
    const Row = document.createElement('div');
    Row.classList.add('col-md-3');
    const rowImg = document.createElement('img');
    rowImg.classList.add('img-fluid', 'mb-2');
    rowImg.src = user.avatar_url;
    Row.appendChild(rowImg);
    const profileUrl = document.createElement('a');
    profileUrl.classList.add('btn', 'btn-primary', 'btn-block', 'mb-4');
    profileUrl.href = `https://github.com/${user.login}`;
    profileUrl.setAttribute('target', 'blank');
    profileUrl.textContent = 'view Profile';
    Row.appendChild(profileUrl);
    return Row;
};
