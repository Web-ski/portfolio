import React from 'react';
import './StartHeader.scss';
import { BRAND, MENU, PAGE_NAME, SECTION_NAME } from '../../constans';
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
            {SECTION_NAME.map((item, index) => <button key={"section" + index} className="nav__btn">{item}</button>)}
          </nav>
          <div className="page__name">
            {PAGE_NAME.map((item, index) => <h1 key={"page" + index} className="page__title">{item}</h1>)}
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