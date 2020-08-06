import React from 'react';
//import './Texts.scss';

class HeroItem extends React.Component {

  elem(elem) {
    if (typeof elem === 'object') {
      if (elem.tag === 'p') {
        return <p className={elem.name}>{elem.text}</p>
      };
      if (elem.tag === 'h1') {
        return <h1 className={elem.name}>{elem.text}</h1>
      };
    }
  }
  render() {
    const parent = this.props.elem[0];
    const children = this.props.elem[1];
    return <div className={parent.itemClass}>{
      this.elem(children)
    }</div>
  }
}

export default HeroItem;