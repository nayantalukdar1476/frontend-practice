var h1 = document.querySelector("h1");
var btn = document.querySelector("button");
var main = document.querySelector("main");

var arr = [
  { name: "nayan", age: 23 },
  { name: "papa", age: 56 },
  { name: "maa", age: 52 },
  { name: "jay", age: 27 },
  { name: "vikas", age: 25 },
  { name: "chinu", age: 11 },
];


btn.addEventListener("click", function () {
  var a = Math.floor(Math.random() * arr.length);
  
  var c1= Math.floor(Math.random()*256);
  var c2= Math.floor(Math.random()*256);
  var c3= Math.floor(Math.random()*256);

  h1.innerHTML =`name: ${ arr[a].name} <br> age: ${arr[a].age}`;
  main.style.backgroundColor= `rgb(${c1},${c2},${c3})`;
});