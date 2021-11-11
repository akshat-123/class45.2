var bg,bgImg;
var spacex,spacexImg;
var enemy,enemyImg;
var ammo,ammoImg;
var bullet,bulletImg;
var score;
var enemy1;
var enemy2;
var enemy3;
function preload(){
  
spacexImg = loadImage("spacex.png");
enemyImg = loadImage("enemy1.png");
bulletImg = loadImage("bullet.png");
  bgImg = loadImage("bg.png");
  ammoImg = loadImage("ammo.png");
  enemy1Img = loadImage("enemy1.png");
  enemy2Img = loadImage("enemy2.png");
  enemy3Img = loadImage("enemy3.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  background = createSprite(width,height,600,600);
  background.addImage(bgImg);
  background.scale = 3.5;

  spacex = createSprite(width/2,height/2+200,50,50);
  spacex.addImage(spacexImg);
  spacex.scale = 0.2;



  ammoGroup = new Group();
  bulletGroup = new Group();
enemyGroup = new Group();

var select_enemy = random(0,1);

if(World.frameCount % 100 === 0)
{
  if(select_enemy === 0) {
    enemySprite();
  } else {
    enemy2Sprite();
  }
}

textSize(20);
 textFont("Georgia");
  stroke("red");
   fill("white");

}

function draw() {
  //background(0); 
text("PLAYER SCORE :+score ", width-200,height/4-200 );


  spacex.x=World.mouseX;
  spacex.y=World.mouseY;

  background.velocityY = 3 

  if (background.y > 500){
    background.y = background.height/2;
  }
 // release arrow when space key is pressed
 if (keyDown("space")) {
   createAmmo(spacex.x);
 
}

ammoGroup.collide(enemyGroup, kill);


if(World.frameCount%100===0){
  enemySprite();
}


drawSprites();
}

function enemySprite(){
  enemy = createSprite(random(width,height),0,10,10);
  enemy.addImage(enemyImg);
  enemy.scale = 0.2;
  enemy.velocityY = 0.4;
  enemy.lifetime = 1000;
enemyGroup.add (enemy);

}


function enemy1Sprite(){
  enemy1 = createSprite(random(width,height),0,10,10);
  enemy1.addImage(enemy1Img);
  enemy1.scale = 0.2;
  enemy1.velocityY = 0.4;
  enemy1.lifetime = 1000;
enemy1Group.add (enemy1);

}

function enemy2Sprite(){
  enemy2 = createSprite(random(width,height),0,10,10);
  enemy2.addImage(enemy2Img);
  enemy2.scale = 0.2;
  enemy2.velocityY = 0.4;
  enemy2.lifetime = 1000;
enemy2Group.add (enemy2);

}

function enemy3Sprite(){
  enemy3 = createSprite(random(width,height),0,10,10);
  enemy3.addImage(enemy3Img);
  enemy3.scale = 0.2;
  enemy3.velocityY = 0.4;
  enemy3.lifetime = 1000;
enemy3Group.add (enemy3);

}





// Creating  ammo for spacex
function createAmmo(x) {   
  ammo= createSprite(100, 100, 5, 10);
  ammo.y = 360;
  ammo.x = x;                                           
  ammo.shapeColor = "red";
  ammo.velocityY = -5;
  ammo.lifetime = 1000;
  ammoGroup.add(ammo);

}


// Creating  bullet for enemy
function createBullet(y) {   
  bullet= createSprite(200, 100, 5, 10);
  bullet.x = 260;
  bullet.y = y;                                           
  bullet.shapeColor = "green";
  bullet.velocityY = 5;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);

}



function Kill(ammo,enemy){
   ammo.destroy();
   enemy.destroy();


    score = score +2;
}


