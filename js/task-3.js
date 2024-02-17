const userName = document.querySelector("#name-input");
const textUser = document.querySelector("#name-output");

userName.classList.add("user-input");
textUser.classList.add("text");
textUser.parentElement.classList.add("text");

console.dir();
userName.addEventListener("input", onClick);

function onClick(avt) {
  const input = avt.currentTarget;
  const value = input.value.trim();
  if (value) {
    textUser.textContent = value;
  } else {
    textUser.textContent = "Anonymous";
  }
}
