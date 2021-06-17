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
    { image: "./src/assets/baguette.png", name: "Baguette", price: "$ 5.00" },
    { image: "./src/assets/eclair.png", name: "Eclair", price: "$ 2.99" },
    { image: "./src/assets/muffin.png", name: "Muffin", price: "$ 1.50" },
    { image: "./src/assets/apple-pie.png", name: "Apple Pie", price: "$ 9.79" },
    {
      image: "./src/assets/angel.png",
      name: "Chocolate Angel",
      price: "$ 4.49",
    },
    { image: "./src/assets/coffe.png", name: "Coffe", price: "$ 3.79" },
  ];

  for (let i = 0; i < items.length; i++) {
    createItem(items[i].image, items[i].name, items[i].price);
  }

  return menu;
};
