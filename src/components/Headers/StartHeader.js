import React from 'react';
import './StartHeader.scss';
import { BRAND, MENU, PAGE_NAME, SECTION_NAME, NAME, NAV } from '../../constans';
import HeroItem from './HeroItem';
import Main from '../Main/Main';
import { URL_HOME } from "../../constans";

class StartHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemState: { itemClass: "hero__item" },
      headerToggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let startState = this.state.itemState.itemClass;
    startState = (startState === "hero__item" ? "hero__item red" : "hero__item")
    this.setState(state => ({ itemState: { itemClass: startState }, headerToggle: !state.headerToggle }));
  }

  render() {
    const itemData = this.state.itemState;
    //console.log(itemData.itemClass)
    return <>
      <header className={"start-header " + (this.state.headerToggle ? "" : "start-header--reverse")}>
        <div className="hero">
          <nav className="navbar">
            {NAV.map((item, index) => <HeroItem key={"section" + index} elem={item}/>)}
          </nav>
          <div className="page__name">
            {NAME.map((item, index) => <HeroItem key={"page" + index} elem={item}/>)}
          </div>
        </div>
        <aside className="menu">
          <button className="menu__btn">{MENU.text}</button>
        </aside>
      </header>
      <Main url={URL_HOME} />
    </>
  }
}

export default StartHeader;