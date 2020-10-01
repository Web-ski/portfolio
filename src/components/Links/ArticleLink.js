import React from 'react';
import { Link } from "react-router-dom";
import './Links.scss';

class ArticleLink extends React.Component {
  render() {
    return <Link to={this.props.elem.href} className={this.props.elem.articleLink}>
      {this.props.elem.text}
      <span className="link__points">
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
      </span>
    </Link>
  }
}

export default ArticleLink;

