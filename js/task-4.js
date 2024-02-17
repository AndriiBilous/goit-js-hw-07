const formElement = document.querySelector(".login-form");
formElement.lastElementChild.classList.add("btn");
formElement.addEventListener("submit", onSubmit);

[...formElement.children]
  .slice(0, formElement.children.length - 1)
  .forEach((element) => element.classList.add("form"));
[...formElement.elements]
  .slice(0, formElement.children.length - 1)
  .forEach((element) => element.classList.add("input"));

function onSubmit(avt) {
  avt.preventDefault();

  const elements = avt.currentTarget;

  const { email, password } = elements;

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  }
  console.log(elements);
  elements.reset();
}
