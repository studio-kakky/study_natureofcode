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
//# sourceMappingURL=classes.js.map