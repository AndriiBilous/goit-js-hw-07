const listItems = document.querySelectorAll(".body-item");
const animalsItems = document.querySelectorAll(".animal-item");
const productsItems = document.querySelectorAll(".products-item");
const technologiesItems = document.querySelectorAll(".technologies-item");

function totalCategories(numbers) {
  let total = 0;
  numbers.forEach((number, index) => (total = index + 1));

  return `Number of categories: ${total}`;
}
console.log(totalCategories(listItems));

const totalElements = (numbers) => {
  let total = 0;
  numbers.forEach((number, index) => (total = index + 1));
  return `Elements: ${total} `;
};
console.log("Category: Animals");
console.log(totalElements(animalsItems));

console.log("Category: Products");
console.log(totalElements(productsItems));

console.log("Category: Technologies");
console.log(totalElements(technologiesItems));
