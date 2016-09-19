"use strict";

var gridSize;
var step;
var counter = 0;
var counterStep = 0.03;
var noiseStep = 0.03;

function setup() {
  createCanvas(640, 360, WEBGL);
  perspective(60 / 180 * PI, width / height, 0.1, 100);
  gridSize = 10;
  step = 60;
}

function draw() {
  background(255);
  translate(-gridSize * step / 2, 0, -500);
  var xt = 0;
  var points = [];
  stroke(255);
  for (var x = 0; x < step; x++) {
    for (var z = 0; z < step; z++) {
      var h = Math.floor(map(noise(x * noiseStep, z * noiseStep, counter), 0, 1, 0, 200));
      if (z != 0) {
        beginShape(LINES);

        vertex(x * gridSize, points[z - 1], (z - 1) * gridSize);
        vertex(x * gridSize, h, z * gridSize);
        endShape(LINES);
        if (x != 0) {
          beginShape(LINES);
          vertex(x * gridSize, h, z * gridSize);
          vertex((x - 1) * gridSize, points[z], z * gridSize);
          endShape(LINES);
        }
      } else if (x != 0) {
        beginShape(LINES);
        vertex(x, h, z * gridSize);
        vertex((x - 1) * gridSize, point[z], z * gridSize);
        endShape(LINES);
      }
      points[z] = h;
    }
  }
  counter += counterStep;
}
//# sourceMappingURL=chapter0_6_8.js.map
