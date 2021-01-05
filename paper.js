class Paper  {
    constructor(x,y){
     
    var options ={

        isStatic:false,
        restituion:0.3,
        friction:0.5,
        density:1.2

    }
    
    
    this.body = Bodies.rectangle(x,y,width,height,options);
}


display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
    }