const cities = [
  { name: "Benbrook, TX", latitude: 32.6732, longitude: -97.4606 },

  { name: "Phoenix, AZ", latitude: 33.3759, longitude: -112.305 },

  { name: "Santa Clara, CA", latitude: 34.3923, longitude: -118.5433 },

  { name: "Minneapolis, MN", latitude: 44.9764, longitude: -93.2474 },

  { name: "Las Vegas, NV", latitude: 36.1714, longitude: -115.1544 },
];

32.6732, -97.4606;

// let cities = city[0];

// console.log(city)

const citiesInput = document.getElementById("citiesInput");

window.onload = () => {
  const selectCities = document.createElement("select");
  selectCities.className = "form form-control";
  for (let city of cities) {
    const citiesOption = document.createElement("option");
    citiesOption.textContent = city.name;
    citiesOption.value = city.name;
    selectCities.appendChild(citiesOption);
    citiesInput.appendChild(selectCities);
    let x = 32.6791;
    let y = -97.4641;
    citiesData(x, y);
  }

  //   createCitiesSelect();
};

// function createCitiesSelect() {
//   const selectCities = document.createElement("select");
//   selectCities.className = "form form-control";
//   for (let city of cities) {
//     const citiesOption = document.createElement("option");
//     citiesOption.textContent = city.name;
//     citiesOption.value = city.name;
//     selectCities.appendChild(citiesOption);
//   }
// }

//
