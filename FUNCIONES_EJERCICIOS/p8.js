/* p8.js Usando addEventListener */


btn = document.querySelector("button")

// invocar la funcion dentro del addEventListener en forma anonima
btn.addEventListener("click", function () {
    elemento = document.querySelector("body");
    elemento.style.backgroundColor = "black";
}) 

/* 
TIP: ¿Cuando ocupar funciones anónimas?
Si vas a llamar una única vez a la función probablemente sea mejor utilizar una
función anónima. 
*/