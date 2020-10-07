import React from 'react';
//import './Texts.scss';

class HeroItem extends React.Component {

  render() {
    const elem = this.props.elem;
    const letters = elem.text.split('');
    console.log(elem)
    //console.log(children)

    const LetterItem = ({ letter }) => {
      if (elem.tag === 'h1') { return <h1 className={elem.name}>{letter}</h1> }
      if (elem.tag === 'span') { return <span className={elem.name}>{letter}</span> }
    }

    return (
      elem.tag !== 'span' ?
        <div className="hero__item">
          {letters.map((item, index) => <LetterItem key={"item" + index} letter={item} />)}
        </div> :
        <button className="nav__btn">
          {letters.map((item, index) => <LetterItem key={"item" + index} letter={item} />)}
        </button>
    )
  }
}

export default HeroItem;