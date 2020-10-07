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
      navClass: "",
      navBtnClass: "",
      menuBtnClass: "",
      headerToggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //this.state.itemState.itemClass === "nav__btn" ? 
    this.state.navClass === "" ? this.setState({ navClass: "navbar--top" }) : this.setState({ navClass: "" });
    this.state.navBtnClass === "" ? this.setState({ navBtnClass: "nav__btn--top" }) : this.setState({ navBtnClass: "" });
    this.state.menuBtnClass === "" ? this.setState({ menuBtnClass: "menu__btn--off" }) : this.setState({ menuBtnClass: "" });

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
          <button onClick={this.handleClick} className={"menu__btn " + this.state.menuBtnClass}>{MENU.text}</button>
          <nav className={"navbar " + this.state.navClass}>
            {NAV.map((item, index) => <HeroItem key={"section" + index} elem={[item, "nav__btn " + this.state.navBtnClass]} />)}
          </nav>
        </div>
      </header>
      <Main url={URL_HOME} />
    </>
  }
}

export default StartHeader;