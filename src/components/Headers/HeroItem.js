import React from 'react';
//import './Texts.scss';

class HeroItem extends React.Component {

  elem(elem) {
    if (typeof elem === 'object') {
      if (elem.tag === 'p') {
        return <p className={elem.name}>{elem.text}</p>
      };
      if (elem.tag === 'h1') {
        let text = elem.text;
        let arr = text;
        typeof text === "string" && (arr = text.split(""));
        //console.log(arr);
        return arr.map((item, index) => <h1 key={item.toString() + index} className={elem.name}>{item}</h1> )
      };
    }
  }
  render() {
    const parent = this.props.elem[0];
    const reverse = this.props.elem[1];
    const children = this.props.elem[2];
    //console.log(children)
    return <div className={parent.itemClass}>
      <div className="item__averse">
        {this.elem(children)}
      </div>
      <div className="item__reverse">
        {reverse !== undefined && <a className="reverse__link page__title" href={"#" + reverse}>{reverse}</a>}
      </div>

    </div>
  }
}

export default HeroItem;