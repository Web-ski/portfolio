import React from 'react';
//import './Texts.scss';
import './StartHeader.scss';


class HeroItem extends React.Component {
  constructor(props) {
    super(props);
    const sectionName = (this.props.elem[0]).text;
    this.state = {
      section: sectionName,
      //sectionActive: this.props.sectionActive,
      stoneActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.btnSectionData(this.state.section);
    e.preventDefault();
  }

  render() {
    const elem = this.props.elem[0];
    const elemName = this.props.elem[1];
    const letters = elem.text.split('');
   // console.log(elem)

    const LetterItem = ({ letter }) => {
      return <span className={elem.name}>{letter}</span>
    }

    const NavBtn = ({ letter }) => {
      return <span className={"btn__letter"}>{letter}</span>
    }

    return (
      <>{
        elemName === 'hero__title' &&
        <h1 className={elemName}>{letters.map((item, index) => <LetterItem key={"item" + index} letter={item} />)}</h1>
        }
        {(elemName === 'circle__elem ' || elemName === 'circle__elem circle__elem--top') &&
          letters.map((item, index) => <LetterItem key={"item" + index} letter={item} />)
        }
        {(elemName === 'nav__btn') && <>
          <div className={"block-stone"}></div>
          <div className="nav__box">
            <button onClick={this.handleClick} className={elemName + ' ' + (this.props.sectionActive === this.state.section ? "nav__btn--active" : "")}>
              {letters.map((item, index) => <NavBtn key={"item" + index} letter={item}/>)}
            </button>
          </div>
        </>
        }
      </>
    )
  }
}

export default HeroItem;