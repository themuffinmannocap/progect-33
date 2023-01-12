const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snowImg,engine,world;
var snow = []
function preload() {
    snowImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(snowImg);  
  Engine.update(engine);
if(frameCount%5 == 0){
  snow.push(new Snow(random(0,800),0,20))
}
for(var i = 0; i < snow.length;i++){
  snow[i].display()
}
  drawSprites();
}

