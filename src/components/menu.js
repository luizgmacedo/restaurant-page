import baguette from '../assets/baguette.png';
import eclair from '../assets/eclair.png';
import muffin from '../assets/muffin.png';
import applePie from '../assets/apple-pie.png';
import angel from '../assets/angel.png';
import coffe from '../assets/coffe.png';

export const Menu = () => {
  const menu = document.createElement("main");
  menu.classList.add("menu");

  const createItem = (image, name, price) => {
    const food = document.createElement("div");
    food.classList.add("food");

    const foodImage = document.createElement("img");
    foodImage.src = image;
    foodImage.classList.add("food-image");

    const foodName = document.createElement("p");
    foodName.textContent = name;
    foodName.classList.add("food-name");

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;
    foodPrice.classList.add("food-price");

    food.appendChild(foodImage);
    food.appendChild(foodName);
    food.appendChild(foodPrice);

    menu.appendChild(food);
  };

  const items = [
    { image: baguette, name: "Baguette", price: "$ 5.00" },
    { image: eclair, name: "Eclair", price: "$ 2.99" },
    { image: muffin, name: "Muffin", price: "$ 1.50" },
    { image: applePie, name: "Apple Pie", price: "$ 9.79" },
    {
      image: angel,
      name: "Chocolate Angel",
      price: "$ 4.49",
    },
    { image: coffe, name: "Coffe", price: "$ 3.79" },
  ];

  for (let i = 0; i < items.length; i++) {
    createItem(items[i].image, items[i].name, items[i].price);
  }

  return menu;
};
