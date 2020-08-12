import React from 'react';
import './Sections.scss';
import Article from './Article';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount() {
    let startView = document.querySelector(".start-header").offsetHeight;
    window.addEventListener('scroll', () => this.handleScroll(startView));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll(distance) {
    (window.scrollY > (distance + 200) && console.log('hej'));
    //(window.scrollY <= 500 && visibility === false) && (this.setState({ visible: true }))
  }

  render() {
    return (<section id={this.props.elem.id} className={this.props.elem.section}>
      {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {
          if (item.article !== undefined) { return <Article key={item.article + index} elem={item} /> };
        })
      )}
    </section>)
  }
}

export default Section;