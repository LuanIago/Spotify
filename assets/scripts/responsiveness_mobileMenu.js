const body = document.querySelector("body");
const menuMobile = document.querySelector("#menu_mobile");
const menuMobileArea = document
  .querySelector("header .right-area")
  .cloneNode(true);
menuMobileArea.classList.add("menu-mobile-area");

const itemsMenuMobileDown = [
  "Premium",
  "Ajuda",
  "Baixar",
  "Privacidade",
  "Condições",
];

function addItemsMenuMobileArea(menu, ArrayItems) {
  ArrayItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "";

    li.appendChild(a);
    a.innerHTML = item;
    menu.appendChild(li);
  });
}

menuMobile.addEventListener("click", () => {
  document.querySelector("header nav").appendChild(menuMobileArea);

  const icon = menuMobile.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

  if (
    menuMobileArea.style.display === "none" ||
    menuMobileArea.style.display === ""
  ) {
    const menuMobileDown = menuMobileArea.querySelector(".right-area--left ul");
    menuMobileDown.innerHTML = "";
    addItemsMenuMobileArea(menuMobileDown, itemsMenuMobileDown);

    menuMobileArea.querySelector(".right-area--middle").innerHTML = "";
    menuMobileArea.style.display = "flex";
  } else if (menuMobileArea.style.display === "flex") {
    menuMobileArea.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 870) {
    menuMobileArea.style.display = "none";

    const icon = menuMobile.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  }
});
