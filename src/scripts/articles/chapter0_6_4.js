var w;

function setup(){
  createCanvas(640,360);
  w = new RandomWalk6(width/2, height/2, width, height);
  background(255);
}

function draw(){
  w.step();
  w.display();
}
