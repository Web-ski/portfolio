import React from 'react';
import './SliderBox.scss'

class SliderBox extends React.Component {
  constructor(props) {
    super(props);
    const elemsArr = new Array((props.elem.children).length);
    const fullArr = elemsArr.fill(0).map((item, i) => i);
    //console.log(fullArr);
    this.state =
    {
      slides: fullArr,
      animationToggle: '',
      modalToogle: true
    };    
  };

  handleClick(i) {
    function moveRight(arr) {
      let A = arr[0];
      arr.push(A);
      arr.shift();
      return arr;
    }

    function moveLeft(arr) {
      let Z = arr[arr.length - 1];
      arr.unshift(Z);
      arr.pop();
      return arr;
    }

    let slides;
    let animation;
    i === 0 && (slides = moveLeft(this.state.slides));
    i === 0 && (animation = 'slide__move--toRight');
    i === 1 && (slides = moveRight(this.state.slides));
    i === 1 && (animation = 'slide__move--toLeft');
    this.setState({ slides: slides, animationToggle: animation });
  };
  updateState() {
    this.setState({ modalToogle: !this.state.modalToogle })
  }

  render() {
    const elem = this.props.elem;

    return <div className={elem.sliderBox}>
    <button onClick={this.handleClick.bind(this, 0)} className="slider__arrow slider__arrow--left"></button>
    <div className='slides__container'>
      {(elem.children).map((item, index) =>
        index === this.state.slides[0] && <div className={"slide " + this.state.animationToggle} style={{ backgroundImage: `url(${item.src})` }}></div>
      )}
    </div>
    <button onClick={this.handleClick.bind(this, 1)} className="slider__arrow slider__arrow--right"></button>
    <button onClick={this.updateState.bind(this)} className="slider__sizer"></button>
    <div className={"slides__modal " + (this.state.modalToogle ? '' : 'modal--open')}>
      <button onClick={this.handleClick.bind(this, 0)} className="slider__arrow slider__arrow--left"></button>
      <div className='slides__container'>
        {(elem.children).map((item, index) =>
          index === this.state.slides[0] && <div className={"slide " + this.state.animationToggle} style={{ backgroundImage: `url(${item.src})` }}></div>
        )}
      </div>
      <button onClick={this.handleClick.bind(this, 1)} className="slider__arrow slider__arrow--right"></button>
      <button onClick={this.updateState.bind(this)} className="slider__resizer"></button>
    </div>
  </div>;
  }
}

export default SliderBox;