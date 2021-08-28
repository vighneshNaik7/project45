var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png");
o1=loadImage("assets/obsTop1.png");
o2=loadImage("assets/obsTop2.png");


balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(1200,400)
//background image
bg = createSprite(500,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
           Obstacle1();

          
   
        drawSprites();
        
}
function Obstacle1(){
  if(frameCount%60===0){

  

  var obstacle=createSprite(1200,10,1,1);
  obstacle.y=random(10,100);
  obstacle.velocityX=-3
  var rand=Math.round(random(1,2));
  switch(rand){
    case 1: obstacle.addImage(o1);
    break;
    case 2:obstacle.addImage(o2);
    break;
    default : break;
  }
  obstacle.scale=0.08;

  }

  
  
}