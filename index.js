const addCityButton = document.getElementById("addCityButton");
const viewCityButton = document.vgetElementById("viewCityButton");

addCityButton.addEventListener('click', ()=> {
    window.location.href = "searchPage.html";
});

viewCityButton.addEventListener('click', () => {
    window.location.href = "viewWeather.html";
});