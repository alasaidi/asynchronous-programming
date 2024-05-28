export const renderUser = (user, root) => {
    console.log(user);
    const container = document.createElement('div');
    container.classList.add('card', 'card-body', 'mb-3');

    const containerRow = document.createElement('div');
    containerRow.classList.add('row');

    container.appendChild(containerRow);
    // creat the col md 9 row
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
    containerRow.appendChild(Row);
    // creat the col md 9 row
    const RowColMd = document.createElement('div');
    RowColMd.classList.add('col-md-9');
    const name = document.createElement('h3');
    name.innerHTML = user.name;
    const bio = document.createElement('small');
    bio.textContent = user.bio;
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    RowColMd.appendChild(name);
    RowColMd.appendChild(bio);
    RowColMd.appendChild(br1);
    RowColMd.appendChild(br2);
    containerRow.appendChild(RowColMd);
    // <span></span>
    const spanRepos = document.createElement('span');
    spanRepos.classList.add('badge', 'bg-primary');
    spanRepos.innerHTML = `Public Repos: ${user.public_repos}`;
    const spanFollowers = document.createElement('span');
    spanFollowers.classList.add('badge', 'bg-success');
    spanFollowers.innerHTML = `Public Repos: ${user.followers}`;
    RowColMd.appendChild(spanRepos);
    RowColMd.appendChild(document.createTextNode(' '));
    RowColMd.appendChild(spanFollowers);
    root.appendChild(container);
};
