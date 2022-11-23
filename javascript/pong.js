let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let game = document.getElementById("game");
let ball = document.getElementById("ball");
let initial_ball = document.getElementById("ball");
let gameState = 'start';
let player_1_coord = player1.getBoundingClientRect();
let player_2_coord = player2.getBoundingClientRect();
let board_coord = game.getBoundingClientRect();
let initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;
let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);

player1.style.top ="0px";
player2.style.top ="0px";

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    gameState = gameState == 'start' ? 'play' : 'start';
    if (gameState == 'play') {
      requestAnimationFrame(() => {
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
        dxd = Math.floor(Math.random() * 2);
        dyd = Math.floor(Math.random() * 2);
        moveBall(dx, dy, dxd, dyd);
      });
    }
  }
  if (gameState == 'play') {
    switch (event.keyCode) {
      case 87:
          if (player1.style.top != "-150px"){
              player1.style.top = parseInt(player1.style.top) - 30 + "px"
              player_1_coord = player1.getBoundingClientRect();
          }
          break;
      case 83:
          if (player1.style.top != "150px"){
              player1.style.top = parseInt(player1.style.top) + 30 + "px"
              player_1_coord = player1.getBoundingClientRect();
          }
          break;
      case 38:
          if (player2.style.top != "-150px"){
              player2.style.top = parseInt(player2.style.top) - 30 + "px"
              player_2_coord = player2.getBoundingClientRect();
          }
          break;
      case 40:
          if (player2.style.top != "150px"){
              player2.style.top = parseInt(player2.style.top) + 30 + "px"
              player_2_coord = player2.getBoundingClientRect();
          }
          break;
   }
  }
});

function moveBall(dx, dy, dxd, dyd) {
  if (ball_coord.top <= board_coord.top) {
    dyd = 1;
  }
  if (ball_coord.bottom >= board_coord.bottom) {
    dyd = 0;
  }
  if (
    ball_coord.left <= player_1_coord.right &&
    ball_coord.top >= player_1_coord.top &&
    ball_coord.bottom <= player_1_coord.bottom
  ) {
    dxd = 1;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.right >= player_2_coord.left &&
    ball_coord.top >= player_2_coord.top &&
    ball_coord.bottom <= player_2_coord.bottom
  ) {
    dxd = 0;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.left <= board_coord.left ||
    ball_coord.right >= board_coord.right
  ) {
    if (ball_coord.left <= board_coord.left) {
      score_2.innerHTML = +score_2.innerHTML + 1;
    } else {
      score_1.innerHTML = +score_1.innerHTML + 1;
    }
    gameState = 'start';
  
    ball_coord = initial_ball_coord;
    ball.style = initial_ball.style;
    return;
  }
  ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
  ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
  ball_coord = ball.getBoundingClientRect();
  requestAnimationFrame(() => {
    moveBall(dx, dy, dxd, dyd);
  });
}
