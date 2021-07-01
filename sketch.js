/////////////////////////////////////Code Started///////////////////////////

//Variables created with value
var Engine = Matter.Engine,

  //Variables created with value
  World = Matter.World,

  //Variables created with value
  Events = Matter.Events,

  //Variables created with value
  Bodies = Matter.Bodies;

//Variables created with array
var particles = [];

//Variables created with array
var plinkos = [];

//Variables created with array
var divisions = [];

//Variables created with value
var divisionHeight = 300;

//Variables created with value
var score = 0

//Pre-defined function
function setup() {

  //Created canvas
  createCanvas(800, 800);

  //Created Engine inside engine
  engine = Engine.create();

  //Added world to engine
  world = engine.world;

  //Created object
  ground = new Ground(width / 2, height, width, 20);

  //Create division objects
  for (var k = 0; k <= 900; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  //Create 1st row of plinko objects
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  //Create 2nd row of plinko objects
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  //Create 3rd row of plinko objects
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  //Create 4th row of plinko objects
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

  //Create particle objects
  if (frameCount % 60 === 0) {
    particles.push(new Particles(random(width / 2 - 10, width / 2 + 10)), 10, 10)
  }

}

//Pre-defined function: (repeatation)
function draw() {

  //Set canvas color(background color)
  background("black");

  //Set text size as 20 pixels
  textSize(20)

  //Updated the engine
  Engine.update(engine);

  //Displayed the object
  ground.display();

  //Display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //Display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //Display the paricles 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();

  }
  
}

/////////////////////////////////////Code Ended///////////////////////////