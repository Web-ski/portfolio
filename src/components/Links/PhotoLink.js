import React from 'react';
import './Links.scss';
import ArticlePhoto from '../Images/ArticlePhoto';

class PhotoLink extends React.Component {
  render() {
    return <a className={this.props.elem.photoLink} href={this.props.elem.href} target="blank">
            {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {
            if (item.img !== undefined) { return <ArticlePhoto key={item.img + index} elem={item} /> };
        })
      )}
    </a>
  }
}

export default PhotoLink;