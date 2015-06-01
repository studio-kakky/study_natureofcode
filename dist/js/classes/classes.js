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
//# sourceMappingURL=classes.js.map