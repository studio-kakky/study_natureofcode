class RandomWalk4 extends RandomWalk {
  constructor(initX,initY){
    super(initX,initY);
  }

  step(){
    //現在位置とマウスの角度を計算
    var dir = Math.atan2( mouseY-this.y, mouseX-this.x );

    var choice = Math.random();

    if( choice < 0.5){
      dir = dir;
    }else if( choice < 0.67){
      dir += Math.PI
    }else if( choice < 0.84){
      dir += dir+Math.PI/2
    }else{
      dir += dir-Math.PI;
    }

    this.x += Math.cos(dir);
    this.y += Math.sin(dir);
  }
}
