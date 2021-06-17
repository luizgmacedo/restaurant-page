export const Home = () => {
  const home = document.createElement("main");
  home.classList.add("home");

  const homeBg = document.createElement("div");
  homeBg.classList.add("home-bg");
  home.appendChild(homeBg);

  const subtitle = document.createElement("h3");
  subtitle.textContent = "Good bread for a good day";
  subtitle.classList.add("subtitle");
  home.appendChild(subtitle);

  return home;
};
