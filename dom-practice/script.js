let piano = document.querySelector(".piano");

let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let keyBoard = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];

notes.forEach((val, index) => {
  let key = document.createElement("div");
  key.classList.add("key");
  
  key.addEventListener("click", function () {
      let musicName = val.replace("#", "-sharp");
      let audio = new Audio(`music/${musicName}.mp3`);
      audio.play();
    });
    
    key.dataset.note = val;
    key.dataset.key = keyBoard[index];

    key.addEventListener("mousedown", function(){
        key.classList.add("active");
    })
    key.addEventListener("mouseup", function(){
        key.classList.remove("active");
    })
    key.addEventListener("mouseleave", function(){
        key.classList.remove("active");
    })


    if (val.includes("#")) {
        key.classList.add("black");
        
        let classname = val.replace("#", "-sharp");
        classname = classname.toLowerCase();
        key.classList.add(classname);
    } else {
        key.classList.add("white");
    }
        
    let span = document.createElement("span");
    span.textContent = val;
    piano.appendChild(key);
    key.appendChild(span);
});


document.addEventListener("keydown", (a) => {
    let key = document.querySelector(`[data-key = "${a.key}"]`);
    if (!key) return;
    key.classList.add("active");
    let note = key.dataset.note.replace("#", "-sharp");
    let audio = new Audio(`music/${note}.mp3`);
    audio.play();
});
document.addEventListener("keyup", (a) => {
    let key = document.querySelector(`[data-key = "${a.key}"]`);
    if (!key) return;
    key.classList.remove("active");
});
