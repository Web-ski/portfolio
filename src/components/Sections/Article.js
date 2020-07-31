import React from 'react';
import './Sections.scss';
import PageTitle from '../Titles/PageTitle'
import SectionTitle from '../Titles/SectionTitle'
import ArticleText from '../Texts/ArticleText'
import ArticleLink from '../Links/ArticleLink'
import Div from './Div';
import PhotoLink from '../Links/PhotoLink';

class Article extends React.Component {

  render() {
    //console.log(this.props.elem)
    return <article className={this.props.elem.article}>
      {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {
          if (item.pageTitle !== undefined) { return <PageTitle key={item.pageTitle + index} elem={item} /> };
          if (item.sectionTitle !== undefined) { return <SectionTitle key={item.sectionTitle + index} elem={item} /> };
          if (item.articleText !== undefined) { return <ArticleText key={item.articleText + index} elem={item} /> };
          if (item.articleLink !== undefined) { return <ArticleLink key={item.articleLink + index} elem={item} /> };
          if (item.photoLink !== undefined) { return <PhotoLink key={item.articleLink + index} elem={item} /> };
          if (item.div !== undefined) { return <Div key={item.div + index} elem={item} /> };
        })
      )}
    </article>
  }
}

export default Article;