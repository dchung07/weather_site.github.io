const apiUrl = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.8688&lon=151.2093&appid=7b8a8b9d4dcb4279b5133aa874aafd4a";

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const uvIndex = document.getElementById("uvIndex");
const weatherImg = document.getElementById("weatherImg");

async function defaultCity() {
    try {
        let response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        var data = await response.json();
        console.log(data);
        let weather = data.current.weather[0].main;

        if(weather.trim() == 'Rain'){
            weatherImg.src = 'images/rain.png';
        } else if(weather === 'Clouds'){
            weatherImg.src = 'images/cloud.png';
        } else if(weather === 'Snow'){
            weatherImg.src = 'images/snow.png';
        } else if(weather === 'Clear'){
            weatherImg.src = 'images/sun.png';
        }

        weatherImg.alt = weather;
        
        cityName.innerHTML = data.name;
        temperature.innerHTML = `${data.current.temp} ºC`;
        description.innerHTML = data.current.weather[0].description;
        uvIndex.innerHTML = `UV Index: ${data.current.uvi}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

defaultCity()