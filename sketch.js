var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x= World.mouseX;

  drawSprites();

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 70 === 0){
    if(select_sprites == 1){
apple = createSprite(random(50,350),50,20,20);
apple.x = Math.round(random(50,350));
apple.radius=5;
apple.velocityY = 4;
apple.lifetime= 400;

  }
  else {
    leaf = createSprite(random(50,350),50,10,20);
    leaf.x = Math.round(random(50,350));
    leaf.velocityY= 4;
 leaf.lifetime= 400;
  }
}


}

