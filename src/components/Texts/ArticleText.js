import React from 'react';
import './Texts.scss';
import AbbrText from './AbbrText';
import SpanText from './SpanText';

class ArticleText extends React.Component {

  render() {
    const elem = this.props.elem;
    return <p className={elem !== undefined ? elem.articleText : "article__text"}>
      {elem !== undefined ? elem.text : this.props.text}
      {(elem !== undefined && (
        elem.children !== undefined && (
          (elem.children).map((item, index) => {
            if (item.abbr !== undefined) { return <AbbrText key={item.abbr + index} elem={item} /> };
            if (item.span !== undefined) { return <SpanText key={item.span + index} elem={item} /> };
            if (item.text !== undefined) { return item.text };
          })
        )
      ))}
    </p>
  }
}

export default ArticleText;