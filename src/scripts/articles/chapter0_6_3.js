var w;

function setup(){
  createCanvas(640,360);
  w = new RandomWalk5(0, 0, width, height);
  background(255);
}

function draw(){
  w.step();
  w.display();
}
