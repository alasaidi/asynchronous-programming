export const info = (user) => {
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

    return RowColMd;
};
