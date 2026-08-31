let ball
function setup(){
 createCanvas(600, 400);
 background(220);
}
function draw() {

if (mouse.presses()) {
    ball = new Sprite(mouse.x,mouse.y,50)
    ball.mass = 10
}
}
