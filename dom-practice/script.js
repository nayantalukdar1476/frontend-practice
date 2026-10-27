var h1 = document.querySelector("h1");
var btn = document.querySelector("button");



btn.addEventListener("click", function () {
  var arr= ['nayan','vikas','nay','chinnu','chinni','nonnu','shintu','jaan'];
  var a= Math.floor(Math.random()*arr.length)
  h1.innerHTML= arr[a]
  
});
