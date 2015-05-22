class RandomWalk2 extends RandomWalk{
  consotructor(initx,inity){
    super(initx,inity);
  }
  step(){
    var stepx = parseInt( random(3) ) - 1;
    var stepy = parseInt( random(3) ) - 1;

    this.x += stepx;
    this.y += stepy;
  }
}
