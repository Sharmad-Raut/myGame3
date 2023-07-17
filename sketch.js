//.
var tower,towerImg
var player,playerAnimation
var zombie,zombieImg
var angle=angle


function preload(){

  towerImg=loadImage("tower.png");
  playerAnimation=loadAnimation("ani1.png","ani2.png");
  arrow=loadImage("arro.png");
  zombieImg= loadImage("zom.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight-122);

  tower=createSprite(203,displayHeight-365,84,167)
  tower.addImage("tower",towerImg)

  player=createSprite(227,displayHeight-510)
  player.addAnimation("player",playerAnimation)
  

  
  /*if (arrowIsTouching(zombie)){
  
  }*/

  
}

function draw() {
  background("black");  
  drawSprites();
  zombies()

  if(keyDown("space")){

    var arrow=createSprite(player.x,player.y)
    
    arrow.velocityX=6
    arrow.velocityY=0.5
    arrow .scale=0.1
  }
}

function zombies(){

  if(frameCount % 140 === 0){
   var zombie=createSprite(displayWidth,displayHeight-238);
   zombie.addImage("zombie",zombieImg);
   zombie.velocityX=-3;
   zombie.y=Math.round(random(displayHeight-200,displayHeight-600));
   zombie.scale=1.5
   
    
  }
}