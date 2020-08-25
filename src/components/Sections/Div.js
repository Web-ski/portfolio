import React from 'react';
import './Sections.scss';
import ArticleIcon from '../Icons/ArticleIcon';
import OutsideLink from '../Links/OutsideLink'

class Div extends React.Component {
  render() {
    return <div className={this.props.elem.div}>
      {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {
          if (item.img !== undefined) { return <ArticleIcon key={item.img + index} elem={item} /> };
          if (item.outsideLink !== undefined) { return <OutsideLink key={item.toString() + index} elem={item} /> };
        })
      )}
    </div>
  }
}

export default Div;