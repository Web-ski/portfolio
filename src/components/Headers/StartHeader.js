import React from 'react';
import './StartHeader.scss';
import './Menu.scss';
import './PageName.scss';
import { BRAND, MENU, PAGE_NAME, SECTION_NAME, NAME, NAV, NAV_CIRCLE } from '../../constans';
import HeroItem from './HeroItem';
import Main from '../Main/Main';
import { URL_HOME } from "../../constans";

class StartHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circleClass: "",
      circleBtnClass: "",
      menuBtnClass: "",
      pageNameClass: "page__name",
      headerToggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //this.state.itemState.itemClass === "nav__btn" ? 
    this.state.circleClass === "" ? this.setState({ circleClass: "menu-circle--top" }) : this.setState({ circleClass: "" });
    this.state.circleBtnClass === "" ? this.setState({ circleBtnClass: "circle__elem--top" }) : this.setState({ circleBtnClass: "" });
    this.state.menuBtnClass === "" ? this.setState({ menuBtnClass: "menu__btn--off" }) : this.setState({ menuBtnClass: "" });
    this.state.pageNameClass === "page__name" ? this.setState({ pageNameClass: "page__name--off" }) : this.setState({ pageNameClass: "page__name" });
  }

  render() {
    //console.log(itemData.itemClass)
    return <>
      <header className={"start-header " + (this.state.headerToggle ? "" : "start-header--reverse")}>
        <section className="hero">
          <div className={this.state.pageNameClass}>
            <div className="block-stone-top"></div>
            <div className="block-stone-bottom"></div>
            {NAME.map((item, index) => <HeroItem key={"page" + index} elem={[item, "hero__title"]} />)}
          </div>
        </section>
        <section className="menu">
          <button onClick={this.handleClick} className={"menu__btn " + this.state.menuBtnClass}>
            {MENU.text}
          </button>
          <nav className={"menu-circle " + this.state.circleClass}>
            {NAV_CIRCLE.map((item, index) => <HeroItem key={"section" + index} elem={[item, "circle__elem " + this.state.circleBtnClass]} />)}
          </nav>
        </section>
      </header>
      <Main url={URL_HOME} />
    </>
  }
}

export default StartHeader;