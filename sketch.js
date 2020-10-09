var bullet,wall;
var speed,weight,thickness;

function setup() {
  speed=random(30,52); 
  weight=random(223,321);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=color("white");

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  
  createCanvas(1600,400);
  
}

  function draw() {
    background(255,255,255);
    if(hasCollided(bullet,wall)){
      bullet.velocity=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }

      if(damage<10){

        wall.shapeColor=color(0,255,0);
      }
    }
  
}
  function hasCollided(bullet,wall){

      bulletRightEdge=bullet.x+bullet.width;
      wallLeftEdge=wall.x;
      if(bulletRightEdge>wallLeftEdge){

      return true;
    }
    return false;
  }