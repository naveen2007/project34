
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world

var bob1,bob2,bob3,bob4,bob5	
var roof, roof2
var rope1,rope2,rop3,rope4,rope5


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,20,400,30)
	roof2 = new Roof2(800,20,400,30)

	bob1 = new Bob(300,200,30);
	bob2 = new Bob(350,200,30);
	bob3 = new Bob(400,200,30);
	bob4 = new Bob(450,200,30);
	bob5 = new Bob(500,200,30);

	rope1 = new Rope(bob1.body, roof.body,300,0);
	rope2 = new Rope(bob2.body,roof.body,350,0)
	rope3 = new Rope(bob3.body,roof.body,400,0)
	rope4 = new Rope(bob4.body,roof.body,450,0)
	rope5 = new Rope(bob5.body,roof.body,500,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 roof2.display();




  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
		 
}