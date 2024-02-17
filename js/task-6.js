function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const box = document.querySelector("#boxes");

controls.firstElementChild.addEventListener("input", onClick);
let total = "";
function onClick(avt) {
  const value = parseInt(avt.currentTarget.value);
  const max = parseInt(avt.currentTarget.max);

  if (value <= max) {
    total = value;
  } else if (value > max) {
    total = "";
  }
}
const elementBoxes = document.querySelector(".boxes");
function createBoxes(amount) {
  const stringDiv = "<div class=boxes></div>";
  if (amount > 0) {
    box.innerHTML = "";
  }
  for (let i = 1; i <= amount; i += 1) {
    box.insertAdjacentHTML("beforeend", stringDiv);
  }

  let step = 0;

  // console.log(total);

  for (const element of box.children) {
    step += 10;
    element.style.width = `${step}px`;
    element.style.height = `${step}px`;
    element.style.backgroundColor = getRandomHexColor();
  }
}

controls.children["1"].addEventListener("click", createBtn);
function createBtn() {
  if (controls.firstElementChild.value === "" || total === "") {
    controls.firstElementChild.value = "";
    return;
  }

  createBoxes(total);
  controls.firstElementChild.value = "";
}

function destroyBoxes() {
  if (box.children.length > 0) {
    box.innerHTML = "";
  }
}
controls.lastElementChild.addEventListener("click", destroyBtn);
function destroyBtn() {
  destroyBoxes();
}
