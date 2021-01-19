import {header, footer} from './components/initial-page';
import {home} from './components/home';
import {menu} from './components/menu';
import {contact} from './components/contact';

const content = document.querySelector('#content');

function displayContent(item) {
    content.innerHTML = "";
    content.appendChild(header());
    content.appendChild(item());
    content.appendChild(footer());
}

displayContent(home);

window.addEventListener('click', (e) => {
    if(e.target.classList == "home-link") {
        displayContent(home);
    } else if(e.target.classList == "menu-link") {
        displayContent(menu);
    } else if(e.target.classList == "contact-link") {
        displayContent(contact);
    } else {
        return;
    }
});

