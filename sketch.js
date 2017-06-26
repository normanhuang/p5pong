var paddle;
var ball;
var bricks;

function setup() {
    createCanvas(720, 500);
    
    bricks = new Bricks();
    bricks.setup();
    paddle = new Paddle();
    ball = new Ball();
    
}

function draw() {
    background(0);
    
    paddle.pong(ball);
    bricks.pong(ball);
    ball.update();
    paddle.update();
    ball.show();
    paddle.show();
    bricks.show();
}