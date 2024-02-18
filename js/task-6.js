function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const box = document.querySelector("#boxes");
const input = document.querySelector(".input-numbers");

function createBoxes(amount) {
  const stringDiv = "<div class=square></div>";
  if (amount > 0) {
    box.innerHTML = "";
  }
  let step = 30;
  for (let i = 1; i <= amount; i += 1) {
    box.insertAdjacentHTML("beforeend", stringDiv);
    const element = box.lastElementChild;
    element.style.width = `${step}px`;
    element.style.height = `${step}px`;
    element.style.backgroundColor = getRandomHexColor();
    step += 10;
  }
}

const btnCreate = document.querySelector("[data-create]");
btnCreate.addEventListener("click", createBtn);

function createBtn() {
  let total = parseInt(controls.firstElementChild.value);
  const max = parseInt(input.getAttribute("max"));
  total = total <= max ? total : "";
  if (isNaN(total) || total <= 0) {
    controls.firstElementChild.value = "";
    return;
  }
  createBoxes(total);
  controls.firstElementChild.value = "";
}
const btnDestroy = document.querySelector("[data-destroy]");
btnDestroy.addEventListener("click", destroyBtn);

function destroyBtn() {
  box.innerHTML = "";
}
