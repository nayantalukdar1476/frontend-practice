var btn = document.querySelector("button");
var main = document.querySelector("main");


var arr = ["hello,I'm nayan","i'm a web developer",'vikas mera sab kuch hai ',"chinu meri duniya hai","me sheriyans coding school se padti hu","mujhe coding psnd hai","harsh bhaiya ki jay ho","mca chl rha hai mera"];

btn.addEventListener("click",()=>{
  var h1= document.createElement("h1");

  var a = Math.floor(Math.random()*arr.length);
  var x = Math.random()*80;
  var y = Math.random()*80;
  var rotate = Math.random()*360;
  var scl = Math.random()*3;
  
  var c1 = Math.floor(Math.random()*256)
  var c2 = Math.floor(Math.random()*256)
  var c3 = Math.floor(Math.random()*256)

  h1.innerHTML= arr[a];
  h1.style.color= `rgb(${c1},${c2},${c3})`;
  h1.style.position= "absolute";
  h1.style.textWrap= "nowrap";
  h1.style.top= x+"%";
  h1.style.left= y+"%";
  h1.style.rotate= rotate +"deg";
  h1.style.scale= scl;

  main.appendChild(h1);
})