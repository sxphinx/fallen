var trial = $('#trial'),
    char = $('#character'),
    w = trial.width() - char.width(),
    d = {},
    x = 3;

function newv(v,a,b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) {
  d[e.which] = true; 
});
$(window).keyup(function(e) {
  d[e.which] = false;
});

setInterval(function() {
  char.css({
    left: function(i,v) {
      return newv(v, 37, 39); 
    },
    top: function(i,v) {
      return newv(v, 38, 40); 
    }
  });
}, 20);

// jump function (not used)
/* var character = document.getElementById("character");
document.addEventListener("click",jump);

function jump() {
  if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(removeJump,300);
}

function removeJump() {
    character.classList.remove("animate");
}

var block = document.getElementById("block");

function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over");
    }
}

setInterval(checkDead, 10);
*/
