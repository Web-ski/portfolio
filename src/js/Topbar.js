
class Topbar extends React.Component {
  render() {
    return <section className="header2Page">
      <a className="brand" href="index.html">Nieczuja</a>
      <h1 className="pageTitle">{pageName}</h1>
    </section>;
  }
}

const topbar = <Topbar />

ReactDOM.render(
  topbar,
  document.getElementById('topbar')
);