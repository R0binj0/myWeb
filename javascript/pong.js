var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 87:
            player1.style.top = "-30px";
            break;
        case 83:
            player1.style.top ="30px";
            break;
        case 38:
            player2.style.top ="-30px";
            break;
        case 40:
            player2.style.top ="30px";
            break;
    }
};