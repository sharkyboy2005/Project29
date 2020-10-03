function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(300, 300, 100, 20);
  platform = new Ground(500, 150, 100, 20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}