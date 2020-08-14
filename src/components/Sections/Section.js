import React from 'react';
import './Sections.scss';
import Article from './Article';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionOn: "" }
  }
  
  componentDidMount() {
    let startView = document.querySelector(".start-header").offsetHeight;
    let sections = document.querySelectorAll(".section");
    let prevSectionHeight = 0;
    Array.from(sections).map((item, index) => 
      item.getAttribute('id') === this.props.elem.id && 
      (index > 0 && (prevSectionHeight = sections[index - 1].offsetHeight * index))
    ) 
    //console.log(sectionView.id)
    window.addEventListener('scroll', () => this.handleScroll(startView + prevSectionHeight));
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }
  
  handleScroll(distance) {
    (window.scrollY > (distance - 100) && 
    ( this.state.sectionOn !== "sectionOn" && this.setState({ sectionOn: "articleOn" }) ))
    //(window.scrollY <= 500 && visibility === false) && (this.setState({ visible: true }))
  }

  render() {
    const elem = this.props.elem;
    return (<section id={elem.id} className={elem.section}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.article !== undefined) { return <Article key={item.article + index} elem={[item, this.state.sectionOn]} /> };
        })
      )}
    </section>)
  }
}

export default Section;