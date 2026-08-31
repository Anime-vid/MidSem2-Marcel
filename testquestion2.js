let ball
let floor
function setup(){
 createCanvas(600, 400);
 background(220);
}

function draw() {
background(220)

world.gravity.y = 50;
if (mouse.presses()) {
    ball = new Sprite(mouse.x,mouse.y,50)
    ball.mass = 10;
    ball.bounciness = 0.5
}
floor = new Sprite(x)
}

