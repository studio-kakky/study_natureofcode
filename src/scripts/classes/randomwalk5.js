class RandomWalk5 extends RandomWalk {
  constructor(initX,initY, width, height){
    super(initX,initY);
    this.width = width;
    this.height = height;
    this.t = 0;
    this.deltaT = 1 / 50;
  }

  display() {
    noStroke();
    fill('rgba(255,10,0, 0.05)');
    ellipse(this.x,this.y,16,16)
  }

  step(){
    this.x = map(noise(this.t), 0 , 1, 0, this.width);
    this.y = map(noise(this.t + 10000), 0, 1, 0, this.height);
    this.t += this.deltaT;
  }
}
