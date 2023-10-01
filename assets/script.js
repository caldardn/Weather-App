const key = '126d2bb719bd2d3f71661c8d719d7efd'
let userInputEl = document.querySelector('#user-input')
let locationEl = document.querySelector('#location')

function addItem(city) {
    var cities = JSON.parse(localStorage.getItem('cities')) || [];
    cities.push(city);
    console.log(cities)
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  function getItems() {
    return JSON.parse(localStorage.getItem('cities')) || [];
  }




  

userInputEl.addEventListener('submit', function(e){
    e.preventDefault()
    let location = locationEl.value
    addItem(location)
    
   
   fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid='+key+'&units=imperial',
    {
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
    }
    )
    .then(function(response){
        return response.json()
        
    })
    .then(function(data){
        
        document.getElementById('city').textContent = "City: " + data.city.name
        document.getElementById('currentDate').textContent = "date" + data.list[0].dt_txt
        document.getElementById('currentTemp').textContent = "Temperature: " + data.list[0].main.temp + "\xB0" + "F"
        document.getElementById('currentDisc').textContent = "Discription: " + data.list[0].weather[0].description
        document.getElementById('currentWind').textContent = "Wind Speed : " + data.list[0].wind.speed + " MPH"
        document.getElementById('currentHumidity').textContent = "Humidity: " + data.list[0].main.humidity + "%"
       

        document.getElementById('date1').textContent = "date" + data.list[9].dt_txt
        document.getElementById('temperature1').textContent = "Temperature: " + data.list[9].main.temp + "\xB0" + "F"
        document.getElementById('discription1').textContent = "Discription: " + data.list[9].weather[0].description
        document.getElementById('wind1').textContent = "Wind Speed : " + data.list[9].wind.speed + " MPH"
        document.getElementById('humidity1').textContent = "Humidity: " + data.list[9].main.humidity + "%"

        document.getElementById('date2').textContent = "date" + data.list[17].dt_txt
        document.getElementById('temperature2').textContent = "Temperature: " + data.list[17].main.temp + "\xB0" + "F"
        document.getElementById('discription2').textContent = "Discription: " + data.list[17].weather[0].description
        document.getElementById('wind2').textContent = "Wind Speed : " + data.list[17].wind.speed + " MPH"
        document.getElementById('humidity2').textContent = "Humidity: " + data.list[17].main.humidity + "%"

        document.getElementById('date3').textContent = "date" + data.list[25].dt_txt
        document.getElementById('temperature3').textContent = "Temperature: " + data.list[25].main.temp + "\xB0" + "F"
        document.getElementById('discription3').textContent = "Discription: " + data.list[25].weather[0].description
        document.getElementById('wind3').textContent = "Wind Speed : " + data.list[25].wind.speed + " MPH"
        document.getElementById('humidity3').textContent = "Humidity: " + data.list[25].main.humidity + "%"

        document.getElementById('date4').textContent = "date" + data.list[33].dt_txt
        document.getElementById('temperature4').textContent = "Temperature: " + data.list[33].main.temp + "\xB0" + "F"
        document.getElementById('discription4').textContent = "Discription: " + data.list[33].weather[0].description
        document.getElementById('wind4').textContent = "Wind Speed : " + data.list[33].wind.speed + " MPH"
        document.getElementById('humidity4').textContent = "Humidity: " + data.list[33].main.humidity + "%"

        document.getElementById('date5').textContent = "date" + data.list[39].dt_txt
        document.getElementById('temperature5').textContent = "Temperature: " + data.list[39].main.temp + "\xB0" + "F"
        document.getElementById('discription5').textContent = "Discription: " + data.list[39].weather[0].description
        document.getElementById('wind5').textContent = "Wind Speed : " + data.list[39].wind.speed + " MPH"
        document.getElementById('humidity5').textContent = "Humidity: " + data.list[39].main.humidity + "%"
    })
    
 })
   




