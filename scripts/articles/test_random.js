"use strict";

var l = 1000000;
var maxnum = 100;
var minnum = 0;
var results = [];

function setup() {
  createCanvas(640, 360);
  var res = getGausse();
  drawGraph(res);
}

function getGausse() {

  for (var i = 0; i < maxnum; i++) {
    results[i] = 0;
  }

  for (i = 0; i < l; i++) {
    var res = parseInt(randomGaussian((maxnum - minnum) / 2, 11));
    results[res]++;
  }

  return results;
}

function drawGraph(res) {
  console.log(maxnum);
  line(0, 200, maxnum * 4, 200);
  for (var i = 0; i < maxnum - 1; i++) {
    line(i * 4, 200 - results[i] / 500, (i + 1) * 4, 200 - results[i + 1] / 500);
  }
  console.log(results);
}
//# sourceMappingURL=test_random.js.map
