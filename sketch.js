var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var Oranleaves,OranleavesImg 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png")
  OranleavesImg = loadImage ("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples() {
  apple=createSprite (random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.1
  apple.velocityY = 3 
}

function createOranleaves() {
  Oranleaves=createSprite (random(50,350),40,10,10)
  Oranleaves.addImage ( OranleavesImg)
  Oranleaves.scale = 0.1
  Oranleaves.velocityY = 3
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

var select_sprite = Math.round(random(1,2))
if (frameCount % 80 == 0) {
  if (select_sprite == 1) {
  createApples () 
  }
  else {
  createOranleaves ()
  } 
  } 

rabbit.x = mouseX
}