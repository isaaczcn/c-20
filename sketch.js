
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var circulolegal;
var retangulodaamizade;
var quadradodomau;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);	

	engine = Engine.create();

	world = engine.world;

	var config={
		isStatic: true
	}
	
	chao = Bodies.rectangle(670, 500, windowWidth, 200, config);
	World.add(world, chao)

	retangulodaamizade = Bodies.rectangle(170, 0, 299, 200);
	World.add(world, retangulodaamizade)

	quadradodomau = Bodies.rectangle(470, 0, 200, 200);
	World.add(world, quadradodomau)

	circulolegal = Bodies.circle(1070, 0, 100);
	World.add(world, circulolegal)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  rect(chao.position.x, chao.position.y, windowWidth, 200);

  rect(quadradodomau.position.x, quadradodomau.position.y, 200, 200);

  rect(retangulodaamizade.position.x, retangulodaamizade.position.y, 299, 200);

  ellipse(circulolegal.position.x, circulolegal.position.y, 200)
}

