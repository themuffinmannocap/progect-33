class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        
        this.r = r;
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}