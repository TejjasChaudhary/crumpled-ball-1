class Dustbin {
    constructor(x,y,w,h) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(50,175,100);
    rect(pos.x, pos.y, this.w,this.h);
    }
  };