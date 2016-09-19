"use strict";

var w;

function setup() {
  createCanvas(640, 360);
  w = new RandomWalk4(width / 2, height / 2);
  background(255);
}

function draw() {
  w.step();
  w.display();
}
//# sourceMappingURL=chapter0_3_2.js.map
