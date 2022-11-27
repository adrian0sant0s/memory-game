const input = document.querySelector(".input-login");
const button = document.querySelector(".button-login");

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

input.addEventListener("input", validateInput);
