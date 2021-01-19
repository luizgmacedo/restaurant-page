const header = () => {
    const headerDiv = document.createElement('header');
    
    const logo = document.createElement('img');
    logo.src = "/dist/assets/meat.png";
    logo.classList.add('logo');
    headerDiv.appendChild(logo);

    const navBar = document.createElement('nav');

    const ul = document.createElement('ul');

    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Home';
    homeLink.classList.add('home-link');
    
    home.appendChild(homeLink);
    ul.appendChild(home);

    const menu = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.textContent = 'Menu';
    menuLink.classList.add('menu-link');

    menu.appendChild(menuLink);
    ul.appendChild(menu);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.textContent = 'Contact';
    contactLink.classList.add('contact-link');

    contact.appendChild(contactLink);
    ul.appendChild(contact);

    navBar.appendChild(ul);

    headerDiv.appendChild(navBar);

    return headerDiv;
}

const footer = () => {
    const footerDiv = document.createElement('footer');
    
    const section = document.createElement('section');
    
    const p = document.createElement('p');
    p.textContent = "Loki's Restaurant Ⓒ All Rights Reserved";

    section.appendChild(p);

    footerDiv.appendChild(section);

    return footerDiv;
}

export {header, footer};