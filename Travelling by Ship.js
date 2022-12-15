var sea,ship,barrier;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");


  //Stop barrier
  barrier=createSprite(350,200,20,400);

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  //Ship
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

 
  

}


function draw() {
  background(0);
  if(keyDown("space")){
  sea.velocityX = -3
  barrier.velocityX=-0.7
  }

  if(keyDown("enter")){
    sea.velocityX = 0 
    }
    
  if(barrier.isTouching(ship))
  { sea.velocityX=0
    barrier.velocityX=0
  }  
    

  drawSprites();
}
