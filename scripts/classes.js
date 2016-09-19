"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Gaussian = (function () {
  function Gaussian(mean, sd) {
    _classCallCheck(this, Gaussian);

    this.mean = mean;
    this.sd = sd;
    this.x = 0;
  }

  _createClass(Gaussian, {
    display: {
      value: function display() {
        noStroke();
        fill("rgba(255,10,0, 0.05)");
        ellipse(this.x, 180, 16, 16);
      }
    },
    step: {
      value: function step() {
        this.x = randomGaussian(this.mean, this.sd);
      }
    }
  });

  return Gaussian;
})();
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Painter = (function () {
  function Painter(color) {
    var r = arguments[1] === undefined ? 40 : arguments[1];
    var dotNum = arguments[2] === undefined ? 5000 : arguments[2];
    var dotSize = arguments[3] === undefined ? 1 : arguments[3];

    _classCallCheck(this, Painter);

    this.color = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
    this.r = r / 2;
    this.dotNum = dotNum;
    this.dotSize = dotSize;
  }

  _createClass(Painter, {
    paint: {
      value: function paint(x, y) {
        noStroke();
        fill(this.color);
        var pos;
        for (var i = 0, l = this.dotNum; i < l; i++) {
          pos = this.getDotPos(x, y);
          ellipse(pos.x, pos.y, this.dotSize, this.dotSize);
        }
      }
    },
    getDotPos: {
      value: function getDotPos(x, y) {
        var dotX = x + randomGaussian(0, this.r) - 0;
        var dotY = y + randomGaussian(0, this.r) - 0;
        return { x: dotX, y: dotY };
      }
    }
  });

  return Painter;
})();

;
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk = (function () {
  function RandomWalk(initX, initY) {
    _classCallCheck(this, RandomWalk);

    this.x = initX;
    this.y = initY;
  }

  _createClass(RandomWalk, {
    display: {
      value: function display() {
        stroke(0);
        point(this.x, this.y);
      }
    },
    step: {
      value: function step() {
        var choice = parseInt(Math.random() * 4);

        if (choice === 0) {
          this.x++;
        } else if (choice === 1) {
          this.x--;
        } else if (choice === 2) {
          this.y++;
        } else {
          this.y--;
        }
      }
    }
  });

  return RandomWalk;
})();
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk2 = (function (_RandomWalk) {
  function RandomWalk2(initx, inity) {
    _classCallCheck(this, RandomWalk2);

    _get(Object.getPrototypeOf(RandomWalk2.prototype), "constructor", this).call(this, initx, inity);
  }

  _inherits(RandomWalk2, _RandomWalk);

  _createClass(RandomWalk2, {
    step: {
      value: function step() {
        var stepx = parseInt(Math.random() * 3) - 1;
        var stepy = parseInt(Math.random() * 3) - 1;

        this.x += stepx;
        this.y += stepy;
      }
    }
  });

  return RandomWalk2;
})(RandomWalk);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk3 = (function (_RandomWalk) {
  function RandomWalk3(initX, initY) {
    _classCallCheck(this, RandomWalk3);

    _get(Object.getPrototypeOf(RandomWalk3.prototype), "constructor", this).call(this, initX, initY);
  }

  _inherits(RandomWalk3, _RandomWalk);

  _createClass(RandomWalk3, {
    step: {
      value: function step() {
        var choice = Math.random();

        if (choice < 0.4) {
          this.x++;
        } else if (choice < 0.6) {
          this.x--;
        } else if (choice < 0.8) {
          this.y++;
        } else {
          this.y--;
        }
      }
    }
  });

  return RandomWalk3;
})(RandomWalk);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk4 = (function (_RandomWalk) {
  function RandomWalk4(initX, initY) {
    _classCallCheck(this, RandomWalk4);

    _get(Object.getPrototypeOf(RandomWalk4.prototype), "constructor", this).call(this, initX, initY);
  }

  _inherits(RandomWalk4, _RandomWalk);

  _createClass(RandomWalk4, {
    step: {
      value: function step() {
        //現在位置とマウスの角度を計算
        var dir = Math.atan2(mouseY - this.y, mouseX - this.x);

        var choice = Math.random();

        if (choice < 0.5) {
          dir = dir;
        } else if (choice < 0.67) {
          dir += Math.PI;
        } else if (choice < 0.84) {
          dir += dir + Math.PI / 2;
        } else {
          dir += dir - Math.PI;
        }

        this.x += Math.cos(dir);
        this.y += Math.sin(dir);
      }
    }
  });

  return RandomWalk4;
})(RandomWalk);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk5 = (function (_RandomWalk) {
  function RandomWalk5(initX, initY, width, height) {
    _classCallCheck(this, RandomWalk5);

    _get(Object.getPrototypeOf(RandomWalk5.prototype), "constructor", this).call(this, initX, initY);
    this.width = width;
    this.height = height;
    this.t = 0;
    this.deltaT = 1 / 50;
  }

  _inherits(RandomWalk5, _RandomWalk);

  _createClass(RandomWalk5, {
    display: {
      value: function display() {
        noStroke();
        fill("rgba(255,10,0, 0.05)");
        ellipse(this.x, this.y, 16, 16);
      }
    },
    step: {
      value: function step() {
        this.x = map(noise(this.t), 0, 1, 0, this.width);
        this.y = map(noise(this.t + 10000), 0, 1, 0, this.height);
        this.t += this.deltaT;
      }
    }
  });

  return RandomWalk5;
})(RandomWalk);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk6 = (function (_RandomWalk5) {
  function RandomWalk6(initX, initY, width, height) {
    _classCallCheck(this, RandomWalk6);

    _get(Object.getPrototypeOf(RandomWalk6.prototype), "constructor", this).call(this, initX, initY, width, height);
    this.stepPixel = 1;
  }

  _inherits(RandomWalk6, _RandomWalk5);

  _createClass(RandomWalk6, {
    step: {
      value: function step() {
        this.x += map(noise(this.t), 0, 1, -this.stepPixel, this.stepPixel);
        this.y += map(noise(this.t + 10000), 0, 1, -this.stepPixel, this.stepPixel);
        this.t += this.deltaT;
      }
    }
  });

  return RandomWalk6;
})(RandomWalk5);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Smoke = (function () {
  function Smoke(x1, x2, y1, y2) {
    var noiseScale = arguments[4] === undefined ? 0.02 : arguments[4];
    var octaves = arguments[5] === undefined ? 8 : arguments[5];
    var noiseOffset = arguments[6] === undefined ? 0.5 : arguments[6];

    _classCallCheck(this, Smoke);

    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.t = 0;
    this.timeStep = 0.01;
    this.noiseScale = noiseScale;
    this.octaves = octaves;
    this.noiseOffset = noiseOffset;
    noiseDetail(this.octaves, this.noiseOffset);
  }

  _createClass(Smoke, {
    setPixel: {
      value: function setPixel() {
        for (var i = this.y1; i < this.y2; i++) {
          for (var n = this.x1; n < this.x2; n++) {
            stroke(map(noise(n * this.noiseScale, i * this.noiseScale, this.t), 0, 1, 0, 150));
            point(n, i);
          }
        }
        this.t += this.timeStep;
      }
    }
  });

  return Smoke;
})();

;
//# sourceMappingURL=classes.js.map
