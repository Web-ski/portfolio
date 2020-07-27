const addSections2Page = function () {

  const URL = `content/${pageName}.json`;

  class Aside extends React.Component {
    render() {
      return <aside className={this.props.elems.aside}>{this.props.elems.text}</aside>;
    }
  }

  class Abbr extends React.Component {
    render() {
      return <abbr className={this.props.elems.abbr} title={this.props.elems.title}>
        {this.props.elems.text}
      </abbr>;
    }
  }

  class Paragraph extends React.Component {
    render() {
      return <p className={this.props.elems.p}>
        {
          this.props.elems.text !== undefined && this.props.elems.text
        }
        {
          this.props.elems.children !== undefined && (this.props.elems.children).map(item => addElems(item))
        }
      </p>;
    }
  }

  class ArticleTitle extends React.Component {
    render() {
      return <h1 className={this.props.elems.h1}>{this.props.elems.text}</h1>;
    }
  }

  class Span extends React.Component {
    render() {
      return <span className={this.props.elems.span}>{this.props.elems.text}</span>;
    }
  }

  class ArticleLink extends React.Component {
    render() {
      return <a className={this.props.elems.a} href={this.props.elems.href} target={this.props.elems.target}>
        {this.props.elems.text}
      </a>;
    }
  }


  class Div extends React.Component {
    render() {
      return <div className={this.props.elems.div} data-viewer={this.props.elems.data}>
        {
          this.props.elems.children !== undefined && (this.props.elems.children).map(item => addElems(item))
        }
      </div>;
    }
  }

  class Picture extends React.Component {
    constructor(props) {
      super(props);
      this.state = { toggleOn: true }
      this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
      this.setState(state => ({ toggleOn: !state.toggleOn }))
    }

    render() {
      return (<div className="viewer__box">
        <div onClick={this.handleClick} className={this.props.elems.img}>
          <div className="inner__picture" style={{ backgroundImage: `url(./images/photos/${this.props.elems.src})` }}></div>
          <div className="inner__icon"></div>
        </div>
        <div onClick={this.handleClick} className={this.state.toggleOn ? 'viewer__modal' : 'viewer__modal--active'} >
          <img className="modal" src={'./images/photos/' + this.props.elems.src} />
        </div>
      </div>);
    }
  }

  class ViewerBox extends React.Component {

    render() {
      return <article className={this.props.elems.article + ' photo__box'}>
        {(this.props.elems.children).map((item, index) =>
          item.container !== undefined ? (<div className={item.container}>
            {(item.children).map((item, index) =>
              <Picture elems={item} />
            )}
          </div>) : <Picture elems={item} />
        )}
        <div className="article__pattern">
          <div className="pattern"></div>
        </div>
      </article>;
    }
  }

  //--SLIDER--
  class SliderBox extends React.Component {
    constructor(props) {
      super(props);
      const elemsArr = new Array((props.elems.children).length);
      const fullArr = elemsArr.fill(0).map((item, i) => i);
      //console.log(fullArr);
      this.state =
      {
        slides: fullArr,
        animationToggle: '',
        modalToogle: true
      };
      //this.handleClick = this.handleClick.bind(this);
    };
    handleClick(i) {
      //this.setState(state => ({ toggleSlide: !state.toggleSlide }))      
      function moveRight(arr) {
        let A = arr[0];
        arr.push(A);
        arr.shift();
        return arr;
      }

      function moveLeft(arr) {
        let Z = arr[arr.length - 1];
        arr.unshift(Z);
        arr.pop();
        return arr;
      }

      let slides;
      let animation;
      i === 0 && (slides = moveLeft(this.state.slides));
      i === 0 && (animation = 'slide__move--toRight');
      i === 1 && (slides = moveRight(this.state.slides));
      i === 1 && (animation = 'slide__move--toLeft');
      this.setState({ slides: slides, animationToggle: animation });
    };
    updateState() {
      this.setState({ modalToogle: !this.state.modalToogle })
    }
    render() {
      //const activeSlide1 = (this.state.toggleSlide ? '' : 'show');
      //const activeSlide = (this.state.toggleSlide ? 'show-slide' : '');

      return <article className={this.props.elems.article + ' photo__box'}>
        <button onClick={this.handleClick.bind(this, 0)} className="slider__arrow slider__arrow--left"></button>
        <div className='slides__container'>
          {(this.props.elems.children).map((item, index) =>
            index === this.state.slides[0] && <div className={"slide " + this.state.animationToggle} style={{ backgroundImage: `url(./images/photos/${item.src})` }}></div>
          )}
        </div>
        <button onClick={this.handleClick.bind(this, 1)} className="slider__arrow slider__arrow--right"></button>
        <button onClick={this.updateState.bind(this)} className="slider__sizer"></button>
        <div className={"slides__modal " + (this.state.modalToogle ? '' : 'modal--open')}>
          <button onClick={this.handleClick.bind(this, 0)} className="slider__arrow slider__arrow--left"></button>
          <div className='slides__container'>
            {(this.props.elems.children).map((item, index) =>
              index === this.state.slides[0] && <div className={"slide " + this.state.animationToggle} style={{ backgroundImage: `url(./images/photos/${item.src})` }}></div>
            )}
          </div>
          <button onClick={this.handleClick.bind(this, 1)} className="slider__arrow slider__arrow--right"></button>
          <button onClick={this.updateState.bind(this)} className="slider__resizer"></button>
        </div>
      </article>;
    }
  }

  //--TIME LINE--
  class TimeLineItem extends React.Component {
    render() {
      console.log(this.props.elems.children[0])
      return <div className={this.props.elems.div}>
        <div className="time-line__item time-line__item--1">
          {(this.props.elems.children).map(item => addElems(item))}
        </div>
        <div className="time-line__item time-line__item--2">
          <div className="item-circle"></div>
          <div className="item-line"></div>
          <div className="text-line"></div>
        </div>
        <div className="time-line__item time-line__item--3"></div>
      </div>;
    }
  }

  class TimeLineBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = { toggleOn: true }
      this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
      this.setState(state => ({ toggleOn: !state.toggleOn }))
    }
    render() {
      return <article className={this.props.elems.article}>
        <div className={this.props.elems.children[0].div + ' ' + (this.state.toggleOn ? 'time-line--off' : 'time-line--active')}>
          {(this.props.elems.children[0].children).map(item => (<TimeLineItem elems={item} />))}
        </div>
        <div onClick={this.handleClick} className={"time-line__switcher " + (this.state.toggleOn ? 'switcher--top-left' : 'switcher--bottom-right')}>
          <p className={"article__text " + (this.state.toggleOn ? 'text--top-left' : 'text--bottom-right')}>{this.state.toggleOn ? 'Before' : 'After'}</p>
        </div>
        <div className={this.props.elems.children[1].div + ' ' + (this.state.toggleOn ? 'time-line--active' : 'time-line--off')}>
          {(this.props.elems.children[1].children).map(item => (<TimeLineItem elems={item} />))}
        </div>
      </article>;
    }
  }

  class FlowToolsBox extends React.Component {
    render() {
      return <div className={this.props.elems.article}>
        {(this.props.elems.children).map(item => addElems(item))}
      </div>;
    }
  }

  class Article extends React.Component {
    render() {
      return <article className={this.props.elems.article}>
        {(this.props.elems.children).map(item => addElems(item))}
      </article>;
    }
  }

  class Section extends React.Component {
    render() {
      return <section className={this.props.elems.section}>
        {(this.props.elems.children).map(item => addElems(item))}
      </section>;
    }
  }

  function addElems(elem) {

    let tag;
    if (elem.article !== undefined) {
      if (elem.data !== undefined) {
        (elem.data === 'viewer-box' && (tag = <ViewerBox elems={elem} />));
        (elem.data === 'slider-box' && (tag = <SliderBox elems={elem} />));
        (elem.data === 'time-line-box' && (tag = <TimeLineBox elems={elem} />));
        (elem.data === 'flow-tools-box' && (tag = <FlowToolsBox elems={elem} />));
      }
      else {
        (tag = <Article elems={elem} />);
      }
    }
    elem.div !== undefined && (tag = <Div elems={elem} />);
    elem.h1 !== undefined && (tag = <ArticleTitle elems={elem} />);
    elem.a !== undefined && (tag = <ArticleLink elems={elem} />);
    elem.p !== undefined && (tag = <Paragraph elems={elem} />);
    elem.abbr !== undefined && (tag = <Abbr elems={elem} />);
    elem.img !== undefined && (tag = <Picture elems={elem} />);
    elem.aside !== undefined && (tag = <Aside elems={elem} />);
    elem.span !== undefined && (tag = <Span elems={elem} />);

    return tag;
  }

  class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = { data: [] };
    }

    componentDidMount() {
      fetch(URL).then(response => response.json()).then(json => this.setState({ data: json }))
    }

    render() {
      return <div id={this.props.id} className="main2Page">
        {(this.state.data).map(item => (item.section !== undefined && <Section elems={item} />))}
      </div>;
    }
  }

  const main = <Main />

  ReactDOM.render(
    main,
    document.getElementById('main')
  );

}

addSections2Page();