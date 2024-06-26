"use strict";

const hello = document.getElementById("hello");
const apiUrlListCategories =
  "https://www.themealdb.com/api/json/v1/1/filter.php";
const apiURLMealsInCategoryBase =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

window.onload = function () {
  // hello=.innerHTML = "Hello Pink";

  fetch(apiUrlListCategories)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.categories.forEach(createCategoryDiv);
    });
};

function createCategoryDiv(category) {
  let div = document.createElement("div");
  div.className = "col";
  categoriesRow.appendChild(div);

  let a = document.createElement("a");
  a.href = "apiURLMealsInCategoryBase" + category.strCategory;
  a.innerHTML = category.strCategory;

  div.appendChild(a);

  console.log(category.strCategory);
}
