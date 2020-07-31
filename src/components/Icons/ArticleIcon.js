import React from 'react';
import './Icons.scss';

class ArticleIcon extends React.Component {
  render() {
    return <img className={this.props.elem.img} src={this.props.elem.src}>
    </img>
  }
}

export default ArticleIcon;