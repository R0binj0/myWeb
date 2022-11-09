const dino = document.getElementById("dino");
const block = document.getElementById("block");
const game = document.getElementById("game");
const button = document.getElementById("show-more");
const rwindow = document.getElementById("window");
const restart = document.getElementsByClassName("close")[0];
var cancel = setInterval(scoreCount, 1000);
var score = document.getElementById('score');
var scorebegin = 0;
var pause = false

restart.onclick = function() {
  rwindow.style.display = "none";
  window.location.reload();
}

function jump() {
    if (dispatchEvent.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

function scoreCount() {
    if (!pause){
        scorebegin += 1;
        score.innerHTML = scorebegin;
    }
}

let checkAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft > 0 && blockLeft < 80 && dinoTop >= 130) {
        dino.style.animationPlayState = "paused";
        block.style.animationPlayState = "paused";
        rwindow.style.display = "block";
        pause = true;
    }
});
document.addEventListener("keyup", function (event) {
    jump();
});