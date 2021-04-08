
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;
var bob ; 

function preload()
{
// 	bob_img = loadImage('assets/bob.png')
}

function setup() {
	createCanvas(800, 700);
	var width = 800;
	var height = 700;
	var diameter = 50;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2 , height/4 , width , 20);

	bob1 = new Bob(width/2  - diameter*2, height/1.3 , diameter);
	bob2 = new Bob(width/2  + diameter, height/1.3 , diameter);
	bob3 = new Bob(width/2  - diameter*2, height/1.3 , diameter);
	bob4 = new Bob(width/2  + diameter, height/1.3 , diameter);

	rope1 = new Rope(bob1.body , roof.body , -diameter, 0);
	rope2 = new Rope(bob2.body , roof.body , 0, 0);
	rope3 = new Rope(bob3.body , roof.body , -diameter*2 , 0);
	rope4 = new Rope(bob4.body , roof.body , +diameter , 0);


	ground = new Roof(width/2 , height-10 , width , 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  ground.display();

  fill(0,0,255);
  textSize(30);
  text('Press UP to see it in action !!' , 800/2 - 100, 700/4 - 30);

  drawSprites();
 
}


function keyPressed(){
	if (keyCode == UP_ARROW || keyCode == 32){
		Matter.Body.applyForce(bob3.body , bob1.body.position ,  {x:-50 , y:-45})
	}
}
