import React from 'react';
import './StartHeader.scss';
import './Menu.scss';
import './PageName.scss';
import './NavbarStart.scss';
import './Jumbotron.scss';
import { BRAND, MENU, PAGE_NAME, SECTION_NAME, NAME, NAV, NAV_CIRCLE } from '../../constans';
import HeroItem from './HeroItem';
import Main from '../Main/Main';
import { URL_HOME } from "../../constans";

class StartHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "navbar--off",
      circleClass: "",
      circleBtnClass: "",
      menuBtnClass: "",
      pageNameClass: "page__name",
      jumboClass: "jumbotron--off",
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
    this.state.navbarClass === "navbar" ? this.setState({ navbarClass: "navbar--off" }) : this.setState({ navbarClass: "navbar" });
    this.state.jumboClass === "jumbotron" ? this.setState({ jumboClass: "jumbotron--off" }) : this.setState({ jumboClass: "jumbotron" });
  }

  render() {
    //console.log(itemData.itemClass)
    return <>
      <header className={"start-header " + (this.state.headerToggle ? "" : "start-header--reverse")}>
        <section className="hero">
          <article className={this.state.pageNameClass}>
            <div className="block-stone-top"></div>
            <div className="block-stone-bottom"></div>
            {NAME.map((item, index) => <HeroItem key={"page" + index} elem={[item, "hero__title"]} />)}
          </article>
          <nav className={this.state.navbarClass}>
            {NAV.map((item, index) => <HeroItem key={"page" + index} elem={[item, "nav__btn"]} />)}
          </nav>
        </section>
        <section className="menu">
          <button onClick={this.handleClick} className={"menu__btn " + this.state.menuBtnClass}>
            {MENU.text}
          </button>
          <div className={"menu-circle " + this.state.circleClass}>
            {NAV_CIRCLE.map((item, index) => <HeroItem key={"section" + index} elem={[item, "circle__elem " + this.state.circleBtnClass]} />)}
          </div>
        </section>
        <section className={this.state.jumboClass}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => <div className="jumbotron__elem"></div>)}
        </section>
      </header>
      <Main url={URL_HOME} />
    </>
  }
}

export default StartHeader;