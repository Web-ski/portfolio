import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Footer.scss';
import { FOOTER_TEXT_AUTHOR } from '../../constans';
import FooterInfo from './FooterInfo'
import ArticleText from '../Texts/ArticleText'

class Footer extends React.Component {
  render() {
    return <footer className={"footer"}>
      <section className="footer">
        <FooterInfo id="footer-info" className="article" />
        <article id="footer-author" className="article">
          <ArticleText text={FOOTER_TEXT_AUTHOR} />
        </article>
      </section>
      </footer>
  }
}

export default Footer;