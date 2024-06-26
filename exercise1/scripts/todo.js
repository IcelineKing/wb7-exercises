"use strict";

console.log("title");

// https://jsonplaceholder.typicode.com/todos/1
const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/";

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

      resultsOutPut.innerHTML = data.title;

    });
}








  //   for (let title of data.title) {
      //     let div = document.createElement("div");
      //     div.innerHTML = title;

      //     resultsOutPut.appendChild(div);
      //   }
