var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var h1 = document.querySelector("h1")

var a = 0

btn1.addEventListener('click', function(){
    a++
    h1.innerHTML=a
})

btn2.addEventListener('click', function(){
    a--
    h1.innerHTML=a
})

btn3.addEventListener('click', function(){
    a=0
    h1.innerHTML=a
})