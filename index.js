const title = document.querySelector("#title");

const BASE_COLOR = "rgb(103, 83, 196)";
const OTHER_COLOR = "#55efc4";

function hendleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color =OTHER_COLOR;
   } else {
    title.style.color = BASE_COLOR;

 }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", hendleClick);
}
init();

