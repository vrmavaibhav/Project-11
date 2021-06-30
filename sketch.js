var path, boy, leftBoundry, rightBoundry;
var pathImg, boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //Moving Backround
  path = createSprite(200,200);
;  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2;

  // creating boy running
  boy = createSprite(1080,340,30,30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning", boyImg);

//create left boundry
leftBoundry = createSprite(0,0,100,800);
leftBoundry.visible=false;

//Create Right Boundry
rightBoundry = createSprite(410,0,100,800); 
rightBoundry.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  // Boy Moving on X Axis With Mouse
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundry);
  boy.collide(rightBoundry);

  //code to reset the backround
  if (path.y > 400) {
    path.y = height / 2;
  }

drawSprites()
  
}
