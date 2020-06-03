const addSections2Page = function () {

  const URL = `content/${pageName}.json`;





  class Article extends React.Component {
    render() {
      return <article className={this.props.elems.article}>
      hej
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
    return (
      (elem.p !== undefined && <p>Hej-P</p>,
        (elem.article !== undefined && <Article elems={elem} />))
    )
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