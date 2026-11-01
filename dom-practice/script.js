var img = document.querySelector("img");
var like = document.querySelector("i")

img.addEventListener('dblclick',()=>{
  like.style.opacity= "1";    
  like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";
  
  setTimeout(() => {
    like.style.transform = "translate(-50%,-400%) scale(1) rotate(60deg)";    
  }, 800);
  
  setTimeout(() => {
    like.style.opacity= "0";    
  }, 1000);
  
  setTimeout(() => {
    like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";    
  }, 1200);
})