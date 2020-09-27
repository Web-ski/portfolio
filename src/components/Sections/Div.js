import React from 'react';
import './Sections.scss';
import ArticleIcon from '../Icons/ArticleIcon';
import OutsideLink from '../Links/OutsideLink'
import ArticleText from '../Texts/ArticleText'
import ArticleLink from '../Links/ArticleLink'

class Div extends React.Component {
  render() {
    return <div className={this.props.elem.div}>
      {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {
          if (item.img !== undefined) { return <ArticleIcon key={item.img + index} elem={item} /> };
          if (item.outsideLink !== undefined) { return <OutsideLink key={item.toString() + index} elem={item} /> };
          if (item.div !== undefined) { return <Div key={item.toString() + index} elem={item} /> };
          if (item.articleText !== undefined) { return <ArticleText key={item.toString() + index} elem={item} /> };
          if (item.articleLink !== undefined) { return <ArticleLink key={item.toString() + index} elem={item} /> };
        })
      )}
    </div>
  }
}

export default Div;