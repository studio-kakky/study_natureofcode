"use strict";

var w;

function setup() {
  createCanvas(640, 360);
  w = new RandomWalk3(width / 2, height / 2);
  background(255);
}

function draw() {
  w.step();
  w.display();
}
//# sourceMappingURL=page3.js.map