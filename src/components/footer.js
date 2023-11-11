export const footer = () => {
  const openOne = document.querySelector(".footerMobile__open-one");
  const closeOne = document.querySelector(".footerMobile__close-one");
  const titleOne = document.querySelector(".footerMomile_li-one");

  const openTwo = document.querySelector(".footerMobile__open-two");
  const closeTwo = document.querySelector(".footerMobile__close-two");
  const titleTwo = document.querySelector(".footerMomile_li-two");

  const openThree = document.querySelector(".footerMobile__open-three");
  const closeThree = document.querySelector(".footerMobile__close-three");
  const titleThree = document.querySelector(".footerMomile_li-three");

  const openFour = document.querySelector(".footerMobile__open-four");
  const closeFour = document.querySelector(".footerMobile__close-four");
  const titleFour = document.querySelector(".footerMomile_li-four");

  const openFive = document.querySelector(".footerMobile__open-five");
  const closeFive = document.querySelector(".footerMobile__close-five");
  const titleFive = document.querySelector(".footerMomile_li-five");

  // 1
  openOne.addEventListener("click", () => {
    titleOne.style.display = "block";
    openOne.style.display = "none";
    closeOne.style.display = "block";
  });

  closeOne.addEventListener("click", () => {
    titleOne.style.display = "none";
    closeOne.style.display = "none";
    openOne.style.display = "block";
  });
  //2
  openTwo.addEventListener("click", () => {
    titleTwo.style.display = "block";
    openTwo.style.display = "none";
    closeTwo.style.display = "block";
  });

  closeTwo.addEventListener("click", () => {
    titleTwo.style.display = "none";
    closeTwo.style.display = "none";
    openTwo.style.display = "block";
  });
  // 3
  openThree.addEventListener("click", () => {
    titleThree.style.display = "block";
    openThree.style.display = "none";
    closeThree.style.display = "block";
  });

  closeThree.addEventListener("click", () => {
    titleThree.style.display = "none";
    closeThree.style.display = "none";
    openThree.style.display = "block";
  });
  // 4
  openFour.addEventListener("click", () => {
    titleFour.style.display = "block";
    openFour.style.display = "none";
    closeFour.style.display = "block";
  });

  closeFour.addEventListener("click", () => {
    titleFour.style.display = "none";
    closeFour.style.display = "none";
    openFour.style.display = "block";
  });
  // 5
  openFive.addEventListener("click", () => {
    titleFive.style.display = "block";
    openFive.style.display = "none";
    closeFive.style.display = "block";
  });

  closeFive.addEventListener("click", () => {
    titleFive.style.display = "none";
    closeFive.style.display = "none";
    openFive.style.display = "block";
  });
};
