import React from 'react';
import './Titles.scss';

class AsideNumber extends React.Component {
  render() {
    const elem = this.props.elem[0];
    const elemsOn = this.props.elem[1];
    return <h4 className={elem.asideNumber + " " + elemsOn}>{ elem.text }</h4>
  }
}

export default AsideNumber;