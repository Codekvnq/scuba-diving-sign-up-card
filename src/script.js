window.onload = () => {
  // references ---------------------

  // main container
  const container = document.querySelector(".container");

  // intro section
  const intro = document.querySelector(".intro");
  const introBtnContainer = document.querySelector(".btn__intro-container");
  const introBtn = document.querySelector(".btn__intro");
  const headingPrimary = document.querySelector(".heading__primary");

  // form section
  const form = document.querySelector(".form");
  const formInnerContainer = document.querySelector(".form__inner-container");
  const headingSecondary = document.querySelector(".heading__secondary");
  const formMainContainer = document.querySelector(
    ".form__main-form-container"
  );

  // event listeners ---------------

  introBtn.addEventListener("click", () => {
    
    // main container
    container.classList.add("container--expand");

    // intro section
    intro.classList.add("intro--chevron");
    headingPrimary.classList.add("hide");
    introBtnContainer.classList.add("hide");

    // form section
    form.classList.add("form--expand");
    formInnerContainer.classList.add("form__inner-container--expand");
    headingSecondary.style.display = "block";
    headingSecondary.classList.add("heading__secondary--slideRight");
    formMainContainer.style.display = "block";
    formMainContainer.classList.add("show");
  });
};
