import React from 'react';
import { Link } from "react-router-dom";
import './SecondHeader.scss';
import { BRAND_NAME } from '../../constans';
import Brand from '../Brand/Brand'
import PageTitle from '../Titles/PageTitle'

class SecondHeader extends React.Component {

  constructor(props) {
    super(props);
    const pathname = (window.location.pathname).split('');
    const url = (pathname.slice(1, pathname.length)).join("");
    this.state = { parent: url };
  }

  render() {
    return <header className="second-header">
      <Link to="/"><Brand name="Back to Start"/></Link>
      <PageTitle text={this.state.parent} />
    </header>
  }
}

export default SecondHeader;