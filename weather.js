const weather = document.querySelector(".js-weather");
const API_KEY = "a2fc265fecf48640c3ee0008645fe4d8";
const COORDS = "coords";

function getWeather(lat, log){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
if(loadedCoords === null){
    askForCoords();
 } else {
     const parsedCooeds =JSON.parse(loadedCoords)
     getWeather(parsedCooeds.latitude, parsedCooeds.longitude);
 }
}

function init(){
    loadCoords()

}
 init();