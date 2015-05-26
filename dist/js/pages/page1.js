"use strict";

var w;

function setup() {
  createCanvas(640, 360);
  w = new RandomWalk(width / 2, height / 2);
  background(255);
}

function draw() {
  w.step();
  w.display();
}
//# sourceMappingURL=page1.js.map