// alert("QDDQD")

// 3.0

// function pintarBad(){
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// 3.1

ele1 = document.querySelector("#ele1")

ele1.addEventListener("click", function () {
    elementX = document.querySelector("#ele1");
    elementX.style.backgroundColor = "yellow";
}) 

// 3.2 go to functions2.js

painting2 = function(color){
    let ele2 = document.querySelector("#ele2");
    ele2.style.backgroundColor = color;
};
painting2("green");
ele2.addEventListener("click",function(){
    painting2("yellow")
});