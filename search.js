const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherImg = document.getElementById("weatherImg");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

let city = "";

searchButton.addEventListener('click', function(){
    city = searchInput.value;
    searchInput.value = "";
    checkWeather();
});



async function checkWeather() {

    let response = await fetch(`${apiUrl}&appid=7b8a8b9d4dcb4279b5133aa874aafd4a&q=${city}`);

    var data = await response.json();
    console.log(data);
    let weather = data.weather[0].main;

    if(weather.trim() == 'Rain'){
        weatherImg.src = 'images/rain.png';
    } else if(weather === 'Clouds'){
        weatherImg.src = 'images/cloud.png';
    } else if(weather === 'Snow'){
        weatherImg.src = 'images/snow.png';
    } else if(weather === 'Clear'){
        weatherImg.src = 'images/sun.png';
    } else {
        
    }

    /*
    - Rain
    - Clouds
    - Snow
    - Clear
    */

    weatherImg.alt = weather;
    
    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp + ' ºC';
    description.innerHTML = data.weather[0].description;


}

checkWeather();