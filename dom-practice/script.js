var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x +'px';
    cursor.style.top = dets.y + 'px';
})
main.addEventListener("dblclick", (dets)=>{
    console.log(dets);
})
main.addEventListener("mouseleave",()=>{
    cursor.style.opacity = 0;
})
main.addEventListener("mouseenter",()=>{
    cursor.style.opacity = 1;
})
