class paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      
      
        }
        this.x=x;
        this.y=y;
      this.body = Matter.Bodies.circle(x,y,r/2,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };