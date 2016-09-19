"use strict";

var p;
var step = 500;
var t = 0;
var step = 1;
var oldY = random(0, 180) + 90;

function setup() {
  createCanvas(640, 360);
  background(255);
}

function draw() {
  var y = random(0, 180) + 90;
  stroke(0);
  line(t, oldY, t + step, y);
  oldY = y;
  t += step;
}
//# sourceMappingURL=chapter0_6_1.js.map
