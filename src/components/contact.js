const contact = () => {
    const contactDiv = document.createElement('main');
    contactDiv.classList.add('contact');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const email = document.createElement('p');
    email.textContent = 'Email: lokis@restaurant.com';
    infoDiv.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 55153456922';
    infoDiv.appendChild(phone);

    contactDiv.appendChild(infoDiv);

    return contactDiv;
}

export {contact};