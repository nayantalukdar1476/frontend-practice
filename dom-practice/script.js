let img = document.querySelector("img");
let i = document.querySelector("i");

img.addEventListener("dblclick", function () {
  i.style.opacity = 1;
  i.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  
  setTimeout(function(){
      i.style.transform = "translate(-50%, -400%) scale(1) rotate(50deg)";
    }, 600);
    
    setTimeout(function(){
      i.style.opacity = 0;
  }, 800);
    
    
    setTimeout(function(){
      i.style.transform = "translate(-50%, -50%) scale(1) rotate(-50deg)";
  }, 1000);
    
});
