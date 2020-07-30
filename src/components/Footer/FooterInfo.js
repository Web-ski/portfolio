import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
//import './App.css';


class FooterInfo extends React.Component {
  render() {
    return <article id={this.props.id} className={this.props.className}>
      <NavLink to="/webs" activeClassName="footer__link">
        Webs
      </NavLink>
      <NavLink to="/ux" activeClassName="footer__link">
        UX
      </NavLink>
      <NavLink to="/ui" activeClassName="footer__link">
        UI
      </NavLink>
      <NavLink to="/cv" activeClassName="footer__link">
        CV
      </NavLink>
    </article>
  }
}

export default FooterInfo;