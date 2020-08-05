import React from 'react';
import './StartHeader.scss';
import { BRAND, MENU, PAGE_LETTERS } from '../../constans';
import HeroItem from './HeroItem';

class StartHeader extends React.Component {
  constructor(props) {
    super(props);
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const viewportOrientation = viewportHeight > viewportWidth ? 'mobile' : 'desktop';
    this.state = { orientation: viewportOrientation, elems: [], elemWidth: 0, elemHeight: 0 }
  }

  componentDidMount() {
    this.elems(this.state.orientation);
    window.addEventListener('resize', () => this.elems(this.state.orientation));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.elems());
  }

  elems(orientation) {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const viewportOrientation = viewportHeight > viewportWidth ? 'mobile' : 'desktop';
    viewportOrientation === 'mobile' && this.boxGenerator(7, Math.floor(viewportWidth / 7), viewportHeight);
    viewportOrientation === 'desktop' && this.boxGenerator(10, Math.floor(viewportHeight / 10), viewportWidth);
  }

  boxGenerator(nmbr, size, lenght) {
    let elemsNumber = nmbr * Math.floor(lenght / size);
    let elemsArr = [];
    for (let i = 0; i < elemsNumber; i++) { elemsArr[i] = i }; 
    elemsArr[0] = BRAND;//--tu wsadzić litery
    nmbr === 10 ? (elemsArr[(elemsArr.length - 10)] = MENU) : (elemsArr[8] = MENU);//--tu wsadzić litery
    nmbr === 10 ? this.addLetters(10, elemsArr) : this.addLetters(9, elemsArr);
    this.setState({ elems: elemsArr, elemHeight: size, elemWidth: size });
    //console.log(elemsArr);
  }

  addLetters(nmbr, collection) {
    if(nmbr === 10) { 
      PAGE_LETTERS[0].map((item, index) => (collection[index + 1] = item));
      PAGE_LETTERS[1].map((item, index) => (collection[index + 12] = item));
      PAGE_LETTERS[2].map((item, index) => (collection[index + 13] = item));
      PAGE_LETTERS[3].map((item, index) => (collection[(collection.length - 20) + index + 1] = item));
      PAGE_LETTERS[4].map((item, index) => (collection[(collection.length - 10) + index + 1] = item));
    };
  }

  render() {
    return <header className="start-header">
      <div className="hero">
        {(this.state.elems).map((item, index) => <HeroItem key={item.name + index} elem={item}/> )}
        <button className={MENU.name}>{MENU.text}</button>
      </div>
    </header>
  }
}

export default StartHeader;