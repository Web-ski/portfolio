import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';


class FooterInfo extends React.Component {
  render() {
    return <article id={this.props.id} className={this.props.className}>
      <a className="footer__link">Webs</a>
  </article>
  }
}

export default FooterInfo;