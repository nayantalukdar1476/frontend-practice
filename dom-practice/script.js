var h2 = document.querySelector("h2");
document.body.addEventListener("keydown",function(dets){
    h2.innerHTML = dets.code;
})
