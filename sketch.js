
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
monkey = createSprite(80,500,20,20);  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.2; 
ground = createSprite(400,550,1200,10);
ground.velocityX=-4;

}


function draw() {
background("lightgreen");
if(ground.x<0)
{
ground.x=ground.width/2;  
}  
if(keyDown("space"))
{
monkey.velocityY=-10;  
}  
monkey.velocityY=monkey.velocityY+0.8


monkey.collide(ground);
  
spawnbanana();  
spawnstone();
drawSprites(); 
}

function spawnbanana() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(30,400));
  banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    }
}

function spawnstone() {
  //write code here to spawn the clouds
   if (frameCount % 200 === 0) {
     stone = createSprite(600,515,40,10);
    
    stone.addImage(obstacleImage);
    stone.scale = 0.3;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
    
    }
}


