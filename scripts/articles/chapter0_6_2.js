"use strict";

var p;
var step = 500;
var t = 0;
var deletaT = 1 / 40;
var step = 1;
var x = 0;
var oldY = noise(t) * 180 - 90 + 180;

function setup() {
  createCanvas(640, 360);
  background(255);
}

function draw() {
  var y = noise(t) * 180 - 90 + 180;
  line(x, oldY, x + step, y);
  oldY = y;
  t += deletaT;
  x += step;
}
//# sourceMappingURL=chapter0_6_2.js.map
