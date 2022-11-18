const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const ball = document.getElementById("ball")

player1.style.top ="0px";
player2.style.top ="0px";

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 87:
            if (player1.style.top != "-150px"){
                player1.style.top = parseInt(player1.style.top) - 30 + "px"
            }
            break;
        case 83:
            if (player1.style.top != "150px"){
                player1.style.top = parseInt(player1.style.top) + 30 + "px"
            }
            break;
        case 38:
            if (player2.style.top != "-150px"){
                player2.style.top = parseInt(player2.style.top) - 30 + "px"
            }
            break;
        case 40:
            if (player2.style.top != "150px"){
                player2.style.top = parseInt(player2.style.top) + 30 + "px"
            }
            break;
    }
};
