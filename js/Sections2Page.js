var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addSections2Page = function addSections2Page() {

  var URL = "content/" + pageName + ".json";

  var Article = function (_React$Component) {
    _inherits(Article, _React$Component);

    function Article() {
      _classCallCheck(this, Article);

      return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
    }

    _createClass(Article, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "article",
          { className: this.props.elems.article },
          "hej"
        );
      }
    }]);

    return Article;
  }(React.Component);

  var Section = function (_React$Component2) {
    _inherits(Section, _React$Component2);

    function Section() {
      _classCallCheck(this, Section);

      return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
    }

    _createClass(Section, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "section",
          { className: this.props.elems.section },
          this.props.elems.children.map(function (item) {
            return addElems(item);
          })
        );
      }
    }]);

    return Section;
  }(React.Component);

  function addElems(elem) {
    return elem.p !== undefined && React.createElement(
      "p",
      null,
      "Hej-P"
    ), elem.article !== undefined && React.createElement(Article, { elems: elem });
  }

  var Main = function (_React$Component3) {
    _inherits(Main, _React$Component3);

    function Main(props) {
      _classCallCheck(this, Main);

      var _this3 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

      _this3.state = { data: [] };
      return _this3;
    }

    _createClass(Main, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this4 = this;

        fetch(URL).then(function (response) {
          return response.json();
        }).then(function (json) {
          return _this4.setState({ data: json });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { id: this.props.id, className: "main2Page" },
          this.state.data.map(function (item) {
            return item.section !== undefined && React.createElement(Section, { elems: item });
          })
        );
      }
    }]);

    return Main;
  }(React.Component);

  var main = React.createElement(Main, null);

  ReactDOM.render(main, document.getElementById('main'));
};

addSections2Page();