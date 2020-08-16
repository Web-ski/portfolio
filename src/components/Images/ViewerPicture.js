import React from 'react';
import './ViewerBox.scss';

class ViewerPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: true }
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    this.setState(state => ({ toggleOn: !state.toggleOn }))
  }

  render() {
    let elem = this.props.elem;
    return (<div className="picture__box">
      <div onClick={this.handleClick} className={elem.img}>
        <div className="inner__picture" style={{ backgroundImage: `url(${elem.src})` }}></div>
        <div className="inner__icon"></div>
      </div>
      <div onClick={this.handleClick} className={this.state.toggleOn ? 'viewer__modal' : 'viewer__modal--active'} >
        <img className="modal" src={elem.src} />
      </div>
    </div>);
  }
}


export default ViewerPicture;