// YOu are trying to defend your castle using towers
// enimies are attacking your castle and you place towers to defend yourself
// 3 enimies
var enemy
var knights
var archers
var wizards
var castle
var towers
var cannonButton
var mortarButton
var machineGunButton
var laserButton
var money
var can1
function preload(){
  cannonImg=loadImage("cannon.png")
  castleImg=loadImage("castle.png")
  CanImg=loadImage("CannonBall.png")
  EnemyImg=loadImage("Zergling.png")
}

function setup() {
  createCanvas(displayWidth-40,displayHeight-40);
  castle=createSprite(100, displayHeight/2, 50, 50);
  castle.addImage(castleImg)
  cannonButton=createSprite(300,displayHeight-100,40,60)
  cannonButton.shapeColor=rgb(0,0,0)
  cannonButton.addImage(cannonImg)
  cannonButton.scale=0.1
  mortarButton=createSprite(displayWidth/2-150,displayHeight-100,40,60)
  mortarButton.shapeColor=rgb(0,0,255)
  mortarButton.addImage(cannonImg)
  mortarButton.scale=0.1
  machineGunButton=createSprite(displayWidth/2+150,displayHeight-100,40,60)
  machineGunButton.shapeColor=rgb(0,255,0)
  machineGunButton.velocityY=5
  machineGunButton.addImage(cannonImg)
  machineGunButton.scale=0.1
  laserButton=createSprite(displayWidth-300,displayHeight-100,40,60)
  laserButton.shapeColor=rgb(255,0,0)
  laserButton.velocityY=5
  laserButton.velocityX=5
  laserButton.addImage(cannonImg)
  laserButton.scale=0.1
  can1=createSprite(300,displayHeight-200,10,10)  
  can1.visible=false
  can1.addImage(CanImg)
  can1.scale=0.1
  can2=createSprite(300,displayHeight-200,10,10)  
  can2.visible=false
  can2.addImage(CanImg)
  can2.scale=0.1
  can3=createSprite(300,displayHeight-200,10,10)  
  can3.visible=false
  can3.addImage(CanImg)
  can3.scale=0.1
  can4=createSprite(300,displayHeight-200,10,10)  
  can4.visible=false
  can4.addImage(CanImg)
  can4.scale=0.1
  enemies=createGroup()
}

function draw() {
  edges=createEdgeSprites()

  background(247,247,247);
  cannonButton.y=mouseY
  can1.y=cannonButton.y
  //can1.y=mouseY
 // can1.x=mouseX

  SpawnEnimies()
  if(mousePressedOver(cannonButton)){
    can1.velocityX=random(5,9)
    can1.velocityY=random(8,-7)
   //can1.y=300
    can1.x=mouseX
  can1.y=mouseY
  can1.visible=true
   
  } 
  

    mortarButton.pointTo(random(displayWidth/4,displayHeight/8),random(displayWidth/2),displayWidth/7)
    if(mousePressedOver(mortarButton)){
      can2.visible=true
     // can1.y=mortarButton.y;
      can2.x=mortarButton.x
      can2.velocityX=random(5,9)
      can2.velocityY=random(8,-7)
     //can1.y=300
   
    }
    
    machineGunButton.bounceOff(edges)
    if(mousePressedOver(machineGunButton)){
      can3.visible=true
     // can1.y=mortarButton.y;
      can3.x=machineGunButton.x
      can3.velocityX=random(5,9)
      can3.velocityY=random(8,-7)
     //can1.y=300
   
    }
    machineGunButton.bounceOff(edges)
    if(mousePressedOver(machineGunButton)){
      can4.visible=true
     // can1.y=mortarButton.y;
      can4.x=machineGunButton.x
      can4.velocityX=random(5,9)
      can4.velocityY=random(8,-7)
     //can1.y=300
   
    }
    laserButton.bounceOff(edges)
    if(can1.isTouching(enemies)||can2.isTouching(enemies)||can3.isTouching(enemies)||can4.isTouching(enemies)){
      enemies.destroyEach()

    }
 
  drawSprites();
}

//spawn the enimies in waves and they will get stronger every wave
function SpawnEnimies(){
if(frameCount%50===0){
enemy=createSprite(displayWidth-100,displayHeight,10,10)
enemy.y=Math.round(random(displayHeight/8,displayHeight/2+250))
enemy.pointTo(castle.x,castle.y)
enemy.setSpeedAndDirection(5)
enemies.add(enemy)
enemy.addImage(EnemyImg)
enemy.scale=0.1
}
}