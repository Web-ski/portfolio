import React from 'react';
import './Titles.scss';

class SectionTitle extends React.Component {
  render() {
    console.log(this.props.elem)
    return <h2 className={this.props.elem.sectionTitle}>{ this.props.elem.text }</h2>
  }
}

export default SectionTitle;