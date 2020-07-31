import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
//import './Footer.scss';


class ArticleLink extends React.Component {
  render() {
    return <Link to={this.props.elem.href} className={this.props.elem.articleLink}>
      {this.props.elem.text}
    </Link>
  }
}

export default ArticleLink;

