import React from 'react';
import './Sections.scss';
import PageTitle from '../Titles/PageTitle'
import SectionTitle from '../Titles/SectionTitle'
import ArticleText from '../Texts/ArticleText'
import ArticleLink from '../Links/ArticleLink'
import OutsideLink from '../Links/OutsideLink'
import Div from './Div';
import PhotoLink from '../Links/PhotoLink';
import ViewerBox from '../Images/ViewerBox';
import SliderBox from '../Sliders/SliderBox';
import AsideNumber from '../Titles/AsideNumber';

class Article extends React.Component {

  render() {
    const elem = this.props.elem[0];
    const elemsOn = this.props.elem[1];
    return <article className={elem.article + " " + elemsOn}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.pageTitle !== undefined) { return <PageTitle key={item.toString() + index} elem={item} /> };
          if (item.sectionTitle !== undefined) { return <SectionTitle key={item.toString() + index} elem={item} /> };
          if (item.articleText !== undefined) { return <ArticleText key={item.toString() + index} elem={item} /> };
          if (item.asideNumber !== undefined) { return <AsideNumber key={item.toString() + index} elem={item} /> };
          if (item.articleLink !== undefined) { return <ArticleLink key={item.toString() + index} elem={item} /> };
          if (item.outsideLink !== undefined) { return <OutsideLink key={item.toString() + index} elem={item} /> };
          if (item.photoLink !== undefined) { return <PhotoLink key={item.toString() + index} elem={item} /> };
          if (item.div !== undefined) { return <Div key={item.toString() + index} elem={item} /> };
          if (item.text !== undefined) { return item.text };
          if (item.sliderBox!== undefined) { return <SliderBox key={item.toString() + index} elem={item} /> };
          if (item.viewerBox !== undefined) { return <React.Fragment key={item.toString() + index}>
              <ViewerBox elem={item} /> 
              <div className="article__pattern">
                <div className="pattern"></div>
              </div>
            </React.Fragment>
          };
        })
      )}
    </article>
  }
}

export default Article;