const menu = () => {
    const menuDiv = document.createElement('main');
    menuDiv.classList.add('menu');

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items');

    const pricesDiv = document.createElement('div');
    pricesDiv.classList.add('prices');

    const items = ['BBQ Special', 'Grilled Pork Chops', 'Chicken Wings', 'Mega Burguer'];
    const prices = ['$9.50', '$10.59', '$13.99', '$15.99'];

    for (let i = 0; i < items.length; i++) {
        const item = document.createElement('p');
        item.textContent = items[i];

        itemsDiv.appendChild(item);

        const price = document.createElement('p');
        price.textContent = prices[i];

        pricesDiv.appendChild(price);
    }


    menuDiv.appendChild(itemsDiv);
    menuDiv.appendChild(pricesDiv);

    return menuDiv;
}

export {menu};