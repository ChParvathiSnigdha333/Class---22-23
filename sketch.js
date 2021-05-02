const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine , myWorld;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  
  
myEngine = Engine.create();
myWorld = myEngine.world ;

/*var ground_option = {isStatic: true}
var ball_option = {'restitution': 0}
ground = Bodies.rectangle(200,380,30,30, ground_option)
ball = Bodies.circle(200,200,30,ball_option)
World.add(myWorld,ground)
World.add(myWorld,ball) */

box1 = new Box (200,200,30,40)
box2 = new Box (230,100,40,60)
ground = new Ground (200,390,400,10)
}

function draw() {
  background("black");  
  
  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();

 /* rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30) */
}