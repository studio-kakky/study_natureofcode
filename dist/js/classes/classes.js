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
        var choice = parseInt(random() * 4);

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

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RandomWalk2 = (function (_RandomWalk) {
  function RandomWalk2() {
    _classCallCheck(this, RandomWalk2);

    if (_RandomWalk != null) {
      _RandomWalk.apply(this, arguments);
    }
  }

  _inherits(RandomWalk2, _RandomWalk);

  _createClass(RandomWalk2, {
    step: {
      value: function step() {
        var stepx = parseInt(random(3)) - 1;
        var stepy = parseInt(random(3)) - 1;

        this.x += stepx;
        this.y += stepy;
      }
    }
  });

  return RandomWalk2;
})(RandomWalk);
//# sourceMappingURL=classes.js.map