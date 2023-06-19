a = alert("hola")
console.log(a) /* Mostrará undefined, porque alert no devuelve valor, retorna undefined y eso lo guardamos en la variable a */



// Probemos creando una función que no devuelve valor

function ejemplo() {
    console.log("hola mundo")
}

a = ejemplo()
console.log(a) /* Tip: el resultado arrojara undefined, funcion no retorna valor y a es undefined */ 


// Tip Buenas practicas: La buena práctica más común que se recomienda seguir en cuanto al nombre de una función es agregar un verbo en infinitivo al comienzo del nombre, además se debe tratar de que el nombre representa específicamente el objetivo del bloque de código que representa:

                            /* 
                            function calcularPromedio()
                            function getData()
                            function registarUsuario() 
                            */