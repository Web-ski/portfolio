import React, { Fragment } from 'react';
import '../../styles/_layout.scss';
import StartHeader from '../Headers/StartHeader';

class Home extends React.Component {
  render() {
    //console.log(URL_HOME)
    return (
    <Fragment>
      <aside className="parallax"></aside>
      <StartHeader />
    </Fragment>);
  }
}

export default Home;