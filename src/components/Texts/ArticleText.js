import React from 'react';
import './Texts.scss';

class ArticleText extends React.Component {

  render() {
    return <p className="article__text">
      {this.props.text || this.props.elem.text }
      {/* -- tu dodać abbr */}
      </p>
  }
}

export default ArticleText;