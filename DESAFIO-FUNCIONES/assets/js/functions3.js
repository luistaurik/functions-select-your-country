let box1 = document.querySelector("#box-1").style.backgroundColor;
let box2 = document.querySelector("#box-2").style.backgroundColor;
let box3 = document.querySelector("#box-3").style.backgroundColor;
let box4 = document.querySelector("#box-4").style.backgroundColor;
let box5 = document.querySelector("#box-5").style.backgroundColor;
let box6 = document.querySelector("#box-6").style.backgroundColor;
let color

document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        color = "yellow";
    } else if (event.key === 's' || event.key === "S") {
        color = "blue";
    } else if (event.key === "d" || event.key === "D") {
        color = "red";
    }
    })

document.querySelector("#box-1").addEventListener("click", function(){
    sectionId = document.querySelector("#box-1");
    sectionId.style.backgroundColor = color;
    checkCountry();
})

document.querySelector("#box-2").addEventListener("click", function(){
    sectionId = document.querySelector("#box-2");
    sectionId.style.backgroundColor = color;
    checkCountry();
})

document.querySelector("#box-3").addEventListener("click", function(){
    sectionId = document.querySelector("#box-3");
    sectionId.style.backgroundColor = color;
    checkCountry();
})

document.querySelector("#box-4").addEventListener("click", function(){
    sectionId = document.querySelector("#box-4");
    sectionId.style.backgroundColor = color;
    checkCountry();
})

document.querySelector("#box-5").addEventListener("click", function(){
    sectionId = document.querySelector("#box-5");
    sectionId.style.backgroundColor = color;
    checkCountry();
})

document.querySelector("#box-6").addEventListener("click", function(){
    sectionId = document.querySelector("#box-6");
    sectionId.style.backgroundColor = color;
    checkCountry();
})

// Profe, trate de agregarle una funcion adicional cambiando el 
// nombre del pais al momento de crearlo, con dos, venezuela y colombia, 
// pero no me funciono. Despues me puede decir por que no esta bien el codigo?

function checkCountry() {
    let yRGB = "rgb(255, 255, 0)";
    let bRGB = "rgb(0, 0, 255)";
    let rRGB = "rgb(255, 0, 0)";
  
    if (
      box1.style.backgroundColor === yRGB &&
      box2.style.backgroundColor === yRGB &&
      box3.style.backgroundColor === bRGB &&
      box4.style.backgroundColor === bRGB &&
      box5.style.backgroundColor === rRGB &&
      box6.style.backgroundColor === rRGB
    ) {
      country.textContent = "Venezuela";
    } else if (
      box1.style.backgroundColor === yRGB &&
      box2.style.backgroundColor === yRGB &&
      box3.style.backgroundColor === yRGB &&
      box4.style.backgroundColor === bRGB &&
      box5.style.backgroundColor === rRGB &&
      box6.style.backgroundColor === rRGB
    ) {
      country.textContent = "Colombia";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    checkCountry();
  });

// document.addEventListener("click", function (event) {
//     if (event. === 'a') {
//     /* Cambiar a color 1 */
//     } else if (event.key === 's') {
//     /* Cambiar a color 2 */
//     }
//     })

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'a') {
//     /* Cambiar a color 1 */
//     } else if (event.key === 's') {
//     /* Cambiar a color 2 */
//     }
//     })