import React from 'react';
import './Sections.scss';
import Article from './Article';

class Section extends React.Component {

  render() {
    return (<section id={this.props.elem.id} className={this.props.elem.section}>
      {(this.props.elem.children !== undefined) && (
        (this.props.elem.children).map((item, index) => {         
         if (item.article !== undefined) {return <Article key={item.article + index} elem={item}/>};
        })
      )}
    </section>)
  }
}

export default Section;