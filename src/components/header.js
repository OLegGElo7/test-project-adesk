export const header = () => {
  const btn = document.querySelector(".header__button");
  const menu = document.querySelector(".headerMobile");
  const menuClose = document.querySelector(".headerMobile__button");

  btn.addEventListener("click", () => {
    menu.style.display = "flex";
  });

  menuClose.addEventListener("click", () => {
    menu.style.display = "none";
  });

  window.addEventListener("click", (Event) => {
    if (Event.target == menu) {
      menu.style.display = "none";
    }
  });
};
