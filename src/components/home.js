const home = () => {
    const homeDiv = document.createElement('main');
    homeDiv.classList.add('home');

    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = "Loki's Restaurant";

    section.appendChild(h2);

    homeDiv.appendChild(section);

    return homeDiv;
}

export {home};