import React from 'react';
import './Sections.scss';
import Article from './Article';
import AsideNumber from '../Titles/AsideNumber';
import TimeLineBox from '../CV/TimeLineBox';
import FlowToolsBox from '../CV/FlowToolsBox';

class Section extends React.Component {
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
          if (item.asideNumber !== undefined) { return <AsideNumber key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
          if (item.timeLineBox !== undefined) { return <TimeLineBox key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
          if (item.flowToolsBox !== undefined) { return <FlowToolsBox key={item.toString() + index} elem={[item, this.state.sectionOn]} /> };
        })
      )}
    </section>)
  }
}

export default Section;