const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
  girl_img=loadImage("girl.png");
  ground5_img=loadImage("ground5.png");
  bg=loadImage("bg.png");
  message_img=loadImage("message.png");
}
function setup() {
  createCanvas(1520,750);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,745,3000,20);
  ground2=new Ground(1520,375,40,3000);
  ground3=new Ground(0,375,40,3000);
  ground4=new Ground(450,0,3000,40);
 // ground5=new Ground(250,654,250,190);
  stand1 = new Stand(795,600,250,10);
  stand2 = new Stand(991,350,250,10);
  Hang = new Stand(992,415,15,140);
  Hang2 = new Stand(796,690,15,190);
  Hang3 = new Stand(992,490,60,15);
  Hang4 = new Stand(992,502,80,15);
  Hang5 = new Stand(795,717,60,15);
  Hang6 = new Stand(795,727,80,15);
  
  //level one
  block1 = new Block2(700,515,30,40);
  block2 = new Block2(730,515,30,40);
  block3 = new Block2(760,515,30,40);
  block4 = new Block2(790,515,30,40);
  block5 = new Block2(820,515,30,40);
  block6 = new Block2(850,515,30,40);
  block7 = new Block2(880,515,30,40);
  block8 = new Block(730,465,30,40);
  block9 = new Block(760,465,30,40);
  block10 = new Block(790,465,30,40);
  block11 = new Block(820,465,30,40);
  block12 = new Block(850,465,30,40);
  block13 = new Block2(760,425,30,40);
  block14 = new Block2(790,425,30,40);
  block15 = new Block2(820,425,30,40);
  block16 = new Block(790,385,30,40);
  block17 = new Block(900,290,30,40);
  block18 = new Block(930,290,30,40);
  block19 = new Block(960,290,30,40);
  block20 = new Block(990,290,30,40);
  block21 = new Block(1020,290,30,40);
  block22 = new Block(1050,290,30,40);
  block23 = new Block(1080,290,30,40);
  block24 = new Block2(930,250,30,40);
  block25 = new Block2(960,250,30,40);
  block26 = new Block2(990,250,30,40);
  block27 = new Block2(1020,250,30,40);
  block28 = new Block2(1050,250,30,40);
  block29 = new Block(960,210,30,40);
  block30 = new Block(990,210,30,40);
  block31 = new Block(1020,210,30,40);
  block32 = new Block2(990,170,30,40);
  polygon=new Polygon(265,318,20);  
  chain1 = new Chain(polygon.body,{x:265,y:318});

  message=createSprite(750,-150,20,20);
  message.addImage(message_img);
  message.velocityY=2;
  messageBox=createSprite(750,300,1,1);
}
function draw() {
  background(bg); 
  if (message.isTouching(messageBox)){
    message.velocityY=-2;
  }
  imageMode(CENTER);       
  textSize(20);
  fill("lightyellow");
  Hang.display();
  Hang2.display();
  Hang3.display();
  Hang4.display();
  Hang5.display();
  Hang6.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  chain1.display();
   // text("X"+mouseX+","+"Y"+mouseY,500,100);
    imageMode(CENTER);       
    image(ground5_img ,350,630,500,200);
    image(girl_img ,350,427,200,300);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block32.display();
  polygon.display();
  ground3.display();
  ground4.display();
  ground2.display();
  ground.display();
 // ground5.display();
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  
}
function mouseReleased(){
  chain1.fly()
}
function keyPressed(){
  if (keyCode===32){
      chain1.attach(polygon.body);
  }
}
 