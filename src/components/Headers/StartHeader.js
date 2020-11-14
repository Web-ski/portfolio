<<<<<<< HEAD
import React from 'react';
=======
import React, { Suspense } from 'react';
>>>>>>> develop
import './StartHeader.scss';
import './Menu.scss';
import './PageName.scss';
import './NavbarStart.scss';
<<<<<<< HEAD
import { BRAND, MENU, PAGE_NAME, SECTION_NAME, NAME, NAV, NAV_CIRCLE } from '../../constans';
import HeroItem from './HeroItem';
import Main from '../Main/Main';
import { URL_HOME } from "../../constans";
=======
import ContrastBtn from "../Buttons/ContrastBtn";
import { MENU, NAME, NAV, NAV_CIRCLE } from '../../constans';
import HeroItem from './HeroItem';
import { URL_HOME } from "../../constans";
const Main = React.lazy(() => import('../Main/Main'));
>>>>>>> develop

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
      headerToggle: true,
      sectionData: ""
    };
    this.btnSectionData = this.btnSectionData.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  btnSectionData(btnData) {
    this.setState({ sectionData: btnData });
    //console.log(btnData, "dwa", this.state.sectionData);
  }

  handleMenu(e) {
    //this.state.itemState.itemClass === "nav__btn" ? 
    this.state.circleClass === "" ? this.setState({ circleClass: "menu-circle--top" }) : this.setState({ circleClass: "" });
    this.state.circleBtnClass === "" ? this.setState({ circleBtnClass: "circle__elem--top" }) : this.setState({ circleBtnClass: "" });
    this.state.menuBtnClass === "" ? this.setState({ menuBtnClass: "menu__btn--off" }) : this.setState({ menuBtnClass: "" });
    this.state.pageNameClass === "page__name" ? this.setState({ pageNameClass: "page__name--off" }) : this.setState({ pageNameClass: "page__name" });
    this.state.navbarClass === "navbar" ? this.setState({ navbarClass: "navbar--off" }) : this.setState({ navbarClass: "navbar" });
    this.state.jumboClass === "jumbotron" ? this.setState({ jumboClass: "jumbotron--off" }) : this.setState({ jumboClass: "jumbotron" });
    e.preventDefault();
  }

  render() {
<<<<<<< HEAD
    //console.log(itemData.itemClass)
    return <>
=======
    return <>
      <ContrastBtn btnThemeData={this.btnThemeData} />
>>>>>>> develop
      <header className={"start-header " + (this.state.headerToggle ? "" : "start-header--reverse")}>
        <section className="hero">
          <article className={this.state.pageNameClass}>
            <div className="block-stone-top"></div>
            <div className="block-stone-bottom"></div>
            {NAME.map((item, index) => <HeroItem key={"page" + index} elem={[item, "hero__title"]} />)}
          </article>
          <nav className={this.state.navbarClass}>
            {NAV.map((item, index) => <HeroItem key={"page" + index}
              elem={[item, "nav__btn"]}
              btnSectionData={this.btnSectionData}
              sectionActive={this.state.sectionData} />)}
          </nav>
        </section>
<<<<<<< HEAD
        {/* <aside className={"alternate-" + this.state.navbarClass}>
          <div className="alternate-container">
            {NAV.map(() => <div className="alternate-stone"></div>)}
          </div>
        </aside> */}
=======
>>>>>>> develop
        <section className="menu">
          <button onClickCapture={this.handleMenu} className={"menu__btn " + this.state.menuBtnClass}>
            {MENU.text}
          </button>
          <div className={"menu-circle " + this.state.circleClass}>
            {NAV_CIRCLE.map((item, index) => <HeroItem key={"section" + index} elem={[item, "circle__elem " + this.state.circleBtnClass]} />)}
          </div>
        </section>
      </header>
<<<<<<< HEAD
      <Main url={URL_HOME} name={this.state.jumboClass} sectionDisplay={this.state.sectionData} />
=======
      <Suspense fallback={<div>Is loading...</div>}>
        <Main url={URL_HOME} name={this.state.jumboClass} sectionDisplay={this.state.sectionData} />
      </Suspense>
>>>>>>> develop
    </>
  }
}

export default StartHeader;