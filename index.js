const addCityButton = document.getElementById("addCityButton");

addCityButton.addEventListener('click', ()=> {
    window.location.href = "searchPage.html";
});

viewCityButton.viewEventListen('click', ()=> {
    window.location.href = "viewWeather.html";
})