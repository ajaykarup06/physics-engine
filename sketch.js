const Engine= Matter.Engine
const Bodies= Matter.Bodies
const World=Matter.World
//namespacing or nickname
var myengine;
var myworld
var object
var ball
function setup() {
  createCanvas(400,400);
  myengine=Engine.create()
  
  //engine creation myengine is the name of engine
var options=
{
  isStatic:true
}
var balloptions=
{
//isStatic:false,
restitution:1
}

  myworld=myengine.world;
  //myworld is equal to myengine the world is given the name of myworld
  object=Bodies.rectangle(200,390,50,50,options);
  ball=Bodies.circle(200,100,20, balloptions);

  World.add(myworld,object);
  World.add(myworld,ball)
  console.log(object)

  //relates rectangle which is an object back to world
}

function draw() {
  background("lightpink");  
  Engine.update(myengine);
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  //rect(200,200,50,50)
  drawSprites();
}