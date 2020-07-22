var car, wall, speed, weight, deformation;

function setup() {
  createCanvas(1600,400);
 car = createSprite(200, 200, 100, 50);
 wall = createSprite(1500, 200, 50, 200);
speed = random (55, 90);              
weight = random (400, 1500);
deformation = (0.5 * speed * speed * weight)/22500;
car.velocityX = speed;

}

function draw() {
  background(0,0,0);  

if(car.collide(wall)  )
{
    car.velocityX = 0;
  if (deformation >= 180){
  car.shapeColor = color(255,0,0);
} 
  else if (deformation < 180 && deformation > 100){
    car.shapeColor = color(230, 230, 0);
  }
  else if (deformation <= 100){
  car.shapeColor = color(0, 250, 0);
    }
  } 
  
  drawSprites();
}
