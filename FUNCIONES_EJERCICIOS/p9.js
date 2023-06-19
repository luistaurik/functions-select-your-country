/* p9.js Usando addEventListener */

// ejemplo la funcion normal con  parametros 
function pintar(color) {
    elemento = document.querySelector("body");
    elemento.style.backgroundColor = color;
}


btn = document.querySelector("button")

// usando funcion anonima en AEL y llamado a function pintar con parametros
btn.addEventListener("click", function () {
    pintar("black");
}) 







