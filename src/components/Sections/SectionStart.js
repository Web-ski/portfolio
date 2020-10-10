import React from 'react';
import './SectionsStart.scss';
import Article from './Article';

class SectionStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sectionOn: "articleOn",
      sectionDisplay: ''
    }
  }

  render() {
    const elem = this.props.elem;
    return (<section id={elem.id} className={elem.section}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.article !== undefined) { return <Article key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
        })
      )}
    </section>)
  }
}

export default SectionStart;