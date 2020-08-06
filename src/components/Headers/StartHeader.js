import React from 'react';
import './StartHeader.scss';
import { BRAND, MENU, PAGE } from '../../constans';
import HeroItem from './HeroItem';

class StartHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    const toggle = this.state.isToggleOn;
    return <header className="start-header">
      <div className="hero">
        <div className={"hero__item" + (toggle ? "" : " red")}>
          <p className={BRAND.name}>{BRAND.text}</p>
          <button onClick={this.handleClick} className={MENU.name}>{MENU.text}</button>
        </div>
        <HeroItem />
        {PAGE.map((item, index) => <HeroItem key={"page" + index} elem={item} />)}
        <HeroItem />
        <HeroItem />
      </div>
    </header>
  }
}

export default StartHeader;