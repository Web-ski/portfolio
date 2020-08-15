import React from 'react';
import './Sections.scss';
import Article from './Article';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionOn: "" }
  }

  componentDidMount() {
    let startView = document.querySelector(".start-header");
    let sections = Array.from(document.querySelectorAll(".section"));
    let distance = 0;
    let startViewHeight = startView.offsetHeight;
    let sectionsHeight = [startViewHeight];
    sections.map((item, index) => (sectionsHeight.push(item.offsetHeight)));
    sections.map((item, index) => {
      item.getAttribute('id') === this.props.elem.id && (
        sectionsHeight.splice(index + 1, (sectionsHeight.length - (index + 1))) && (distance = sectionsHeight.reduce(function (total, nmbr) { return total + nmbr; }))
      ) //połączyć długości do bieżącej sekcji 
    }
    )
    window.addEventListener('resize', () => {
      let startViewHeight = startView.offsetHeight;
      let sectionsHeight = [startViewHeight];
      sections.map((item, index) => (sectionsHeight.push(item.offsetHeight)));
      sections.map((item, index) => {
        item.getAttribute('id') === this.props.elem.id && (
          sectionsHeight.splice(index + 1, (sectionsHeight.length - (index + 1))) && (distance = sectionsHeight.reduce(function (total, nmbr) { return total + nmbr; }))
        ) //połączyć długości do bieżącej sekcji 
      }
      )
      console.log("M" + distance);
      this.handleScroll(distance);
    });
    window.addEventListener('scroll', () => this.handleScroll(distance));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll(distance) {
    (window.scrollY > (distance) &&
      (this.state.sectionOn !== "sectionOn" && this.setState({ sectionOn: "articleOn" })))
    //(window.scrollY <= 500 && visibility === false) && (this.setState({ visible: true }))
  }

  render() {
    const elem = this.props.elem;
    return (<section id={elem.id} className={elem.section}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.article !== undefined) { return <Article key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
        })
      )}
    </section>)
  }
}

export default Section;