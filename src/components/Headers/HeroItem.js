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
      //if (elem.tag === 'button') {
      //  return <button className={elem.name}>{elem.text}</button>
      //};
    }
  }
  render() {
    return <div className="hero__item">{
      this.elem(this.props.elem)
    }</div>
  }
}

export default HeroItem;