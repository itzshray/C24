
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1


function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);





	engine = Engine.create();
	world = engine.world;

    paper1 = new Paper(100,295,30);
    World.add(world,paper1)
  

	Rbody=Bodies.rectangle(700,250,20,100,{isStatic:true} );
	World.add(world,Rbody)
	
	Mbody=Bodies.rectangle(600,295,160,20,{isStatic:true} );
	//Matter.Body.setAngle(Mbody,180);
	World.add(world,Mbody)
 Lbody=Bodies.rectangle(500,250,20,100,{isStatic:true} );
 World.add(world,Lbody)
	//Create a Ground

	 ground=Bodies.rectangle(400,300,800,10, {isStatic:true}) ;
      World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  fill("red");
  rect(Lbody.position.x,Lbody.position.y,20,100);
  rect(Rbody.position.x,Rbody.position.y,20,100);
  rect(Mbody.position.x,Mbody.position.y,200,20);
  rect(ground.position.x,ground.position.y,800,10);
  paper1.display();
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-32})
  }
}