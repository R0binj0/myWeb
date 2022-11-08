const dino = document.getElementById("dino");
const block = document.getElementById("block");
const game = document.getElementById("game");
const button = document.getElementById("show-more");

function jump() {
    if (dispatchEvent.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

let checkAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft > 0 && blockLeft < 50 && dinoTop >= 150) {
        block.style
        alert("Game Over :(");
        window.location.reload();
    }
}, 10);
document.addEventListener("keydown", function (event) {
    jump();
});