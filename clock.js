const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date =new Date();
    const miuntes =date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds()
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${miuntes < 10 ? `0${miuntes}` : miuntes}:${seconds < 10 ? `0${seconds}` : seconds
}`;

}

function sayHi(){
    console.log("say hi");
}

function init(){
 getTime();
 setInterval(getTime, 1000)
}

init();