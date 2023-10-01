const key = "126d2bb719bd2d3f71661c8d719d7efd";
let userInputEl = document.querySelector("#user-input");
let locationEl = document.querySelector("#location");

const history = JSON.parse(localStorage.getItem("cities")) || [];

userInputEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let location = locationEl.value.trim();

  if (!history.includes(location)) {
    history.push(location);
    localStorage.setItem("cities", JSON.stringify(history));
    renderHistoryBtns();
  }

  seaarchCity(location);
});

function seaarchCity(cityName) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=" +
      key +
      "&units=imperial"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let cIconImg0 = data.list[0].weather[0].icon;
      let currentIcon =
        "http://openweathermap.org/img/wn/" + cIconImg0 + ".png";

      document.getElementById("city").textContent = "City: " + data.city.name;
      document.getElementById("currentDate").textContent =
        "Date/Time: " + data.list[0].dt_txt;
      document.getElementById("currentTemp").textContent =
        "Temperature: " + data.list[0].main.temp + "\xB0" + "F";
      document.getElementById("currentDisc").textContent =
        "Discription: " + data.list[0].weather[0].description;
      document.getElementById("currentWind").textContent =
        "Wind Speed : " + data.list[0].wind.speed + " MPH";
      document.getElementById("currentHumidity").textContent =
        "Humidity: " + data.list[0].main.humidity + "%";
      document.getElementById("currentIcon").src = currentIcon;

      let IconImg9 = data.list[9].weather[0].icon;
      let icon9 = "http://openweathermap.org/img/wn/" + IconImg9 + ".png";
      document.getElementById("date1").textContent =
        "Date/Time: " + data.list[9].dt_txt;
      document.getElementById("temperature1").textContent =
        "Temperature: " + data.list[9].main.temp + "\xB0" + "F";
      document.getElementById("discription1").textContent =
        "Discription: " + data.list[9].weather[0].description;
      document.getElementById("wind1").textContent =
        "Wind Speed : " + data.list[9].wind.speed + " MPH";
      document.getElementById("humidity1").textContent =
        "Humidity: " + data.list[9].main.humidity + "%";
      document.getElementById("icon1").src = icon9;

      let IconImg17 = data.list[17].weather[0].icon;
      let icon17 = "http://openweathermap.org/img/wn/" + IconImg17 + ".png";
      document.getElementById("date2").textContent =
        "Date/Time: " + data.list[17].dt_txt;
      document.getElementById("temperature2").textContent =
        "Temperature: " + data.list[17].main.temp + "\xB0" + "F";
      document.getElementById("discription2").textContent =
        "Discription: " + data.list[17].weather[0].description;
      document.getElementById("wind2").textContent =
        "Wind Speed : " + data.list[17].wind.speed + " MPH";
      document.getElementById("humidity2").textContent =
        "Humidity: " + data.list[17].main.humidity + "%";
      document.getElementById("icon2").src = icon17;

      let IconImg25 = data.list[25].weather[0].icon;
      let icon25 = "http://openweathermap.org/img/wn/" + IconImg25 + ".png";
      document.getElementById("date3").textContent =
        "Date/Time: " + data.list[25].dt_txt;
      document.getElementById("temperature3").textContent =
        "Temperature: " + data.list[25].main.temp + "\xB0" + "F";
      document.getElementById("discription3").textContent =
        "Discription: " + data.list[25].weather[0].description;
      document.getElementById("wind3").textContent =
        "Wind Speed : " + data.list[25].wind.speed + " MPH";
      document.getElementById("humidity3").textContent =
        "Humidity: " + data.list[25].main.humidity + "%";
      document.getElementById("icon3").src = icon25;

      let IconImg33 = data.list[33].weather[0].icon;
      let icon33 = "http://openweathermap.org/img/wn/" + IconImg33 + ".png";
      document.getElementById("date4").textContent =
        "Date/Time: " + data.list[33].dt_txt;
      document.getElementById("temperature4").textContent =
        "Temperature: " + data.list[33].main.temp + "\xB0" + "F";
      document.getElementById("discription4").textContent =
        "Discription: " + data.list[33].weather[0].description;
      document.getElementById("wind4").textContent =
        "Wind Speed : " + data.list[33].wind.speed + " MPH";
      document.getElementById("humidity4").textContent =
        "Humidity: " + data.list[33].main.humidity + "%";
      document.getElementById("icon4").src = icon33;

      let IconImg39 = data.list[39].weather[0].icon;
      let icon39 = "http://openweathermap.org/img/wn/" + IconImg39 + ".png";
      document.getElementById("date5").textContent =
        "Date/Time: " + data.list[39].dt_txt;
      document.getElementById("temperature5").textContent =
        "Temperature: " + data.list[39].main.temp + "\xB0" + "F";
      document.getElementById("discription5").textContent =
        "Discription: " + data.list[39].weather[0].description;
      document.getElementById("wind5").textContent =
        "Wind Speed : " + data.list[39].wind.speed + " MPH";
      document.getElementById("humidity5").textContent =
        "Humidity: " + data.list[39].main.humidity + "%";
      document.getElementById("icon5").src = icon39;
      console.log(data);
    });
}

function renderHistoryBtns() {
  document.querySelector("#search-history").innerText = "";
  for (let i = 0; i < history.length; i++) {
    var button = document.createElement("button");
    button.innerText = history[i];
    button.addEventListener("click", function () {
      seaarchCity(history[i]);
    });
    document.querySelector("#search-history").append(button);
  }
}

renderHistoryBtns();
