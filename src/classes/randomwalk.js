class RandomWalk {
  constructor(initX,initY){
    this.x = initX;
    this.y = initY;
  }

  display(){
    stroke(0);
    point(this.x,this.y);
  }

  step(){
    var choice = parseInt( Math.random()*4 );

    if( choice === 0){
      this.x++;
    }else if( choice === 1){
      this.x--;
    }else if( choice === 2){
      this.y++;
    }else{
      this.y--;
    }
  }
}
