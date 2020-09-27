import React from 'react';
import './CV.scss';
import './FlowTools.scss';
import Div from "../Sections/Div"

class FlowItem extends React.Component {
  constructor(props) {
    super(props);
    const elemsArr = (props.elem);
    const time = (props.number);
    this.state = {
      arr: elemsArr,
      tools: 0,
      time: time
    };
  };

  // componentDidMount() {
  //   this.timer = setTimeout(() => this.count(), (this.state.time) * 5000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  // count() {
  //   let changeTools = ((this.state.tools) === 0 ? this.state.arr : 0);
  //   this.setState({ tools: changeTools });
  // }

  // render() {
  //   return (this.state.tools !== 0 && <Div elem={this.state.tools} />);
  // }

  render() {
  return <Div elem={this.props.elem} />;
  }
}

export default FlowItem;