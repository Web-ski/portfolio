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
    const reverse = this.props.elem[1];
    const children = this.props.elem[2];
    console.log(reverse)
    return <div className={parent.itemClass}>
      {
        this.elem(children)}
      {
        reverse !== undefined && <div className="item__reverse">
          <a className="reverse__link page__title" href={"#"+reverse}>{reverse}</a>
        </div>
      }
    </div>
  }
}

export default HeroItem;