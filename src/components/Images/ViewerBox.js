import React from 'react';
import './Images.scss';
import ArticlePhoto from './ArticlePhoto';

class ViewerBox extends React.Component {
  render() {
    const elem = this.props.elem;
    return <div className={elem.viewerBox}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.img !== undefined) { return <ArticlePhoto key={item.toString() + index} elem={item} /> };
        })
      )}
    </div>
  }
}

export default ViewerBox;