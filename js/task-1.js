const listItems = document.querySelectorAll(".body-item");
const animalsItems = document.querySelectorAll(".animal-item");
const productsItems = document.querySelectorAll(".products-item");
const technologiesItems = document.querySelectorAll(".technologies-item");

function calcTotal(array) {
  let total = 0;
  array.forEach(() => (total += 1));
  return total;
}

const totalCategories = (numbers, callback) => {
  return `Number of categories: ${callback(numbers)}`;
};

const totalElements = (numbers, callback) => {
  return `Elements: ${callback(numbers)} `;
};

console.log(totalCategories(listItems, calcTotal)); //3

console.log("Category: Animals");
console.log(totalElements(animalsItems, calcTotal)); //4

console.log("Category: Products");
console.log(totalElements(productsItems, calcTotal)); //3

console.log("Category: Technologies");
console.log(totalElements(technologiesItems, calcTotal)); //5
