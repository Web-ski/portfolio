import React from 'react';
import './SectionsStart.scss';
import Article from './Article';

class SectionStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionOn: "",
      articleNumber: 0,
      sectionDisplay: ""
    };
  }

  articleActive(nmbr) {
    return (nmbr === this.state.articleNumber ? this.setState({ sectionOn: "articleOn" }) : this.setState({ sectionOn: "" }));
  }

  componentDidMount() {
    this.setState({ sectionOn: "articleOn" })
  }

  handleClick = (nmbr) => {
    this.setState({ articleNumber: nmbr })
  }

  render() {
    const elem = this.props.elem;
    return (<section id={elem.id} className={elem.section}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.article !== undefined) 
          { return <Article key={item.toString() + index} 
          elem={[item, (this.state.articleNumber === index ? "articleOn" : "")]} /> };
        })
      )}
      <nav className="section-navigation">
        {(elem.children !== undefined) && (
          (elem.children).map((item, index) => {
            if (item.article !== undefined) { return <button onClick={this.handleClick(index)} key={item.toString() + index} className={"navigation__btn"}></button> };
          })
        )}
      </nav>
    </section>)
  }
}

export default SectionStart;