import React from 'react';
//import './Texts.scss';
import './StartHeader.scss';


class HeroItem extends React.Component {

  render() {
    const elem = this.props.elem[0];
    const elemName = this.props.elem[1];
    const letters = elem.text.split('');
    console.log(elem)
    //console.log(children)

    const LetterItem = ({ letter }) => {
      return <span className={elem.name}>{letter}</span>
    }

    return (
      <>{
        elemName === 'hero__title' &&
        <h1 className={elemName}>{letters.map((item, index) => <LetterItem key={"item" + index} letter={item} />)}</h1>
        }
        {elemName === 'nav__btn' &&
          letters.map((item, index) => <LetterItem key={"item" + index} letter={item} />)
        }
      </>
    )
  }
}

export default HeroItem;