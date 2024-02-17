const userName = document.querySelector("#name-input");
const textUser = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);

function handleInput(avt) {
  const input = avt.currentTarget;
  const value = input.value.trim();
  if (value) {
    textUser.textContent = value;
  } else {
    textUser.textContent = "Anonymous";
  }
}
