import React, { Fragment } from 'react';
import '../../styles/_layout.scss';
import Footer from "../Footer/Footer";
import { URL_HOME } from "../../constans";
import StartHeader from '../Headers/StartHeader';
import Main from '../Main/Main';
import BackTopBtn from '../Buttons/BackTopBtn';

class Home extends React.Component {
  render() {
    //console.log(URL_HOME)
    return (
    <Fragment>
      <aside className="parallax"></aside>
      <StartHeader />
      <BackTopBtn />
      <Main url={ URL_HOME }/>
      <Footer />
    </Fragment>);
  }
}

export default Home;