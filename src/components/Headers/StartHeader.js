import React from 'react';
import './StartHeader.scss';
import { BRAND, MENU, PAGE } from '../../constans';
import HeroItem from './HeroItem';

class StartHeader extends React.Component {

  render() {

    return <header className="start-header">
      <div className="hero">
        <div className="hero__item">
          <p className={BRAND.name}>{BRAND.text}</p>
          <button className={MENU.name}>{MENU.text}</button>
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