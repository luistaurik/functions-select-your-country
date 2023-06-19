// 94.js funciones flechas u arrow functions, su funcionamiento normal y con Hoisting



// function flecha sin retornar valores 
const suma = (a, b) => {
    console.log(a)
    console.log(b)
    console.log(a + b)
}

suma(4,8)


// function flecha retornando valores 
const suma1 = (a, b) => {
    console.log(a)
    console.log(b)
    return a+b
}


console.log(suma1(4,8))

// Tip: en funciones flechas con solo una instruccion se puede obviar las llaves y el return es implicito
const suma2 = (a, b) => {
       return a+ b
}



/* const suma2 = (a, b) => a+b */ 

suma2(3,5)