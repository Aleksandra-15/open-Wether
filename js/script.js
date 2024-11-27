let searchInput = document.querySelector(".search-wether");
const wetherOutput = document.querySelector(".output-wether");
const apiKey = "3711752d4381d039ed760e9f9bd12bbf";
const wetherIcon = document.querySelector(".wether-icon");

searchInput.addEventListener("input", () => {
  const city = searchInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3711752d4381d039ed760e9f9bd12bbf&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("wether:", data);
      console.log("temperature:", data.main.temp);
      wetherOutput.innerHTML = `
      <h3 class='name-city'>${data.name}</h3>
      <p class='weather-info'>Temperature: ${data.main.temp}, ${data.sys.country}
      </p>
      <p class='weather-info'>weather: ${data.weather[0].main}</p>
     
      `;
      const target = document.querySelector(".target");
      if (data.weather[0].main == "Clouds") {
        wetherIcon.src = "./svg/cloud-lightning.gif";
      } else if (data.weather[0].main == "Rain") {
        wetherIcon.src = "./svg/rain-cloud.gif";
      } else if (data.weather[0].main == "Drizzle") {
        wetherIcon.src = "./svg/partly-cloudy-day.gif";
      } else if (data.weather[0].main == "Mist") {
        wetherIcon.src = "./svg/haze.gif";
      } else if (data.weather[0].main == "Clear") {
        wetherIcon.src = "./svg/sun.gif";
      } else if (data.weather[0].main == "Snow") {
        wetherIcon.src = "./svg/icons8-snow.gif";
      } else if (data.weather[0].main == "Fog") {
        wetherIcon.src = "./svg/fog.gif";
      }
    })
    .catch((err) => {
      console.log(err);
      wetherOutput.innerHTML = "Введіть повну назву міста.";
    });
});
wetherOutput.addEventListener("click", searchInput);
searchInput.addEventListener("keydown", () => {});
