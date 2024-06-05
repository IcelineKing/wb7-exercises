"use strict";

console.log("mealsInCategory");

//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

let category;

window.onload = function () {
  let urlParams = new URLSearchParams(location.search);

  for (let urlParams of urlParams) {
    console.log(urlParams);
  }

  if (urlParams.has("category") === true) {
    category = urlParams.get("category");
  }

  console.lof(category);

  function loadCategoryData() {
    // const categoryInput = document.getElementById("categoryInput");

    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
  }

  function onGetResultsButtonClick() {
    console.log("clicked");

    const resultsOutPut = document.getElementById("resultsOutput");
    const categoryHeader = document.getElementById("categoryHeader");

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
};

// fetch(actualUrl).then(doWhenResponseBegins); }

// Another way to call the data

// function doWhenResponseBegins(response) {
//   response.json().then(processResultsDataFromAPI);
// }

// function processResultsDataFromAPI(data) {
//   console.log(data);
//   doStuffWithArrayOfMeals(data.meals);
// }

// function doStuffWithArrayOfMeals(meals) {
//   for (let meal of meals) {
//     doStuffWithMeal(meal);
//   }
// }

// function doStuffWithMeal(meal) {
//   let p = document.createElement("p");
//   p.innerHTML = meal.strMeal;
//   resultsOutPut.appendChild(p);
// }
