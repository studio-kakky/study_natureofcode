class RandomWalk3 extends RandomWalk {
  constructor(initX,initY){
    super(initX,initY);
  }

  step(){
    var choice = Math.random();

    if( choice < 0.4){
      this.x++;
    }else if( choice < 0.6){
      this.x--;
    }else if( choice < 0.8){
      this.y++;
    }else{
      this.y--;
    }
  }
}
