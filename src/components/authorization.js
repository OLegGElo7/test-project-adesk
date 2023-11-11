export const authorization = () => {
  const btnOpen = document.querySelector(".header__button-open");
  const btnOpenMobile = document.querySelector(".headerMobile__button-open");
  const modal = document.querySelector(".authorization");
  const modalClose = document.querySelector(".authorization__close");

  btnOpen.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  btnOpenMobile.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  });
  window.addEventListener("click", (Event) => {
    if (Event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });
};
