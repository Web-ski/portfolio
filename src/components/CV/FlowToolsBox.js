import React from 'react';
import './CV.scss';
import './FlowTools.scss';
import FlowItem from "./FlowItem";

class FlowToolsBox extends React.Component {
  constructor(props) {
    super(props);
    const elemsArr = (props.elem.children[0].children);
    this.state = {
      tools: elemsArr,
    }
  };

  render() {
    return <article className={this.props.elem.flowToolsBox + " article__flow"}>
      <div className={this.props.elem.children[0].div}>
        {(this.props.elem.children[0].children).map((item, index) => <FlowItem key={"FlowItem" + index} elem={item} />)}
      </div>
    </article>;
  }
}

export default FlowToolsBox;