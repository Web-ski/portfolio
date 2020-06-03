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
      this.state = { isToggleOn: true };
      // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {
      return <img onClick={this.handleClick} className={this.state.isToggleOn ? this.props.elems.img : (this.props.elems.img + '--active')} src={`./images/photos/${this.props.elems.src}`} title={this.props.elems.title}>
      </img>;
    }
  }

  class ViewerBox extends React.Component {

    render() {
      return <article className={this.props.elems.article}>
          {(this.props.elems.children).map((item, index) =>
            <Picture elems={item} />
          )}
      </article>;
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
    elem.article !== undefined && (elem.data !== undefined ? (tag = <ViewerBox elems={elem} />) : (tag = <Article elems={elem} />));
    elem.div !== undefined && (tag = <Div elems={elem} />);
    elem.h1 !== undefined && (tag = <ArticleTitle elems={elem} />);
    elem.a !== undefined && (tag = <ArticleLink elems={elem} />);
    elem.p !== undefined && (tag = <Paragraph elems={elem} />);
    elem.abbr !== undefined && (tag = <Abbr elems={elem} />);
    elem.img !== undefined && (tag = <Picture elems={elem} />);
    elem.aside !== undefined && (tag = <Aside elems={elem} />);

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