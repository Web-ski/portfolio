import React from 'react';
//import './Texts.scss';

class HeroElem extends React.Component {
  render() {
    console.log(this.props.elem)
    return <div className="hero__item">{
      typeof this.props.elem === 'object' && this.props.elem.name
      }</div>
  }
}

export default HeroElem;