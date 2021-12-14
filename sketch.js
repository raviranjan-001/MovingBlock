var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background("black");
  if(keyDown("up_arrow")){
    box.position.y = box.position.y - 2;
  }

  if(keyDown("down_arrow")){
    box.position.y = box.position.y + 2;
  }

  if(keyDown("left_arrow")){
    box.position.x = box.position.x - 2
  }

  if(keyDown("right_arrow")){
    box.position.x = box.position.x + 2
  }

  drawSprites();
}




