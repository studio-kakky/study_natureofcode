"use strict";

var w;

function setup() {
  createCanvas(640, 360);
  background(0);
  var alphas = getAlphas();
  setPixels(alphas);
}

function setPixels(alphas) {

  for (var i = 0, il = alphas.length; i < il; i++) {
    for (var n = 0, nl = alphas[i].length; n < nl; n++) {
      stroke(alphas[i][n]);
      point(n, i);
    }
  }
}

function getAlphas() {
  var alphas = [];
  for (var i = 0; i < height; i++) {
    alphas[i] = [];
    for (var n = 0; n < width; n++) {
      alphas[i][n] = Math.floor(random(255));
    }
  }
  return alphas;
}
//# sourceMappingURL=chapter0_6_5.js.map
