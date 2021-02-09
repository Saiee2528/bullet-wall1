var wall,thickness;
var bullet,speed,weight,damage;
function setup(){

    createCanvas(1600,400);
    thickness=random(22,83);
    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);
    bullet=createSprite(600,200,25,10);
    speed=random(223,321);
    weight=random(30,52);

}
function draw()
{
   background(0,0,0);
  
   bullet.x=World.mouseX;
   bullet.y=World.mouseY;
   if(hasCollided(bullet,wall))
   {
       bullet.velocityX=0;
       damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
       if(damage>10)
       {
           wall.shapeColor=color(255,0,0);
       }
       if(damage<10)
       {
        wall.shapeColor=color(0,255,0);
       }
      
   }
   drawSprites();
}
function hasCollided(lbullet,lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true;
    }
    return false;
}
