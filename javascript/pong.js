var canvas = document.querySelector("canvas");
var l = canvas.getContext('2d');
var x = Math.floor(Math.random() * innerWidth);
var y = Math.floor(Math.random() * innerHeight);
var vx = Math.floor(Math.random() * 20);
var vy = Math.floor(Math.random() * 4);

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 87:
            document.getElementById("player1").style.top ="-30px";
            break;
        case 83:
            document.getElementById("player1").style.top ="30px";
            break;
        case 38:
            document.getElementById("player2").style.top ="-30px";
            break;
        case 40:
            document.getElementById("player2").style.top ="30px";
            break;
    }
};

function move() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    requestAnimationFrame(move);

    l.clearRect(0, 0, innerWidth, innerHeight);
    l.beginPath();
    l.strokeStyle = "white";
    l.arc(x, y, 20, 0, Math.PI * 2, false);
    l.stroke();
    
    if (20 + x > innerWidth)
        vx = 0 - vx;

    if (x - 20 < 0)
        vx = 0 - vx;

    if (y + 20 > innerHeight)
        vy = 0 - vy;

    if (y - 20 < 0)
        vy = 0 - vy;

    x = x + vx;
    y = y + vy;

}
move();
