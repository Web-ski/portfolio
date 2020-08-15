import React from 'react';
import './Brand.scss';
import { BRAND_NAME } from '../../constans';

class Brand extends React.Component {
  render() {
    return <h4 className="brand">{ BRAND_NAME }</h4>
  }
}

export default Brand;