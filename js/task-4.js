const formElement = document.querySelector(".login-form");
formElement.addEventListener("submit", onSubmit);

function onSubmit(avt) {
  avt.preventDefault();

  const elements = avt.currentTarget;

  const { email, password } = elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const data = {
    email: emailValue,
    password: passwordValue,
  };
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(data);
    elements.reset();
  }
}
