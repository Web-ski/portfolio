import React from 'react';
import './StartHeader.scss';
import { BRAND_NAME } from '../../constans';
import Brand from '../Brand/Brand'
import PageTitle from '../Titles/PageTitle'

class StartHeader extends React.Component {
  constructor(props) {
    super(props);
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const viewportOrientation = viewportHeight > viewportWidth ? 'mobile' : 'desktop';
    this.state = { orientation: viewportOrientation, boxSize: 1 }
  }

  componentDidMount(){
   this.elems(this.state.orientation);
  }

  elems(orientation) {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    let boxSize;
    orientation === 'mobile' && (boxSize = (viewportWidth / 9) && this.boxGenerator(boxSize, viewportHeight));
    orientation === 'desktop' && (boxSize = (viewportHeight / 10) && this.boxGenerator(boxSize, viewportWidth));
  }

  boxGenerator(size) {
    console.log('hje')
  }

  render() {
    //console.log(this.state.orientation)
    return <header className="second-header">
      <div className="hero">

      </div>
    </header>
  }
}

export default StartHeader;