var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addFooter = function addFooter() {

  var FOOTER_TEXT_AUTHOR = "2020, by Pawel Nieczuja-Ostrowski";
  var URL = "content/articles.json";

  var FooterText = function (_React$Component) {
    _inherits(FooterText, _React$Component);

    function FooterText() {
      _classCallCheck(this, FooterText);

      return _possibleConstructorReturn(this, (FooterText.__proto__ || Object.getPrototypeOf(FooterText)).apply(this, arguments));
    }

    _createClass(FooterText, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "p",
          { className: "article__text" },
          this.props.text
        );
      }
    }]);

    return FooterText;
  }(React.Component);

  var FooterLink = function (_React$Component2) {
    _inherits(FooterLink, _React$Component2);

    function FooterLink() {
      _classCallCheck(this, FooterLink);

      return _possibleConstructorReturn(this, (FooterLink.__proto__ || Object.getPrototypeOf(FooterLink)).apply(this, arguments));
    }

    _createClass(FooterLink, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "a",
          { className: "footer__link", href: this.props.data.href },
          this.props.data.href.split(".")[0]
        );
      }
    }]);

    return FooterLink;
  }(React.Component);

  var findLink = function findLink(elem) {
    return elem.children !== undefined && elem.children.map(function (item) {
      return item.a !== undefined && item.a === "article__link" ? React.createElement(FooterLink, { data: item }) : findLink(item);
    });
  };

  var FooterInfo = function (_React$Component3) {
    _inherits(FooterInfo, _React$Component3);

    function FooterInfo(props) {
      _classCallCheck(this, FooterInfo);

      var _this3 = _possibleConstructorReturn(this, (FooterInfo.__proto__ || Object.getPrototypeOf(FooterInfo)).call(this, props));

      _this3.state = { data: [] };
      return _this3;
    }

    _createClass(FooterInfo, [{
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
          "article",
          { id: this.props.id, className: this.props.className },
          this.state.data.map(function (item) {
            return findLink(item);
          })
        );
      }
    }]);

    return FooterInfo;
  }(React.Component);

  var FooterAuthor = function (_React$Component4) {
    _inherits(FooterAuthor, _React$Component4);

    function FooterAuthor() {
      _classCallCheck(this, FooterAuthor);

      return _possibleConstructorReturn(this, (FooterAuthor.__proto__ || Object.getPrototypeOf(FooterAuthor)).apply(this, arguments));
    }

    _createClass(FooterAuthor, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "article",
          { id: this.props.id, className: this.props.className },
          React.createElement(FooterText, { text: FOOTER_TEXT_AUTHOR })
        );
      }
    }]);

    return FooterAuthor;
  }(React.Component);

  var Footer = function (_React$Component5) {
    _inherits(Footer, _React$Component5);

    function Footer() {
      _classCallCheck(this, Footer);

      return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "section",
          { className: "footer" },
          React.createElement(FooterInfo, { id: "footer-info", className: "article" }),
          React.createElement(FooterAuthor, { id: "footer-author", className: "article" })
        );
      }
    }]);

    return Footer;
  }(React.Component);

  var footer = React.createElement(Footer, null);

  ReactDOM.render(footer, document.getElementById('footer'));
};

addFooter();