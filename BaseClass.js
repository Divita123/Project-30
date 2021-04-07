class BaseClass{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        
        
        this.image=loadImage("pep.png")
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
        var blockPos=this.body.position;	
        push()
        translate(blockPos.x, blockPos.y);
        // rectMode(CENTER);
        rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 0,0,this.width, this.height)
        pop()
      }
}
