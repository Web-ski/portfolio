import React, { Fragment } from 'react';
import './UX.scss';
import Footer from "../Footer/Footer"
import SecondHeader from '../Headers/SecondHeader'
import { URL_UX } from "../../constans";
import SecondMain from '../Main/SecondMain';
import BackTopBtn from '../Buttons/BackTopBtn';

class UX extends React.Component {
  render() {
    return <Fragment>
      <aside className="parallax parallax-second"></aside>
      <div>
        <SecondHeader />
        <BackTopBtn />
        <SecondMain url={URL_UX} />
        <Footer />
      </div>
    </Fragment>
  }
}

export default UX;