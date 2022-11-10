var pressCount = 0

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