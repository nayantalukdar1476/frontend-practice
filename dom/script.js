let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = ['nayan', 'talukdar', 'vikas', 'shukla', 'chinu', 'hey guys', 'im fine what about you buddy','im from indore ', 'learning js from scratch', 'nonnu is very understanding'];

btn.addEventListener("click" , function(){
  let h1 = document.createElement("h1");
  let x = Math.random()*100;
  let y = Math.random()*100;
  let rot = Math.random()*360;
  let scl = Math.random()*2;
  
  let c1 = Math.floor(Math.random()*256);
  let c2 = Math.floor(Math.random()*256);
  let c3 = Math.floor(Math.random()*256);

  let a = Math.floor(Math.random()*arr.length);

  h1.innerHTML = arr[a];
  h1.style.position = 'absolute';
  h1.style.top = x+'%';
  h1.style.left = y+'%';
  h1.style.rotate = rot + 'deg';
  h1.style.scale = scl;
  h1.style.color = `rgb(${c1},${c2},${c3})`;

  main.appendChild(h1)
})