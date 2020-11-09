import React from 'react';
import './ViewerBox.scss';
import '../Sliders/SliderBox';

class ViewerPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: true,
      imageNumber: this.props.elem[2]
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(i) {
    let collection = this.props.elem[1];
    if (i === 'show') { this.setState(state => ({ toggleOn: !state.toggleOn })) };
    if (typeof i === 'number') { this.setState(state => ({ toggleOn: !state.toggleOn })); this.setState({ imageNumber: i })};
    if (i === 'right' && this.state.imageNumber < (collection.length - 1)) { this.setState(state => ({ imageNumber: state.imageNumber + 1 })) };
    if (i === 'left' && this.state.imageNumber > 0) { this.setState(state => ({ imageNumber: state.imageNumber - 1 })) };
    //console.log(typeof i)
  }

  render() {
    let elem = this.props.elem[0];
    let collection = this.props.elem[1];
    let index = this.props.elem[2];

    return (<div className="picture__box">
      <div onClick={this.handleClick.bind(this, 'show')} className={elem.img}>
        <div className="inner__picture" style={{ backgroundImage: `url(${elem.src})` }}></div>
        <div className="inner__icon"></div>
      </div>
      <div className={this.state.toggleOn ? 'viewer__modal' : 'viewer__modal--active'} >
        <p className="modal__text">{(this.state.imageNumber + 1) + "/" + collection.length}</p>
        <button onClick={this.handleClick.bind(this, 'left')} className="viewer__arrow viewer__arrow--left"></button>
        <img className="modal" src={collection[this.state.imageNumber].src} onClick={this.handleClick.bind(this, index)} />
        <button onClick={this.handleClick.bind(this, 'right')} className="viewer__arrow viewer__arrow--right"></button>
      </div>
    </div>);
  }
}


export default ViewerPicture;