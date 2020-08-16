import React from 'react';
import './Titles.scss';

class AsideNumber extends React.Component {
  render() {
    let elem = this.props.elem;
    return <h4 className={elem.asideNumber}>{ elem.text }</h4>
  }
}

export default AsideNumber;