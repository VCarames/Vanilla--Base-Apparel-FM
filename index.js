const form = document.querySelector("#form");
const email = document.querySelector(".form__input--email");
const mainPage = document.querySelector(".home__wp");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email.value)) {
    mainPage.classList.add("hide");
    document.getElementById("home__success").removeAttribute("hidden");
  } else {
  }
  document.getElementById("error-message-container").style.opacity = "1";
});
