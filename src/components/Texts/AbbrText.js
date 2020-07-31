import React from 'react';
import './Texts.scss';

class AbbrText extends React.Component {
  render() {
    return <abbr className={this.props.elem.abbr} title={this.props.elem.title}>{ this.props.elem.text }</abbr>
  }
}

export default AbbrText;