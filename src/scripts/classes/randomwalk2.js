class RandomWalk2 extends RandomWalk{
  constructor(initx,inity){
    super(initx,inity);
  }
  step(){
    var stepx = parseInt( Math.random()*3 ) - 1;
    var stepy = parseInt( Math.random()*3 ) - 1;

    this.x += stepx;
    this.y += stepy;
  }
}
