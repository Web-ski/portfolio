import React from 'react';
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import './Sections.scss';
import PageTitle from '../Titles/PageTitle'

class Section extends React.Component {

  render() {
    return <section className={this.props.elem.section}>Hej</section>
  }
}

export default Section;