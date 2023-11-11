export const registr = () => {
  const btnOpen = document.querySelector(".header__button-registr");
  const btnOnenMobile = document.querySelector(".headerMobile__button-registr");
  const modal = document.querySelector(".register");
  const modalClose = document.querySelector(".register__close");

  btnOpen.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  btnOnenMobile.addEventListener("click", () => {
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
