import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Titles.scss';

class PageTitle extends React.Component {
  render() {
    return <h1 className="page__title">{ this.props.text }</h1>
  }
}

export default PageTitle;