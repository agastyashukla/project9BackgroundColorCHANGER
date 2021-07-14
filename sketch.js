
function setup() {
  createCanvas(400,400);
  
  background("brown");
 
 var box =createSprite(200,200,50,50);
  box.shapeColor="white";
} 


function draw() 
{ 
  if(keyIsDown(RIGHT_ARROW)) {
    background("red");
  }

  if(keyIsDown(LEFT_ARROW)) {
    background("black");
  }

  if(keyIsDown(UP_ARROW)) {
    background("blue");
  }

  if(keyIsDown(DOWN_ARROW)) {
    background("green");
  }

  drawSprites();

}




