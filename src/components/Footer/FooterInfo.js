import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.scss';


class FooterInfo extends React.Component {
  render() {
    return <article id={this.props.id} className={this.props.className}>
      <NavLink to="/front" activeClassName="footer__link--active" className="footer__link">
        Front
      </NavLink>
      <NavLink to="/ux" activeClassName="footer__link--active" className="footer__link">
        UX
      </NavLink>
      <NavLink to="/ui" activeClassName="footer__link--active" className="footer__link">
        UI
      </NavLink>
      <NavLink to="/cv" activeClassName="footer__link--active" className="footer__link">
        CV
      </NavLink>
    </article>
  }
}

export default FooterInfo;