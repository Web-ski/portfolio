
const FOOTER_TEXT_AUTHOR = "2020, by Pawel Nieczuja-Ostrowski";
const URL = "content/articles.json";

class FooterText extends React.Component {
  render() {
    return <p className="article__text">{this.props.text}</p>
  }
}

class FooterLink extends React.Component {
  render() {
    return <a className="footer__link">{this.props.text}</a>
  }
}

function createElems(props) {
  return (
    console.log(props) //!!!!tu robię
    )
}

class FooterInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(URL).then(response => response.json()).then(json => this.setState({ data: json }))
  }

  render() {
    return <article id={this.props.id} className={this.props.className}>
      {createElems(this.state.data)}
    </article>;
  }
}

class FooterAuthor extends React.Component {
  render() {
    return <article id={this.props.id} className={this.props.className}>
      <FooterText text={FOOTER_TEXT_AUTHOR} />
    </article>;
  }
}

class Footer extends React.Component {
  render() {
    return <section className="footer">
      <FooterInfo id="footer-info" className="article" />
      <FooterAuthor id="footer-author" className="article" />
    </section>;
  }
}

const footer = <Footer />

ReactDOM.render(
  footer,
  document.getElementById('footer')
);