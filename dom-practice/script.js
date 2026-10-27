var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var h1 = document.querySelector("h1");
var main = document.querySelector("main");

var a = 0;


btn1.addEventListener("click", function () {
    a++;
    h1.innerHTML = a;
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
    main.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
});

btn2.addEventListener("click", function () {
    a--;
    h1.innerHTML = a;
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
  main.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
});

btn3.addEventListener("click", function () {
  a = 0;
  h1.innerHTML = a;
  main.style.backgroundColor = "rgb(255, 243, 243)";
});
