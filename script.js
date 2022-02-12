const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;

const keys = [];

const player = {
    x: 500,
    y: 500,
    width: 600,
    height: 600,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "ScroobiSprite.png";
const backround = new Image();
backround.src = "backround.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 200, 200);
    movePlayer();
    requestAnimationFrame(animate);
}
animate();
setInterval(function(){
ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 200, 200);
movePlayer();
handlePLayerFrame();
}, 60);

window.addEventListener('keydown',  function(e) {
	keys[e.keyCode] = true;
    player.moving = true
});

window.addEventListener('keyup',  function(e) {
	delete keys[e.keyCode];
    player.moving = false
});

function movePlayer(){
    if (keys[87] && player.y > 0){
        player.y -= player.speed;
        player.frameY = 2;
}
    if (keys[65] && player.x > 0){
    player.x -= player.speed;
    player.frameY = 3;
}
    if (keys[83] && player.y < canvas.height - player.height){
    player.y += player.speed;
    player.frameY = 0;

}
    if (keys[68] && player.x < canvas.width - player.width){
    player.x += player.speed;
    player.frameY = 1;
    }
}
function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
}
