
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, bin, bimImg;

function preload(){

	bimImg = loadImage("sprites/dustbin.png")

}
	


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ball = new  Paper(120, 200, 10);
	ground = new Ground(600, );

	


	/*binpart1 = new Dustbin(902, 505, 10, 120);
	binpart2 = new Dustbin(962, 565, 130, 10);
	binpart3 = new Dustbin(1024, 505, 10, 120);*/
	
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  
  ball.display();
 // binpart1.display();

  

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:13,y:-13})
	}
}



