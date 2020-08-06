import React from 'react';
import './StartHeader.scss';
import { BRAND, MENU, PAGE, SECTION_NAME } from '../../constans';
import HeroItem from './HeroItem';

class StartHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      itemState: { itemClass: "hero__item" }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let startState = this.state.itemState.itemClass;
    startState = (startState === "hero__item" ? "hero__item red" : "hero__item")
    this.setState({ itemState: { itemClass: startState } });
  }

  render() {
    const itemData = this.state.itemState;
   //console.log(itemData.itemClass)
    return <header className="start-header">
      <div className="hero">
        <div className={ itemData.itemClass }>
          <p className={BRAND.name}>{BRAND.text}</p>
          <button onClick={this.handleClick} className={MENU.name}>{MENU.text}</button>
        </div>
        <HeroItem elem={ [itemData] }/>
        {PAGE.map((item, index) => <HeroItem key={"page" + index} elem={[itemData, SECTION_NAME[index], item]} />)}
        <HeroItem elem={ [itemData, SECTION_NAME[5]] }/>
        <HeroItem elem={ [itemData] }/>
      </div>
    </header>
  }
}

export default StartHeader;