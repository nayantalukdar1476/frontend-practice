let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");
let h4 = document.querySelector("h4");
let span = document.querySelector("h4 span");
let a = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";

  let num = 50 + Math.floor(Math.random()*100);

  let int = setInterval(function () {
    a++;
    h2.innerHTML = a + "%";
    inner.style.width = a + "%";
    h4.style.scale = 1;
    span.innerHTML = num/10;
  }, num);

  setTimeout(function () {
    clearInterval(int);
    btn.style.opacity = 0.5;
    btn.innerHTML = "Downloaded";
    h4.innerHTML = '<a href="#">Open File</a>';
  }, num*100);
});
