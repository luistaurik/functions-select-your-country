// p92.js otro ejemplo como pasar una funcion como agumento a otra funcion

function ejemplo(funcionParametro) {
    funcionParametro() /* Aquí llamamos a la función pasada como argumento */
    console.log("Resultado en funcion recibida: ", a+b);
}


// Al llamar a la función, pasamos como argumento la función nueva.
ejemplo( function () { 
               a=5, b=3; // probaremos las formas de declarar variables y su alcance
               console.log("Resultado en funcion enviada: ", a+b);
       } ) 

// estamos llamando a ejemplo pasando una funcion como argumento