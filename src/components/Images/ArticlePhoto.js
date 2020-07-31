import React from 'react';
import './Images.scss';

class ArticlePhoto extends React.Component {
  render() {
    return <img className={this.props.elem.img} src={this.props.elem.src}>
    </img>
  }
}

export default ArticlePhoto;