//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground

var ground, paper;
var dustbin2,dustbin1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,700,800,20);
	paper= new Paper(300,680,20);
	dustbin1= new Ground(600,640,20,100);
	dustbin2= new Ground(700,640,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();

  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-55});
	}
}




