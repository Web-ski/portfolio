import React from 'react';
import './Texts.scss';
import AbbrText from './AbbrText';
import SpanText from './SpanText';

class ArticleText extends React.Component {

  render() {
    return <p className="article__text">
      {this.props.elem !== undefined ? this.props.elem.text : this.props.text}
      {(this.props.elem !== undefined && (
        this.props.elem.children !== undefined && (
          (this.props.elem.children).map((item, index) => {
            if (item.abbr !== undefined) { return <AbbrText key={item.abbr + index} elem={item} /> };
            if (item.span !== undefined) { return <SpanText key={item.span + index} elem={item} /> };
          })
        )
      ))}
    </p>
  }
}

export default ArticleText;