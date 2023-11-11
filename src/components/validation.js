export const validation = () => {
  const form = document.querySelector(".authorization__form");
  const formInput = document.querySelectorAll(".authorization__input");
  const formInputEmail = document.querySelector(".email");
  // валидация емаила
  function validationEmail(email) {
    const sumbylEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sumbylEmail.test(String(email).toLowerCase());
  }
  // функция формы
  form.onsubmit = function () {
    const emailValue = formInputEmail.value;
    // запрет закрытия окна, если инпуты пустые
    const emptyInput = Array.from(formInput).filter(
      (input) => input.value === ""
    );
    // оповещение, если инпуты пустые
    formInput.forEach((input) => {
      if (input.value === "") {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid #356ead";
      }
    });

    if (emptyInput.length !== 0) {
      return false;
    }

    if (!validationEmail(emailValue)) {
      formInputEmail.style.border = "2px solid red";
      return false;
    }
    formInputEmail.style.border = "2px solid #356ead";
  };
};
