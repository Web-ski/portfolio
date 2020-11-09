import React from 'react';
import './Lists.scss';
import AbbrText from './AbbrText';
import SpanText from './SpanText';

class ArticleList extends React.Component {

  render() {
    const elem = this.props.elem;
    return <ul className={elem !== undefined ? elem.articleList : "article__list"}>
      {(elem !== undefined && (
        elem.children !== undefined && (
          (elem.children).map((item, index) => {
          if (item.listElem !== undefined) { return <li key={item.listElem + index} className="list__elem">{item.text}</li> };
          })
        )
      ))}
    </ul>
  }
}

export default ArticleList;