const API_KEY = "a2fc265fecf48640c3ee0008645fe4d8";

const COORDS = "coords";

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
}

function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadCords = localStorage.getItem(COORDS);
if(loadCords === null){
    askForCoords();
 } else {
     //get weather
 }
}

function init(){
    loadCoords()

}
 init();