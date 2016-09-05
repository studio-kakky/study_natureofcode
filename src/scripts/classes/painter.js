class Painter {
  constructor(color, r = 40, dotNum = 5000, dotSize = 1) {
    this.color = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
    this.r = r/2;
    this.dotNum = dotNum;
    this.dotSize = dotSize;

  }

  paint(x, y) {
    noStroke();
    fill(this.color);
    var pos;
    for(var i = 0,l = this.dotNum; i < l; i++){
      pos = this.getDotPos(x, y);
      ellipse(pos.x, pos.y, this.dotSize, this.dotSize);
    }
  }

  getDotPos(x , y) {
    var dotX = x + randomGaussian(0, this.r) - 0;
    var dotY = y + randomGaussian(0, this.r) - 0;
    return {x:dotX, y:dotY};
  }
};
