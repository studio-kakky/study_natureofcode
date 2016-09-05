class Gaussian {
  constructor(mean,sd){
    this.mean = mean;
    this.sd = sd;
    this.x = 0;
  }

  display(){
    noStroke();
    fill('rgba(255,10,0, 0.05)');
    ellipse(this.x, 180, 16, 16);
  }

  step(){
    this.x = randomGaussian(this.mean, this.sd);
  }
}
