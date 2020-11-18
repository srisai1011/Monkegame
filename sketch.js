
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  createCanvas(400,400)
  
  
 
  
    
  //create monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(10,380,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 console.log(ground.x)
  
  foodGroup=new Group();
  obstaclesGroup=new Group();
  
  score=70
}


function draw() {
  
  background("white")
     
  if (frameCount % 60 === 0) {
   banana = createSprite(200,200,40,10);
     banana.y = Math.round(random(10,60));
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;


  }
  if (frameCount % 60 === 0){
   var obstacle = createSprite(350,350,10,40);
   obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   obstacle.addImage(obstacleImage);
  }
  
  
      //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }    
      //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
var survivalTime=0

stroke("white");
textSize(20);
fill("white") 
text("score :"+score, 500,50);  
  
  stroke("black");
textSize(20);
fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime :"+survivalTime, 100,50);
  
  drawSprites();
}

 
 

  