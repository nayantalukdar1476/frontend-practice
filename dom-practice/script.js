var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inner = document.querySelector(".inner");
var grow = 0;

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  var num = 100 + Math.floor(Math.random() * 100);

  var int = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, num);

  setTimeout(() => {
    clearInterval(int);
    btn.style.opacity = 0.6;
    btn.innerHTML = "Downloaded";
  }, num * 100);

  console.log("Download completed in" ,num/10, "sec");
});
