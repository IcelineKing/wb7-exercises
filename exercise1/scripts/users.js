"use strict";

console.log("address");

// https://jsonplaceholder.typicode.com/users
const apiBaseUrl = "https://jsonplaceholder.typicode.com/users/";

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

      // "for in :" to retrive object keys --ex: name/address/number \ "for of :" to loop through an array
      for (let d in data) {
        let table = document.createElement("table");
        table.innerHTML = data[d];

        resultsOutPut.appendChild(table);

        // calling keys (name of variable) + the actual variable; the bracket calls values of the keys
        console.log(d + ": " + data[d]);
      }
    });
}
