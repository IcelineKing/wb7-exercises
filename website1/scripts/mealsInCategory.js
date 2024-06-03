"use strict";

console.log("mealsInCategory");

//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

window.onload = function () {
  const getResultsButton = document.getElementById("getResultsButton");
  getResultsButton.onClick = onGetResultsButtonClick;
};

function onGetResultsButtonClick() {
  console.log("clicked");

  const categoryInput = document.getElementById("categoryInput");
  const resultsOutPut = document.getElementById("resultsOutput");

  let actualUrl = apiBaseUrl + categoryInput.Value;

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
