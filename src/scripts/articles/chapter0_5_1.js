var p;
var step = 500;

function setup(){
  createCanvas(640,360);
  p = new Painter({r:255,g:0,b:0,a:1});
  background(255);
}

function draw(){
  var x = monteCarlo(step);
  noStroke();
  fill('rgba(255,10,0, 0.005)');
  ellipse(x, 180, 16, 16);
}

function monteCarlo(step) {
 var r1;
 var r2;
 while(true) {
  r1 = random(1);
  r2 = random(2);
  if(r2 < r1) {
    return r1 * step;
  }
 }
}
