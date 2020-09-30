import React from 'react';
import './CV.scss';
import './FlowTools.scss';
import Div from "../Sections/Div"

class FlowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elem: this.props.elem[1],
      time: false
    }
  };

  componentDidMount() {
      this.timer = setTimeout(() => this.count(), (this.state.elem) * 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  count() {
    this.setState({ time: true })
  }

   render() {
     return (this.state.time) && <Div elem={this.props.elem[0]} />;
   }
}

export default FlowItem;