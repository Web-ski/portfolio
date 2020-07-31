import React from 'react';
import './Texts.scss';

class SpanText extends React.Component {
  render() {
    return <span className={this.props.elem.span}>{ this.props.elem.text }</span>
  }
}

export default SpanText;