import React from 'react';
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import './SecondHeader.scss';
import { BRAND_NAME } from '../../constans';
import Brand from '../Brand/Brand'
import PageTitle from '../Titles/PageTitle'

class StartHeader extends React.Component {

  render() {
    return <header className="second-header">
      <PageTitle text={"HERO"} />
    </header>
  }
}

export default StartHeader;