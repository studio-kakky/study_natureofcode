var p;

function setup(){
  createCanvas(640,360);
  p = new Painter({r:255,g:0,b:0,a:1});
  background(255);
}

function mouseClicked() {
  p.paint(mouseX,mouseY);
}

