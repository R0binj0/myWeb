const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const ball = document.getElementById("ball")
var x = Math.floor(Math.random() * 500);
var y = Math.floor(Math.random() * 350);
var vx = Math.floor(Math.random() * 20);
var vy = Math.floor(Math.random() * 4);


player1.style.top ="0px";
player2.style.top ="0px";

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 87:
            player1.style.top = parseInt(player1.style.top) - 30 + "px"
            break;
        case 83:
            player1.style.top = parseInt(player1.style.top) + 30 + "px"
            break;
        case 38:
            player2.style.top = parseInt(player2.style.top) - 30 + "px"
            break;
        case 40:
            player2.style.top = parseInt(player2.style.top) + 30 + "px"
            break;
    }
};
function move() {
    requestAnimationFrame(move);
    
    if (20 + x > 500)
        vx = 0 - vx;

    if (x - 20 < 0)
        vx = 0 - vx;

    if (y + 20 > 350)
        vy = 0 - vy;

    if (y - 20 < 0)
        vy = 0 - vy;

    x = x + vx;
    y = y + vy;

}
move()