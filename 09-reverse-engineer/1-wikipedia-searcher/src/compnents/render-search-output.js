export const renderSearchOutput = (wiki = {}, root) => {
    for (let item of wiki) {
        const container = document.createElement('div');
        container.className = 'row';

        const titleLink = document.createElement('h3');

        const link = document.createElement('a');
        link.href = `https://www.example.com/${item.title}`;
        link.textContent = item.title;
        titleLink.appendChild(link);
        container.appendChild(titleLink);
        const para = document.createElement('p');
        para.innerHTML = item.snippet;
        container.appendChild(para);
        const fullArt = document.createElement('a');
        link.href = `https://www.example.com/${item.title}`;
        const btn = document.createElement('button');
        btn.textContent = 'view Full Artical';
        fullArt.appendChild(btn);
        container.appendChild(fullArt);
        root.appendChild(container);
    }
};
