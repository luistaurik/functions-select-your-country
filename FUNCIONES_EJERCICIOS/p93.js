// 93.jsForma declarativa vs expresion de funcion, funcionan igual salvo con el Hoisting



// declarativa o estandar
function alertar(){
    console.log ("hola soy una funcion declarativa o estandard")
}

alertar()


// expresion de funcion
const alertar1 = function () {
    console.log ("hola soy una expresion de funcion")
}


alertar1()