"use strict"


console.log("mealsInCategory");

//https://jsonplaceholder.typicode.com/todos/1
const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/1";

window.onload = function () {
  const getResultsButton = document.getElementById("getResultsButton");
  getResultsButton.onclick = onGetResultsButtonClick;
};

function onGetResultsButtonClick() {
  console.log("clicked");

  const categoryInput = document.getElementById("categoryInput");
  const resultsOutPut = document.getElementById("resultsOutput");

  let actualUrl = apiBaseUrl + categoryInput.value;

  console.log("URL:" + actualUrl);

  fetch(actualUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (let meal of data.meals) {
        let p = document.createElement("p");
        p.innerHTML = meal.strMeal;

        resultsOutPut.appendChild(p);
      }
    });
}
