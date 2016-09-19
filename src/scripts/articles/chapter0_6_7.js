var smoke;

function setup(){
  createCanvas(640, 360);
  background(0);
  smoke = new Smoke(width/6 * 2, width/6 * 4, height/4, height/4 * 3);

}

function draw(){
  smoke.setPixel();
}
