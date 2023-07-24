const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

function getWeather(city) {
  console.log(city);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`fe4cb71500be1e99c1461b14bbbd9fe6`}`
  )
    .then((response) => response.json())
    .then((data) => {
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `img src= 'http://openweathermap.org/img/wn/${iconCode}.png' alt="weather icon"`;
    });
}
