class RandomWalk6 extends RandomWalk5 {
  constructor(initX,initY, width, height){
    super(initX,initY,width,height);
    this.stepPixel = 1;
  }

  step(){
    this.x += map(noise(this.t), 0 , 1, - this.stepPixel, this.stepPixel);
    this.y += map(noise(this.t + 10000), 0, 1, -this.stepPixel, this.stepPixel);
    this.t += this.deltaT;
  }
}
