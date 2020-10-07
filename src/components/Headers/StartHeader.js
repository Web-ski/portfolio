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
      itemState: { itemClass: "nav__btn" },
      headerToggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let startState = this.state.itemState.itemClass;
    startState = (startState === "nav__btn" ? "nav__btn nav__btn--top" : "nav__btn")
    this.setState(state => ({ itemState: { itemClass: startState }, headerToggle: !state.headerToggle }));
  }

  render() {
    const itemData = this.state.itemState;
    //console.log(itemData.itemClass)
    return <>
      <header className={"start-header " + (this.state.headerToggle ? "" : "start-header--reverse")}>
        <div className="hero">
          <div className="page__name">
            {NAME.map((item, index) => <HeroItem key={"page" + index} elem={[item, "hero__title"]} />)}
          </div>
        </div>
        <div className="menu">
          <button onClick={() => this.handleClick} className="menu__btn">{MENU.text}</button>
          <nav className="navbar">
            {NAV.map((item, index) => <HeroItem key={"section" + index} elem={[item, this.state.itemState.itemClass]} />)}
          </nav>
        </div>
      </header>
      <Main url={URL_HOME} />
    </>
  }
}

export default StartHeader;