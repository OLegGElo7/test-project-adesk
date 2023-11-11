export const validationReg = () => {
  const formReg = document.querySelector(".register__form");
  const formInputReg = document.querySelectorAll(".register__input");
  const formInputEmailReg = document.querySelector(".emailReg");

  // валидация емаила
  function validationEmailReg(email) {
    const sumbylEmailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sumbylEmailReg.test(String(email).toLowerCase());
  }
  // функция формы
  formReg.onsubmit = function () {
    const emailValue = formInputEmailReg.value;
    // запрет закрытия окна, если инпуты пустые
    const emptyInput = Array.from(formInputReg).filter(
      (input) => input.value === ""
    );
    // оповещение, если инпуты пустые
    formInputReg.forEach((input) => {
      if (input.value === "") {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid #356ead";
      }
    });

    if (emptyInput.length !== 0) {
      return false;
    }

    if (!validationEmailReg(emailValue)) {
      formInputEmailReg.style.border = "2px solid red";
      return false;
    }
    formInputEmailReg.style.border = "2px solid #356ead";
  };
};
