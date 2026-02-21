const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 50, size: 30, speed: 4 };
let exitDoor = { x: 700, y: 500, size: 40 };

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function update() {
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;

  // Collision with exit
  if (Math.abs(player.x - exitDoor.x) < 30 &&
      Math.abs(player.y - exitDoor.y) < 30) {
    alert("You escaped the facility!");
    player.x = 50;
    player.y = 50;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Exit
  ctx.fillStyle = "yellow";
  ctx.fillRect(exitDoor.x, exitDoor.y, exitDoor.size, exitDoor.size);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
