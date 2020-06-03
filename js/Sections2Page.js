var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addSections2Page = function addSections2Page() {

  var URL = 'content/' + pageName + '.json';

  var Aside = function (_React$Component) {
    _inherits(Aside, _React$Component);

    function Aside() {
      _classCallCheck(this, Aside);

      return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
    }

    _createClass(Aside, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'aside',
          { className: this.props.elems.aside },
          this.props.elems.text
        );
      }
    }]);

    return Aside;
  }(React.Component);

  var Abbr = function (_React$Component2) {
    _inherits(Abbr, _React$Component2);

    function Abbr() {
      _classCallCheck(this, Abbr);

      return _possibleConstructorReturn(this, (Abbr.__proto__ || Object.getPrototypeOf(Abbr)).apply(this, arguments));
    }

    _createClass(Abbr, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'abbr',
          { className: this.props.elems.abbr, title: this.props.elems.title },
          this.props.elems.text
        );
      }
    }]);

    return Abbr;
  }(React.Component);

  var Paragraph = function (_React$Component3) {
    _inherits(Paragraph, _React$Component3);

    function Paragraph() {
      _classCallCheck(this, Paragraph);

      return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
    }

    _createClass(Paragraph, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'p',
          { className: this.props.elems.p },
          this.props.elems.text !== undefined && this.props.elems.text,
          this.props.elems.children !== undefined && this.props.elems.children.map(function (item) {
            return addElems(item);
          })
        );
      }
    }]);

    return Paragraph;
  }(React.Component);

  var ArticleTitle = function (_React$Component4) {
    _inherits(ArticleTitle, _React$Component4);

    function ArticleTitle() {
      _classCallCheck(this, ArticleTitle);

      return _possibleConstructorReturn(this, (ArticleTitle.__proto__ || Object.getPrototypeOf(ArticleTitle)).apply(this, arguments));
    }

    _createClass(ArticleTitle, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'h1',
          { className: this.props.elems.h1 },
          this.props.elems.text
        );
      }
    }]);

    return ArticleTitle;
  }(React.Component);

  var ArticleLink = function (_React$Component5) {
    _inherits(ArticleLink, _React$Component5);

    function ArticleLink() {
      _classCallCheck(this, ArticleLink);

      return _possibleConstructorReturn(this, (ArticleLink.__proto__ || Object.getPrototypeOf(ArticleLink)).apply(this, arguments));
    }

    _createClass(ArticleLink, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'a',
          { className: this.props.elems.a, href: this.props.elems.href, target: this.props.elems.target },
          this.props.elems.text
        );
      }
    }]);

    return ArticleLink;
  }(React.Component);

  var Div = function (_React$Component6) {
    _inherits(Div, _React$Component6);

    function Div() {
      _classCallCheck(this, Div);

      return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
    }

    _createClass(Div, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: this.props.elems.div, 'data-viewer': this.props.elems.data },
          this.props.elems.children !== undefined && this.props.elems.children.map(function (item) {
            return addElems(item);
          })
        );
      }
    }]);

    return Div;
  }(React.Component);

  var Picture = function (_React$Component7) {
    _inherits(Picture, _React$Component7);

    function Picture(props) {
      _classCallCheck(this, Picture);

      var _this7 = _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).call(this, props));

      _this7.state = { isToggleOn: true };
      // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
      _this7.handleClick = _this7.handleClick.bind(_this7);
      return _this7;
    }

    _createClass(Picture, [{
      key: 'handleClick',
      value: function handleClick() {
        this.setState(function (state) {
          return {
            isToggleOn: !state.isToggleOn
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement('img', { onClick: this.handleClick, className: this.state.isToggleOn ? this.props.elems.img : this.props.elems.img + '--active', src: './images/photos/' + this.props.elems.src, title: this.props.elems.title });
      }
    }]);

    return Picture;
  }(React.Component);

  var ViewerBox = function (_React$Component8) {
    _inherits(ViewerBox, _React$Component8);

    function ViewerBox() {
      _classCallCheck(this, ViewerBox);

      return _possibleConstructorReturn(this, (ViewerBox.__proto__ || Object.getPrototypeOf(ViewerBox)).apply(this, arguments));
    }

    _createClass(ViewerBox, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'article',
          { className: this.props.elems.article },
          this.props.elems.children.map(function (item, index) {
            return React.createElement(Picture, { elems: item });
          })
        );
      }
    }]);

    return ViewerBox;
  }(React.Component);

  var Article = function (_React$Component9) {
    _inherits(Article, _React$Component9);

    function Article() {
      _classCallCheck(this, Article);

      return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
    }

    _createClass(Article, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'article',
          { className: this.props.elems.article },
          this.props.elems.children.map(function (item) {
            return addElems(item);
          })
        );
      }
    }]);

    return Article;
  }(React.Component);

  var Section = function (_React$Component10) {
    _inherits(Section, _React$Component10);

    function Section() {
      _classCallCheck(this, Section);

      return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
    }

    _createClass(Section, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'section',
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

    var tag = void 0;
    elem.article !== undefined && (elem.data !== undefined ? tag = React.createElement(ViewerBox, { elems: elem }) : tag = React.createElement(Article, { elems: elem }));
    elem.div !== undefined && (tag = React.createElement(Div, { elems: elem }));
    elem.h1 !== undefined && (tag = React.createElement(ArticleTitle, { elems: elem }));
    elem.a !== undefined && (tag = React.createElement(ArticleLink, { elems: elem }));
    elem.p !== undefined && (tag = React.createElement(Paragraph, { elems: elem }));
    elem.abbr !== undefined && (tag = React.createElement(Abbr, { elems: elem }));
    elem.img !== undefined && (tag = React.createElement(Picture, { elems: elem }));
    elem.aside !== undefined && (tag = React.createElement(Aside, { elems: elem }));

    return tag;
  }

  var Main = function (_React$Component11) {
    _inherits(Main, _React$Component11);

    function Main(props) {
      _classCallCheck(this, Main);

      var _this11 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

      _this11.state = { data: [] };
      return _this11;
    }

    _createClass(Main, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this12 = this;

        fetch(URL).then(function (response) {
          return response.json();
        }).then(function (json) {
          return _this12.setState({ data: json });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { id: this.props.id, className: 'main2Page' },
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