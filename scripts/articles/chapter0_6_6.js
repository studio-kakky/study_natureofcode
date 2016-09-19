"use strict";

var w;

function setup() {
  createCanvas(640, 360);
  background(0);
  setPixels();
}

function setPixels() {
  var il = height;
  var nl = width;
  for (var i = 0; i < il; i++) {
    for (var n = 0; n < nl; n++) {
      stroke(map(noise(n * 0.05, i * 0.05), 0, 1, 0, 100));
      point(n, i);
    }
  }
}
//# sourceMappingURL=chapter0_6_6.js.map
