import React from 'react';
import './Sections.scss';
import ArticleIcon from '../Icons/ArticleIcon';

class Div extends React.Component {
  render() {
    return <div className={this.props.elem.div}>
      {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {
          if (item.img !== undefined) { return <ArticleIcon key={item.img + index} elem={item} /> };
        })
      )}
    </div>
  }
}

export default Div;