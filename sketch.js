
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy;
var obstacle,obstacleImage;
var ground,invisibleGround,groundImage;


var gameover, restart;


function preload(){
 
   boy =   loadAnimation("boy1.jpg");
    
   obstacle1 = loadImage("obstacle1.png");

   groundImage = loadImage("ground1.png");

   gameoverImg = loadImage("gameover.png");
   restartImg = loadImage("restart.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);


boy = createSprite(50,180,20,50);
  
  boy.addAnimation("boy1.jpg");
   boy.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground1.png",groundImage);
  ground.x = ground.width /2;
  
  
  gameover = createSprite(300,100);
  gameover.addImage(gameoverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameover.scale = 0.5;
  restart.scale = 0.5;

  gameover.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}


function draw() {
   background(250);
     
  
      
     if(touches.length> 0 || keyDown("SPACE") && boy.y >= height-120){
      boy.velocityY= -10;
      touches=[];
     }
     
      if(keyDown("space") && boy.y >= 159) {
        boy.velocityY = -12;
      }
    
      boy.velocityY = boy.velocityY + 0.8
    
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
      boy.collide(invisibleGround);
      if(boy.isTouching(obstacle)){
      gameState = END;
   
      }
   
        
   else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;

   ground.velocityX = 0;
   boy.velocityY = 0;
   
   if(mousePressedOver(restart)) {
      reset();
   }
  }
   drawSprites();
}
function spawnObstacles() {
   if(frameCount % 60 === 0) {
     var obstacle = createSprite(600,165,10,40);
     //obstacle.debug = true;
     obstacle.velocityX = -(6 + 3*score/100);
     
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
     }

     obstacle.scale = 0.5;
     obstacle.lifetime = 300;

     
   }
}

