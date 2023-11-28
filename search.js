const apiKey = "7b8a8b9d4dcb4279b5133aa874aafd4a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=sydney&unitsmetric";

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherImg = document.getElementById("weatherImg");

async function checkWeather() {
    // const response = await fetch(apiUrl + '&appid=${apiKey}');
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=7b8a8b9d4dcb4279b5133aa874aafd4a&units=metric");
    var data = await response.json();
    console.log(data);
    let weather = data.weather[0].main;

    weatherImg.alt = weather;
    

    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp + ' ºC';
    description.innerHTML = data.weather[0].description;
}

checkWeather();