import facebook from '../assets/facebook-icon.svg';
import instagram from '../assets/instagram-icon.svg';
import email from '../assets/email-icon.svg';
import github from '../assets/github.svg';

const Header = () => {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "La Boulangère";
  title.classList.add("title");
  header.appendChild(title);

  const navBar = document.createElement("nav");
  navBar.classList.add("navBar");

  const tabs = document.createElement("ul");
  tabs.classList.add("tabs");
  navBar.appendChild(tabs);

  const homeTab = document.createElement("li");
  homeTab.classList.add("tab", "homeTab");
  tabs.appendChild(homeTab);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("btn", "homeBtn");
  homeTab.appendChild(homeBtn);

  const menuTab = document.createElement("li");
  menuTab.classList.add("tab", "menuTab");
  tabs.appendChild(menuTab);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("btn", "menuBtn");
  menuTab.appendChild(menuBtn);

  const contactTab = document.createElement("li");
  contactTab.classList.add("tab", "contactTab");
  tabs.appendChild(contactTab);

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("btn", "contactBtn");
  contactTab.appendChild(contactBtn);

  header.appendChild(navBar);

  return header;
};

const Footer = () => {
  const footer = document.createElement("footer");
  const info = document.createElement("div");
  info.classList.add("info");

  const facebookIcon = document.createElement("img");
  facebookIcon.setAttribute("src", facebook);
  facebookIcon.classList.add("social-media");
  info.appendChild(facebookIcon);

  const instagramIcon = document.createElement("img");
  instagramIcon.setAttribute("src", instagram);
  instagramIcon.classList.add("social-media");
  info.appendChild(instagramIcon);

  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("src", email);
  emailIcon.classList.add("social-media");
  info.appendChild(emailIcon);

  const title2 = document.createElement("h2");
  title2.textContent = "La Boulangère";
  title2.classList.add("title-2");
  info.appendChild(title2);

  const rights = document.createElement("p");
  rights.textContent = "2021 © All rights reserved.";
  info.appendChild(rights);

  footer.appendChild(info);

  const credits = document.createElement("div");
  credits.classList.add("credits");

  const madeBy = document.createElement("p");
  madeBy.textContent = "Made by";
  madeBy.classList.add("made-by");
  credits.appendChild(madeBy);

  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("src", github);
  githubIcon.classList.add("github-icon");
  credits.appendChild(githubIcon);

  const githubLink = document.createElement("a");
  githubLink.textContent = "luizgmacedo";
  githubLink.setAttribute("href", "https://github.com/luizgmacedo");
  githubLink.setAttribute("target", "_blank");
  credits.appendChild(githubLink);

  footer.appendChild(credits);

  return footer;
};

export { Header, Footer };
