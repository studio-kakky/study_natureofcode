var g;

function setup(){
  createCanvas(640,360);
  g = new Gaussian(width/2,60);
  background(255);
}

function draw(){
  g.step();
  g.display();
}
