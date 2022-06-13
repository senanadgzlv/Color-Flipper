const different = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    let differentColor="#";

    for(let i=0; i<6; i++){
differentColor += different[getRandomNumber()]

color.textContent=differentColor;
document.body.style.backgroundColor=differentColor;

    }
})

function getRandomNumber(){
    return Math.floor(Math.random()* different.length);
}