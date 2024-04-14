const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitutuion: 0.3,
		friction: 0,
		density: 1.2

	}
	ball = Bodies.circle(50, 665, 10, ball_options)
	World.add(world, ball)

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1250,600,20,120)
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x, ball.position.y, 10, 10)
	ground.show()
	leftSide.show()
	rightSide.show()
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5})
	}
}

