import React from 'react';
import './CV.scss';
import './TimeLine.scss';
import ArticleText from '../Texts/ArticleText'
import ArticleLink from '../Links/ArticleLink'
import OutsideLink from '../Links/OutsideLink'

class TimeLineItem extends React.Component {
  render() {
    return <div className={this.props.elem.div}>
      <div className="time-line__item time-line__item--1">
        {(this.props.elem.children).map((item, index) => {
          if (item.articleText !== undefined) { return <ArticleText key={item.toString() + index} elem={item} /> };
          if (item.articleLink !== undefined) { return <ArticleLink key={item.toString() + index} elem={item} /> };
          if (item.outsideLink !== undefined) { return <OutsideLink key={item.toString() + index} elem={item} /> };
        })}
      </div>
      <div className="time-line__item time-line__item--2">
        <div className="item-circle"></div>
        <div className="item-line"></div>
        <div className="text-line"></div>
      </div>
      <div className="time-line__item time-line__item--3"></div>
    </div>;
  }
}

export default TimeLineItem;