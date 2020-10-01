import React from 'react';
import './Sections.scss';
import Article from './Article';
import AsideNumber from '../Titles/AsideNumber';
import TimeLineBox from '../CV/TimeLineBox';
import FlowToolsBox from '../CV/FlowToolsBox';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionOn: "" }
  }

  componentDidMount() {
    let startView = document.querySelector(".start-header");
    let secondView = document.querySelector(".second-header");
    let sections = Array.from(document.querySelectorAll(".section"));
    let distance = 0;
    let startViewHeight = (startView !== null ? startView.offsetHeight : secondView.offsetHeight);//startView.offsetHeight; //<---- tu poprawić
    let sectionsHeight = [startViewHeight];


    sections.map(item => (sectionsHeight.push(item.offsetHeight)));

    sections.map((item, index) => {
      item.getAttribute('id') === this.props.elem.id && (
        sectionsHeight.splice(index + 1, (sectionsHeight.length - (index + 1))) && (distance = sectionsHeight.reduce(function (total, nmbr) { return total + nmbr; }))
      ) //połączyć długości do bieżącej sekcji 
    }
    )

    window.addEventListener('resize', () => {
      let startViewHeight = (startView !== null ? startView.offsetHeight : 0);
      let sectionsHeight = [startViewHeight];
      sections.map((item, index) => (sectionsHeight.push(item.offsetHeight)));
      sections.map((item, index) => {
        item.getAttribute('id') === this.props.elem.id && (
          sectionsHeight.splice(index + 1, (sectionsHeight.length - (index + 1))) && (distance = sectionsHeight.reduce(function (total, nmbr) { return total + nmbr; }))
        ) //połączyć długości do bieżącej sekcji 
      }
      )
      //console.log("M" + distance);
      this.handleScroll(distance);
    });

    this.props.elem.id === "start" && (this.state.sectionOn !== "articleOn" && this.setState({ sectionOn: "articleOn" }))
    window.addEventListener('scroll', () => this.handleScroll(distance));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => { });
  }

  handleScroll(distance) {
    (window.scrollY > (distance - (window.innerHeight * 0.3)) &&
      (this.state.sectionOn !== "articleOn" && this.setState({ sectionOn: "articleOn" })))
    //(window.scrollY <= 500 && visibility === false) && (this.setState({ visible: true }))
  }

  render() {
    const elem = this.props.elem;
    return (<section id={elem.id} className={elem.section}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.article !== undefined) { return <Article key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
          if (item.asideNumber !== undefined) { return <AsideNumber key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
          if (item.timeLineBox !== undefined) { return <TimeLineBox key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
          if (item.flowToolsBox !== undefined) { return <FlowToolsBox key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
        })
      )}
    </section>)
  }
}

export default Section;