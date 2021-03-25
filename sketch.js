
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobRadius=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/7,width/3,20);

	startBobPosX=320;
	startBobPosY=height-200;
//	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
//	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
//	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
//	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	
	bob1 = new Bob(startBobPosX,startBobPosY,bobRadius);
	bob2 = new Bob(startBobPosX+bobRadius,startBobPosY,bobRadius);
	bob3 = new Bob(startBobPosX+2*bobRadius,startBobPosY,bobRadius);
	bob4 = new Bob(startBobPosX+3*bobRadius,startBobPosY,bobRadius);
	bob5 = new Bob(startBobPosX+4*bobRadius,startBobPosY,bobRadius);

	rope1= new Rope(bob1.body,roof.body,-bobRadius*2,0);
	rope2= new Rope(bob2.body,roof.body,-bobRadius,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,bobRadius,0);
	rope5= new Rope(bob5.body,roof.body,bobRadius*2,0);
}


function draw() {
  
  background(255);
  Engine.update(engine);
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
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}



