var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topbar = function (_React$Component) {
  _inherits(Topbar, _React$Component);

  function Topbar() {
    _classCallCheck(this, Topbar);

    return _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).apply(this, arguments));
  }

  _createClass(Topbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "header2Page" },
        React.createElement(
          "a",
          { className: "brand", href: "index.html" },
          "Nieczuja"
        ),
        React.createElement(
          "h1",
          { className: "pageTitle" },
          pageName
        )
      );
    }
  }]);

  return Topbar;
}(React.Component);

var topbar = React.createElement(Topbar, null);

ReactDOM.render(topbar, document.getElementById('topbar'));