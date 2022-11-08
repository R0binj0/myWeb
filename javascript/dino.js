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

button.onclick = function () {

	if(game.className == "open"){
		game.className = "";
		button.innerHTML = "START";
	} else {
		game.className = "open";
		button.innerHTML = "END";
	}

};
/*let checkAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft > 0 && blockLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = "paused";
        block.style.animationPlayState = "paused";
        alert("Whoops! Game Over :(");
        window.location.reload();
    }
}, 10);*/
document.addEventListener("keydown", function (event) {
    jump();
});