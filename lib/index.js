'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
  function State(key) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'local' : arguments[1];

    _classCallCheck(this, State);

    this._key = key;
    this._storage = window[type + 'Storage'];
    var value = this._storage.getItem(key);
    this._value = value ? JSON.parse(value) : {};
  }

  _createClass(State, [{
    key: '_save',
    value: function _save() {
      this._storage.setItem(this._key, JSON.stringify(this._value));
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._value = {};
      this._save();
      return this;
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this._value[key];
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this._value[key] = value;
      this._save();
      return this;
    }
  }, {
    key: 'value',
    get: function get() {
      return _extends({}, this._value);
    }
  }]);

  return State;
}();

exports.default = State;