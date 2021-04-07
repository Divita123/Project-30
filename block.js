class Block extends BaseClass {
  constructor(x, y,w,h){
    super(x,y,w,h);
    this.image = loadImage("pep.png");
    this.visibility=255;
  };
display(){
 
  if(this.body.speed<7){
  super.display();

  }
  else {
    World.remove(world,this.body)
    push();
    this.visibility=this.visibility-5
    tint(255,this.visibility)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop();
  }
}
};