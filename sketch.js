var paddle;
var ball;

function setup() {
    createCanvas(720, 500);
    paddle = new Paddle();
    ball = new Ball();
}

function draw() {
    background(0);
    ball.update();
    paddle.update();
    ball.show();
    paddle.show();
    
}