import React from 'react';
import './Sections.scss';
import PageTitle from '../Titles/PageTitle'

class Article extends React.Component {

  render() {
    console.log(this.props.elem)
    return <article className={this.props.elem.article}>
      
    </article>
  }
}

export default Article;