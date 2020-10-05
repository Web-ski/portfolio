import React from 'react';
import './Brand.scss';
//import { BRAND_NAME } from '../../constans';

class Brand extends React.Component {
  render() {
    return <h4 className="brand">{ this.props.name }</h4>
  }
}

export default Brand;