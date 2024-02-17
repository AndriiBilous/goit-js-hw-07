function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const box = document.querySelector("#boxes");

controls.firstElementChild.addEventListener("input", handleInput);

function handleInput(evt) {
  const value = parseInt(evt.currentTarget.value);
  const max = parseInt(evt.currentTarget.max);

  controls.firstElementChild.value = value <= max ? value : "";
}

const elementBoxes = document.querySelector(".boxes");
function createBoxes(amount) {
  const stringDiv = "<div class=boxes></div>";
  if (amount > 0) {
    box.innerHTML = "";
  }
  let step = 20;
  for (let i = 1; i <= amount; i += 1) {
    box.insertAdjacentHTML("beforeend", stringDiv);
    const element = box.lastElementChild;
    step += 10;
    element.style.width = `${step}px`;
    element.style.height = `${step}px`;
    element.style.backgroundColor = getRandomHexColor();
  }
}

const btnCreate = document.querySelector("[data-create]");
btnCreate.addEventListener("click", createBtn);

function createBtn() {
  const total = parseInt(controls.firstElementChild.value);

  if (isNaN(total) || total <= 0) {
    controls.firstElementChild.value = "";
    return;
  }
  createBoxes(total);
  controls.firstElementChild.value = "";
}

function destroyBoxes() {
  box.innerHTML = "";
}

const btnDestroy = document.querySelector("[data-destroy]");
btnDestroy.addEventListener("click", destroyBtn);
function destroyBtn() {
  destroyBoxes();
}
