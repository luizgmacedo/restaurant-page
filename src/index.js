import "./style.css";
import { Header, Footer } from "./components/base.js";
import { Home } from "./components/home.js";
import { Menu } from "./components/menu.js";

const content = document.querySelector("#content");

function render(item) {
  content.appendChild(Header());
  content.appendChild(item);
  content.appendChild(Footer());
}

render(Home());

window.addEventListener("click", (e) => {
  const tab = e.target;
  if (tab.classList.contains("homeBtn")) {
    content.innerHTML = "";
    render(Home());
  } else if (tab.classList.contains("menuBtn")) {
    content.innerHTML = "";
    render(Menu());
  }
});
