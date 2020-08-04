import React from 'react';
import './StartHeader.scss';
import { BRAND_NAME, MENU_NAME, PAGE_NAME } from '../../constans';

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
    viewportOrientation === 'mobile' && this.boxGenerator(9, Math.floor(viewportWidth / 9), viewportHeight);
    viewportOrientation === 'desktop' && this.boxGenerator(10, Math.floor(viewportHeight / 10), viewportWidth);
  }

  boxGenerator(nmbr, size, lenght) {
    let elemsNumber = nmbr * Math.floor(lenght / size);
    let elemsArr = [];
    for (let i = 0; i < elemsNumber; i++) { elemsArr[i] = " " }; 
    elemsArr[0] = BRAND_NAME;//--tu wsadzić litery
    nmbr === 10 ? (elemsArr[(elemsArr.length - 10)] = MENU_NAME) : (elemsArr[8] = MENU_NAME);//--tu wsadzić litery
    this.setState({ elems: elemsArr, elemHeight: size, elemWidth: size });
    console.log(elemsArr);
  }

  render() {
    const itemStyle = {
      width: this.state.elemWidth,
      height: this.state.elemHeight
    };

    return <header className="start-header">
      <div className="hero">
        {(this.state.elems).map((item, index) => 
        <div className="hero__item" /*style={itemStyle}*/>{item}</div>)}
      </div>
    </header>
  }
}

export default StartHeader;