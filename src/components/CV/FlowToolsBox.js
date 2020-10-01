import React from 'react';
import './CV.scss';
import './FlowTools.scss';
import FlowItem from "./FlowItem";

class FlowToolsBox extends React.Component {
  constructor(props) {
    super(props);
    const elemsArr = (props.elem[0].children[0].children);
    this.state = {
      tools: elemsArr,
      divNumber: 0
    }
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.reloadArray());
    }
    this.reloadArray();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reloadArray());
  }

  reloadArray() {
    let arr = this.state.tools;
    this.setState({ tools: arr })
  }

  render() {
    const elem = this.props.elem[0];
    const elemsOn = this.props.elem[1];
    return <article className={elem.flowToolsBox + " article__flow"  + " " + elemsOn}>
      <div className={elem.children[0].div}>
        {(this.state.tools).map((item, index) => <FlowItem key={"tool" + index} elem={[this.state.tools[index], index]} />)}
      </div>
    </article>;
  }
}

export default FlowToolsBox;