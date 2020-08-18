import React from 'react';
import { Link } from "react-router-dom";
import './Links.scss';

class OutsideLink extends React.Component {
  render() {
    const elem = this.props.elem;
    return <a href={elem.href} className={elem.outsideLink} target={elem.target}>
      {elem.text}
    </a>
  }
}

export default OutsideLink;

