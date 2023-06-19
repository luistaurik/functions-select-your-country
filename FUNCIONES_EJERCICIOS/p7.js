/* p7.js Usando addEventListener */

// ejemplo la funcion normal sin parametros 
function pintar() {
    elemento = document.querySelector("body");
    elemento.style.backgroundColor = "black";
}


btn = document.querySelector("button")
btn.addEventListener("click", pintar) // pasar la funcion como argumento

/* 
Tip: Aquí se pasa pintar como argumento, es una buena forma, pero solo sirve si la función que
estamos pasando no recibe argumentos 
*/