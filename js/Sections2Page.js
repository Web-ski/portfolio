var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addSections2Page = function addSections2Page() {

  var URL = "content/" + pageName + ".json";

  var Aside = function (_React$Component) {
    _inherits(Aside, _React$Component);

    function Aside() {
      _classCallCheck(this, Aside);

      return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
    }

    _createClass(Aside, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "aside",
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
      key: "render",
      value: function render() {
        return React.createElement(
          "abbr",
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
      key: "render",
      value: function render() {
        return React.createElement(
          "p",
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
      key: "render",
      value: function render() {
        return React.createElement(
          "h1",
          { className: this.props.elems.h1 },
          this.props.elems.text
        );
      }
    }]);

    return ArticleTitle;
  }(React.Component);

  var Span = function (_React$Component5) {
    _inherits(Span, _React$Component5);

    function Span() {
      _classCallCheck(this, Span);

      return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
    }

    _createClass(Span, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "span",
          { className: this.props.elems.span },
          this.props.elems.text
        );
      }
    }]);

    return Span;
  }(React.Component);

  var ArticleLink = function (_React$Component6) {
    _inherits(ArticleLink, _React$Component6);

    function ArticleLink() {
      _classCallCheck(this, ArticleLink);

      return _possibleConstructorReturn(this, (ArticleLink.__proto__ || Object.getPrototypeOf(ArticleLink)).apply(this, arguments));
    }

    _createClass(ArticleLink, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "a",
          { className: this.props.elems.a, href: this.props.elems.href, target: this.props.elems.target },
          this.props.elems.text
        );
      }
    }]);

    return ArticleLink;
  }(React.Component);

  var Div = function (_React$Component7) {
    _inherits(Div, _React$Component7);

    function Div() {
      _classCallCheck(this, Div);

      return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
    }

    _createClass(Div, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: this.props.elems.div, "data-viewer": this.props.elems.data },
          this.props.elems.children !== undefined && this.props.elems.children.map(function (item) {
            return addElems(item);
          })
        );
      }
    }]);

    return Div;
  }(React.Component);

  var Picture = function (_React$Component8) {
    _inherits(Picture, _React$Component8);

    function Picture(props) {
      _classCallCheck(this, Picture);

      var _this8 = _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).call(this, props));

      _this8.state = { toggleOn: true };
      _this8.handleClick = _this8.handleClick.bind(_this8);
      return _this8;
    }

    _createClass(Picture, [{
      key: "handleClick",
      value: function handleClick() {
        this.setState(function (state) {
          return { toggleOn: !state.toggleOn };
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "viewer__box" },
          React.createElement(
            "div",
            { onClick: this.handleClick, className: this.props.elems.img },
            React.createElement("div", { className: "inner__picture", style: { backgroundImage: "url(./images/photos/" + this.props.elems.src + ")" } }),
            React.createElement("div", { className: "inner__icon" })
          ),
          React.createElement(
            "div",
            { onClick: this.handleClick, className: this.state.toggleOn ? 'viewer__modal' : 'viewer__modal--active' },
            React.createElement("img", { className: "modal", src: './images/photos/' + this.props.elems.src })
          )
        );
      }
    }]);

    return Picture;
  }(React.Component);

  var Icon = function (_React$Component9) {
    _inherits(Icon, _React$Component9);

    function Icon() {
      _classCallCheck(this, Icon);

      return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "icon__box" },
          React.createElement("img", { className: this.props.elems.icon, src: this.props.elems.src })
        );
      }
    }]);

    return Icon;
  }(React.Component);

  var ViewerBox = function (_React$Component10) {
    _inherits(ViewerBox, _React$Component10);

    function ViewerBox() {
      _classCallCheck(this, ViewerBox);

      return _possibleConstructorReturn(this, (ViewerBox.__proto__ || Object.getPrototypeOf(ViewerBox)).apply(this, arguments));
    }

    _createClass(ViewerBox, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "article",
          { className: this.props.elems.article + ' photo__box' },
          this.props.elems.children.map(function (item, index) {
            return item.container !== undefined ? React.createElement(
              "div",
              { className: item.container },
              item.children.map(function (item, index) {
                return React.createElement(Picture, { elems: item });
              })
            ) : React.createElement(Picture, { elems: item });
          }),
          React.createElement(
            "div",
            { className: "article__pattern" },
            React.createElement("div", { className: "pattern" })
          )
        );
      }
    }]);

    return ViewerBox;
  }(React.Component);

  //--SLIDER--


  var SliderBox = function (_React$Component11) {
    _inherits(SliderBox, _React$Component11);

    function SliderBox(props) {
      _classCallCheck(this, SliderBox);

      var _this11 = _possibleConstructorReturn(this, (SliderBox.__proto__ || Object.getPrototypeOf(SliderBox)).call(this, props));

      var elemsArr = new Array(props.elems.children.length);
      var fullArr = elemsArr.fill(0).map(function (item, i) {
        return i;
      });
      //console.log(fullArr);
      _this11.state = {
        slides: fullArr,
        animationToggle: '',
        modalToogle: true
      };
      //this.handleClick = this.handleClick.bind(this);
      return _this11;
    }

    _createClass(SliderBox, [{
      key: "handleClick",
      value: function handleClick(i) {
        //this.setState(state => ({ toggleSlide: !state.toggleSlide }))      
        function moveRight(arr) {
          var A = arr[0];
          arr.push(A);
          arr.shift();
          return arr;
        }

        function moveLeft(arr) {
          var Z = arr[arr.length - 1];
          arr.unshift(Z);
          arr.pop();
          return arr;
        }

        var slides = void 0;
        var animation = void 0;
        i === 0 && (slides = moveLeft(this.state.slides));
        i === 0 && (animation = 'slide__move--toRight');
        i === 1 && (slides = moveRight(this.state.slides));
        i === 1 && (animation = 'slide__move--toLeft');
        this.setState({ slides: slides, animationToggle: animation });
      }
    }, {
      key: "updateState",
      value: function updateState() {
        this.setState({ modalToogle: !this.state.modalToogle });
      }
    }, {
      key: "render",
      value: function render() {
        var _this12 = this;

        //const activeSlide1 = (this.state.toggleSlide ? '' : 'show');
        //const activeSlide = (this.state.toggleSlide ? 'show-slide' : '');

        return React.createElement(
          "article",
          { className: this.props.elems.article + ' photo__box' },
          React.createElement("button", { onClick: this.handleClick.bind(this, 0), className: "slider__arrow slider__arrow--left" }),
          React.createElement(
            "div",
            { className: "slides__container" },
            this.props.elems.children.map(function (item, index) {
              return index === _this12.state.slides[0] && React.createElement("div", { className: "slide " + _this12.state.animationToggle, style: { backgroundImage: "url(./images/photos/" + item.src + ")" } });
            })
          ),
          React.createElement("button", { onClick: this.handleClick.bind(this, 1), className: "slider__arrow slider__arrow--right" }),
          React.createElement("button", { onClick: this.updateState.bind(this), className: "slider__sizer" }),
          React.createElement(
            "div",
            { className: "slides__modal " + (this.state.modalToogle ? '' : 'modal--open') },
            React.createElement("button", { onClick: this.handleClick.bind(this, 0), className: "slider__arrow slider__arrow--left" }),
            React.createElement(
              "div",
              { className: "slides__container" },
              this.props.elems.children.map(function (item, index) {
                return index === _this12.state.slides[0] && React.createElement("div", { className: "slide " + _this12.state.animationToggle, style: { backgroundImage: "url(./images/photos/" + item.src + ")" } });
              })
            ),
            React.createElement("button", { onClick: this.handleClick.bind(this, 1), className: "slider__arrow slider__arrow--right" }),
            React.createElement("button", { onClick: this.updateState.bind(this), className: "slider__resizer" })
          )
        );
      }
    }]);

    return SliderBox;
  }(React.Component);

  //--TIME LINE--


  var TimeLineItem = function (_React$Component12) {
    _inherits(TimeLineItem, _React$Component12);

    function TimeLineItem() {
      _classCallCheck(this, TimeLineItem);

      return _possibleConstructorReturn(this, (TimeLineItem.__proto__ || Object.getPrototypeOf(TimeLineItem)).apply(this, arguments));
    }

    _createClass(TimeLineItem, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: this.props.elems.div },
          React.createElement(
            "div",
            { className: "time-line__item time-line__item--1" },
            this.props.elems.children.map(function (item) {
              return addElems(item);
            })
          ),
          React.createElement(
            "div",
            { className: "time-line__item time-line__item--2" },
            React.createElement("div", { className: "item-circle" }),
            React.createElement("div", { className: "item-line" }),
            React.createElement("div", { className: "text-line" })
          ),
          React.createElement("div", { className: "time-line__item time-line__item--3" })
        );
      }
    }]);

    return TimeLineItem;
  }(React.Component);

  var TimeLineBox = function (_React$Component13) {
    _inherits(TimeLineBox, _React$Component13);

    function TimeLineBox(props) {
      _classCallCheck(this, TimeLineBox);

      var _this14 = _possibleConstructorReturn(this, (TimeLineBox.__proto__ || Object.getPrototypeOf(TimeLineBox)).call(this, props));

      _this14.state = { toggleOn: true };
      _this14.handleClick = _this14.handleClick.bind(_this14);
      return _this14;
    }

    _createClass(TimeLineBox, [{
      key: "handleClick",
      value: function handleClick() {
        this.setState(function (state) {
          return { toggleOn: !state.toggleOn };
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "article",
          { className: this.props.elems.article },
          React.createElement(
            "div",
            { className: this.props.elems.children[0].div + ' ' + (this.state.toggleOn ? 'time-line--off' : 'time-line--active') },
            this.props.elems.children[0].children.map(function (item) {
              return React.createElement(TimeLineItem, { elems: item });
            })
          ),
          React.createElement(
            "div",
            { onClick: this.handleClick, className: "time-line__switcher " + (this.state.toggleOn ? 'switcher--top-left' : 'switcher--bottom-right') },
            React.createElement(
              "p",
              { className: "article__text " + (this.state.toggleOn ? 'text--top-left' : 'text--bottom-right') },
              this.state.toggleOn ? 'Before' : 'After'
            )
          ),
          React.createElement(
            "div",
            { className: this.props.elems.children[1].div + ' ' + (this.state.toggleOn ? 'time-line--active' : 'time-line--off') },
            this.props.elems.children[1].children.map(function (item) {
              return React.createElement(TimeLineItem, { elems: item });
            })
          )
        );
      }
    }]);

    return TimeLineBox;
  }(React.Component);

  var FlowToolsBox = function (_React$Component14) {
    _inherits(FlowToolsBox, _React$Component14);

    function FlowToolsBox(props) {
      _classCallCheck(this, FlowToolsBox);

      var _this15 = _possibleConstructorReturn(this, (FlowToolsBox.__proto__ || Object.getPrototypeOf(FlowToolsBox)).call(this, props));

      var elemsArr = props.elems.children[0].children;
      _this15.state = { tools: elemsArr };
      return _this15;
    }

    _createClass(FlowToolsBox, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "article",
          { className: this.props.elems.article + " article__flow" },
          React.createElement(
            "div",
            { className: this.props.elems.children[0].div },
            this.props.elems.children[0].children.map(function (item, index) {
              return React.createElement(FlowItem, { elem: item, number: index });
            })
          )
        );
      }
    }]);

    return FlowToolsBox;
  }(React.Component);

  var FlowItem = function (_React$Component15) {
    _inherits(FlowItem, _React$Component15);

    function FlowItem(props) {
      _classCallCheck(this, FlowItem);

      var _this16 = _possibleConstructorReturn(this, (FlowItem.__proto__ || Object.getPrototypeOf(FlowItem)).call(this, props));

      var elemsArr = props.elem;
      var time = props.number;
      console.log(props.number);
      _this16.state = { arr: elemsArr, tools: 0, time: time };
      return _this16;
    }

    _createClass(FlowItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this17 = this;

        this.timer = setTimeout(function () {
          return _this17.count();
        }, this.state.time * 4000);
        //dodać ładowanie każdego elementu w odstepie czasu
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        //clearInterval(this.timer);
      }
    }, {
      key: "count",
      value: function count() {

        var changeTools = this.state.tools === 0 ? this.state.arr : 0;
        //let a =  (this.props.elems.children).map(item => addElems(item));
        this.setState({ tools: changeTools });
      }
    }, {
      key: "render",
      value: function render() {

        return this.state.tools !== 0 && addElems(this.state.tools);
      }
    }]);

    return FlowItem;
  }(React.Component);

  var Article = function (_React$Component16) {
    _inherits(Article, _React$Component16);

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
          this.props.elems.children.map(function (item) {
            return addElems(item);
          })
        );
      }
    }]);

    return Article;
  }(React.Component);

  var Section = function (_React$Component17) {
    _inherits(Section, _React$Component17);

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

    var tag = void 0;
    if (elem.article !== undefined) {
      if (elem.data !== undefined) {
        elem.data === 'viewer-box' && (tag = React.createElement(ViewerBox, { elems: elem }));
        elem.data === 'slider-box' && (tag = React.createElement(SliderBox, { elems: elem }));
        elem.data === 'time-line-box' && (tag = React.createElement(TimeLineBox, { elems: elem }));
        elem.data === 'flow-tools-box' && (tag = React.createElement(FlowToolsBox, { elems: elem }));
      } else {
        tag = React.createElement(Article, { elems: elem });
      }
    }
    elem.div !== undefined && (tag = React.createElement(Div, { elems: elem }));
    elem.h1 !== undefined && (tag = React.createElement(ArticleTitle, { elems: elem }));
    elem.a !== undefined && (tag = React.createElement(ArticleLink, { elems: elem }));
    elem.p !== undefined && (tag = React.createElement(Paragraph, { elems: elem }));
    elem.abbr !== undefined && (tag = React.createElement(Abbr, { elems: elem }));
    elem.img !== undefined && (tag = React.createElement(Picture, { elems: elem }));
    elem.aside !== undefined && (tag = React.createElement(Aside, { elems: elem }));
    elem.span !== undefined && (tag = React.createElement(Span, { elems: elem }));
    elem.icon !== undefined && (tag = React.createElement(Icon, { elems: elem }));
    return tag;
  }

  var Main = function (_React$Component18) {
    _inherits(Main, _React$Component18);

    function Main(props) {
      _classCallCheck(this, Main);

      var _this20 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

      _this20.state = { data: [] };
      return _this20;
    }

    _createClass(Main, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this21 = this;

        fetch(URL).then(function (response) {
          return response.json();
        }).then(function (json) {
          return _this21.setState({ data: json });
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