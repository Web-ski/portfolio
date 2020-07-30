import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import { FOOTER_TEXT_AUTHOR } from '../../constans';
import FooterInfo from './FooterInfo'

class Footer extends React.Component {
  render() {
    return <footer className={"footer"}>
      <section className="footer">
        <FooterInfo id="footer-info" className="article" />
        <article id="footer-author" className="article">
          <p className="article__text">{FOOTER_TEXT_AUTHOR}</p>
        </article>
      </section>
      </footer>
  }
}

export default Footer;