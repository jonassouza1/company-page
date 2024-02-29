const buttonMenu = document.getElementById("btn");
const nav = document.getElementById("nav");

buttonMenu.addEventListener("click", (event) => {
  if (nav.classList[0] === "navbar") nav.classList.remove("navbar");
  else {
    nav.classList.add("navbar");
  }
});
